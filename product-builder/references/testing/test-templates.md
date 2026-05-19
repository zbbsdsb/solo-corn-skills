# Testing Resources

## 1. Unit Test Templates

### 1.1 Jest Setup

```typescript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.test.ts'],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.ts'],
};
```

### 1.2 Model Tests

```typescript
import mongoose from 'mongoose';
import User from '../models/User';

describe('User Model', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI!);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should create a user with valid data', async () => {
    const user = await User.create({
      email: 'test@example.com',
      password: 'hashedpassword',
      name: 'Test User',
    });

    expect(user._id).toBeDefined();
    expect(user.email).toBe('test@example.com');
    expect(user.name).toBe('Test User');
    expect(user.role).toBe('user');
  });

  it('should throw error without email', async () => {
    await expect(
      User.create({
        password: 'hashedpassword',
        name: 'Test User',
      })
    ).rejects.toThrow();
  });

  it('should throw error for invalid email', async () => {
    await expect(
      User.create({
        email: 'invalid-email',
        password: 'hashedpassword',
        name: 'Test User',
      })
    ).rejects.toThrow();
  });
});
```

### 1.3 Controller Tests

```typescript
import request from 'supertest';
import app from '../server';
import User from '../models/User';

describe('User Controller', () => {
  let token: string;

  beforeAll(async () => {
    await User.create({
      email: 'admin@example.com',
      password: 'hashedpassword',
      name: 'Admin',
      role: 'admin',
    });

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'admin@example.com',
        password: 'password',
      });

    token = response.body.token;
  });

  it('should get all users', async () => {
    const response = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get single user', async () => {
    const user = await User.findOne({ email: 'admin@example.com' });
    const response = await request(app)
      .get(`/api/users/${user!._id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.email).toBe('admin@example.com');
  });

  it('should return 401 without token', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(401);
  });
});
```

## 2. Integration Test Templates

### 2.1 API Integration Tests

```typescript
import request from 'supertest';
import app from '../server';
import mongoose from 'mongoose';

describe('API Integration Tests', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI!);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    await mongoose.connection.dropDatabase();
  });

  describe('Authentication', () => {
    it('should register a new user', async () => {
      const response = await request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: 'password123',
          name: 'Test User',
        });

      expect(response.status).toBe(201);
      expect(response.body.user.email).toBe('test@example.com');
      expect(response.body.token).toBeDefined();
    });

    it('should login with valid credentials', async () => {
      await request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: 'password123',
          name: 'Test User',
        });

      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123',
        });

      expect(response.status).toBe(200);
      expect(response.body.token).toBeDefined();
    });

    it('should reject invalid login', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'nonexistent@example.com',
          password: 'password123',
        });

      expect(response.status).toBe(401);
    });
  });

  describe('Tasks API', () => {
    let token: string;

    beforeEach(async () => {
      const registerResponse = await request(app)
        .post('/api/auth/register')
        .send({
          email: 'test@example.com',
          password: 'password123',
          name: 'Test User',
        });

      token = registerResponse.body.token;
    });

    it('should create a task', async () => {
      const response = await request(app)
        .post('/api/tasks')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Test Task',
          description: 'Test description',
        });

      expect(response.status).toBe(201);
      expect(response.body.title).toBe('Test Task');
    });

    it('should get all tasks', async () => {
      await request(app)
        .post('/api/tasks')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Task 1' });

      await request(app)
        .post('/api/tasks')
        .set('Authorization', `Bearer ${token}`)
        .send({ title: 'Task 2' });

      const response = await request(app)
        .get('/api/tasks')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).toBe(200);
      expect(response.body.length).toBe(2);
    });
  });
});
```

## 3. E2E Test Templates

### 3.1 Playwright Setup

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

### 3.2 E2E Tests

```typescript
import { test, expect } from '@playwright/test';

test('user can register and login', async ({ page }) => {
  await page.goto('/register');
  
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('text=Welcome, Test User')).toBeVisible();
});

test('user can create a task', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');

  await page.click('text=New Task');
  await page.fill('input[name="title"]', 'My First Task');
  await page.click('button[type="submit"]');

  await expect(page.locator('text=My First Task')).toBeVisible();
});

test('user can update task status', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');

  await page.click('select[name="status"]');
  await page.selectOption('select[name="status"]', 'in-progress');

  await expect(page.locator('text=In Progress')).toBeVisible();
});
```

## 4. Test Coverage Configuration

### 4.1 Jest Coverage

```typescript
// jest.config.js
module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

### 4.2 Coverage Report Example

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   85.29 |   78.57  |   88.89 |   85.29 |
 user.ts  |   90.91 |   83.33  |     100 |   90.91 | 15
 task.ts  |   80    |   75     |   75    |   80    | 25, 30
----------|---------|----------|---------|---------|-------------------
```

## 5. Testing Best Practices

### 5.1 Test Structure

```
tests/
├── unit/
│   ├── models/
│   │   ├── User.test.ts
│   │   └── Task.test.ts
│   └── controllers/
│       └── UserController.test.ts
├── integration/
│   └── api/
│       ├── auth.test.ts
│       └── tasks.test.ts
└── e2e/
    ├── login.test.ts
    └── dashboard.test.ts
```

### 5.2 Test Naming Conventions

```typescript
// Good
test('should create a user with valid data', () => {});
test('should throw error without email', () => {});

// Bad
test('user creation', () => {});
test('test 1', () => {});
```

### 5.3 Test Isolation

- Each test should be independent
- Use beforeEach/afterEach for setup/teardown
- Clean database between tests
- Mock external dependencies

## 6. Mocking External Dependencies

### 6.1 Mocking with Jest

```typescript
jest.mock('../services/email');
import sendEmail from '../services/email';

describe('User Service', () => {
  it('should send welcome email', async () => {
    const mockSendEmail = sendEmail as jest.MockedFunction<typeof sendEmail>;
    
    await userService.register({
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    });

    expect(mockSendEmail).toHaveBeenCalledWith(
      'test@example.com',
      'Welcome!'
    );
  });
});
```

### 6.2 Mocking Database

```typescript
jest.mock('../models/User');
const mockUser = User as jest.MockedClass<typeof User>;

describe('Auth Service', () => {
  it('should return user on valid login', async () => {
    mockUser.findOne.mockResolvedValue({
      _id: '123',
      email: 'test@example.com',
      password: 'hashed',
    });

    const result = await authService.login('test@example.com', 'password');
    
    expect(result).toBeDefined();
  });
});
```

## 7. CI/CD Integration

### 7.1 GitHub Actions

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm test
      - run: npm run test:e2e
```

### 7.2 Test Scripts

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "test:integration": "jest --testPathPattern=integration"
  }
}
```

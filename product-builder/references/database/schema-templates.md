# Database Schema Resources

## 1. MongoDB Schema Templates

### 1.1 User Schema

```typescript
import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model<IUser>('User', UserSchema);
```

### 1.2 Task Schema

```typescript
interface ITask extends Document {
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignee: Schema.Types.ObjectId;
  project: Schema.Types.ObjectId;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  assignee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  dueDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
```

### 1.3 Project Schema

```typescript
interface IProject extends Document {
  name: string;
  description: string;
  owner: Schema.Types.ObjectId;
  members: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    default: '',
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: {
    type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
```

## 2. PostgreSQL Schema Templates

### 2.1 Prisma Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String
  name          String
  role          String    @default("user")
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  tasks         Task[]
  projects      Project[]
}

model Project {
  id          String    @id @default(cuid())
  name        String
  description String?
  ownerId     String
  owner       User      @relation(fields: [ownerId], references: [id], onDelete: Cascade)
  members     User[]    @relation("ProjectMembers")
  tasks       Task[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Task {
  id          String    @id @default(cuid())
  title       String
  description String?
  status      String    @default("pending")
  priority    String    @default("medium")
  assigneeId  String
  assignee    User      @relation(fields: [assigneeId], references: [id])
  projectId   String
  project     Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)
  dueDate     DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

### 2.2 SQL Migration

```sql
-- Create users table
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create projects table
CREATE TABLE projects (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  owner_id VARCHAR(255) NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create tasks table
CREATE TABLE tasks (
  id VARCHAR(255) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  priority VARCHAR(50) DEFAULT 'medium',
  assignee_id VARCHAR(255) NOT NULL REFERENCES users(id),
  project_id VARCHAR(255) NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  due_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create project_members junction table
CREATE TABLE project_members (
  project_id VARCHAR(255) REFERENCES projects(id) ON DELETE CASCADE,
  user_id VARCHAR(255) REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, user_id)
);

-- Create indexes
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_priority ON tasks(priority);
CREATE INDEX idx_tasks_assignee ON tasks(assignee_id);
CREATE INDEX idx_tasks_project ON tasks(project_id);
```

## 3. Schema Design Guidelines

### 3.1 Indexing Strategy

| Collection/Table | Fields to Index | Reason |
|------------------|-----------------|--------|
| users | email | Fast lookups by email |
| tasks | status, priority | Filtering and sorting |
| tasks | assignee | Query tasks by user |
| tasks | project | Query tasks by project |
| projects | owner | Query projects by owner |

### 3.2 Relationship Types

1. **One-to-Many**: User has many Tasks
2. **Many-to-Many**: Project has many Users (members)
3. **One-to-Many**: Project has many Tasks

### 3.3 Data Validation

| Field | Validation Rules |
|-------|------------------|
| email | Must match email regex |
| password | Minimum 8 characters |
| status | Enum: pending, in-progress, completed |
| priority | Enum: low, medium, high |
| dueDate | Must be a valid date |

## 4. Database Configuration

### 4.1 MongoDB Connection

```typescript
import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};
```

### 4.2 PostgreSQL with Prisma

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export default prisma;
```

## 5. Migration Scripts

### 5.1 MongoDB Migration Example

```typescript
export async function migrateV1(): Promise<void> {
  // Add new field to users collection
  await User.updateMany({}, { $set: { role: 'user' } });
}

export async function migrateV2(): Promise<void> {
  // Add new index
  await Task.collection.createIndex({ status: 1 });
}
```

### 5.2 Prisma Migration

```bash
# Create migration
npx prisma migrate dev --name add_role_to_users

# Apply migrations
npx prisma migrate deploy

# Generate client
npx prisma generate
```

## 6. Database Project Structure

```
backend/
├── src/
│   ├── models/
│   │   ├── User.ts
│   │   ├── Task.ts
│   │   └── Project.ts
│   ├── db/
│   │   ├── connection.ts
│   │   └── migrations/
│   │       ├── 001-add-role.js
│   │       └── 002-add-indexes.js
│   └── ...
├── prisma/
│   └── schema.prisma
└── package.json
```

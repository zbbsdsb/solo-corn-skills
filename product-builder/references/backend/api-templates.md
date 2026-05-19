# Backend Development Resources

## 1. REST API Templates

### 1.1 Express Server Setup

```typescript
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### 1.2 Route Structure

```typescript
import express from 'express';
const router = express.Router();

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single item
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST create item
router.post('/', async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// PUT update item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// DELETE item
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
```

## 2. GraphQL API Templates

### 2.1 Apollo Server Setup

```typescript
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
  type Query {
    items: [Item!]!
    item(id: ID!): Item
  }

  type Mutation {
    createItem(input: ItemInput): Item
    updateItem(id: ID!, input: ItemInput): Item
    deleteItem(id: ID!): Boolean
  }

  type Item {
    id: ID!
    title: String!
    description: String
    createdAt: String
  }

  input ItemInput {
    title: String!
    description: String
  }
`;

const resolvers = {
  Query: {
    items: async () => {
      return await Item.find();
    },
    item: async (_: unknown, { id }: { id: string }) => {
      return await Item.findById(id);
    },
  },
  Mutation: {
    createItem: async (_: unknown, { input }: { input: ItemInput }) => {
      return await Item.create(input);
    },
    updateItem: async (_: unknown, { id, input }: { id: string; input: ItemInput }) => {
      return await Item.findByIdAndUpdate(id, input, { new: true });
    },
    deleteItem: async (_: unknown, { id }: { id: string }) => {
      await Item.findByIdAndDelete(id);
      return true;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`GraphQL server running at ${url}`);
```

## 3. Authentication Middleware

### 3.1 JWT Authentication

```typescript
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
  user?: { id: string };
}

export const authenticate = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Generate token
export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  });
};
```

### 3.2 OAuth Integration

```typescript
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      // Find or create user
      const user = await User.findOne({ googleId: profile.id });
      if (!user) {
        const newUser = await User.create({
          googleId: profile.id,
          email: profile.emails?.[0]?.value,
          name: profile.displayName,
        });
        return done(null, newUser);
      }
      return done(null, user);
    }
  )
);
```

## 4. Input Validation

### 4.1 Validation Middleware

```typescript
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
};

// Example schema
const itemSchema = Joi.object({
  title: Joi.string().required().min(3),
  description: Joi.string().optional(),
});

// Usage
router.post('/', validate(itemSchema), createItem);
```

## 5. Database Integration

### 5.1 MongoDB Schema

```typescript
import mongoose, { Schema, Document } from 'mongoose';

interface IItem extends Document {
  title: string;
  description?: string;
  createdAt: Date;
}

const ItemSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IItem>('Item', ItemSchema);
```

### 5.2 PostgreSQL with Prisma

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Task {
  id          String   @id @default(cuid())
  title       String
  description String?
  status      String   @default("pending")
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 6. Error Handling

### 6.1 Error Middleware

```typescript
import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  statusCode?: number;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

// Custom error class
export class AppError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.name = 'AppError';
  }
}

// Usage
throw new AppError('Not found', 404);
```

## 7. Rate Limiting

```typescript
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
});

app.use('/api/', apiLimiter);
```

## 8. Backend Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── itemController.ts
│   ├── models/
│   │   └── Item.ts
│   ├── routes/
│   │   └── itemRoutes.ts
│   ├── middleware/
│   │   ├── auth.ts
│   │   └── validation.ts
│   ├── utils/
│   │   └── errorHandler.ts
│   └── server.ts
├── .env
├── package.json
└── tsconfig.json
```

## 9. API Documentation

### OpenAPI Schema Example

```yaml
openapi: 3.0.0
info:
  title: TaskFlow API
  version: 1.0.0

paths:
  /api/items:
    get:
      summary: Get all items
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Item'

    post:
      summary: Create an item
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ItemInput'
      responses:
        '201':
          description: Item created

components:
  schemas:
    Item:
      type: object
      properties:
        id:
          type: string
        title:
          type: string
        description:
          type: string
        createdAt:
          type: string
          format: date-time

    ItemInput:
      type: object
      required:
        - title
      properties:
        title:
          type: string
        description:
          type: string
```

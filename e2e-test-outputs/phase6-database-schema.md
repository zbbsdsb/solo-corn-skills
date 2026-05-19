# Database Schema: TaskFlow

**Version:** 1.0

**Date:** 2026-05-19

**Database:** PostgreSQL with Prisma ORM

---

## 1. Database Overview

### 1.1 Technology Stack

- **Database:** PostgreSQL 15+
- **ORM:** Prisma
- **Migrations:** Prisma Migrate
- **Client:** Prisma Client (auto-generated)

### 1.2 Schema Design Principles

1. **Normalization:** 3NF compliance
2. **Indexes:** Optimized for common query patterns
3. **Relationships:** Proper foreign keys with referential integrity
4. **Soft Deletes:** Not implemented for MVP (hard deletes)
5. **Timestamps:** All tables include createdAt and updatedAt

---

## 2. Prisma Schema

```prisma
// File: prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  name          String
  email         String    @unique
  password      String
  role          String    @default("user")
  avatar        String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  
  // Relations
  ownedProjects Project[]        @relation("ProjectOwner")
  projectMemberships ProjectMember[]
  assignedTasks Task[]           @relation("TaskAssignee")
  createdTasks  Task[]           @relation("TaskCreator")
  
  @@map("users")
}

model Project {
  id          String    @id @default(cuid())
  name        String
  description String?
  ownerId     String
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  // Relations
  owner       User             @relation("ProjectOwner", fields: [ownerId], references: [id], onDelete: Cascade)
  members     ProjectMember[]
  tasks       Task[]
  
  @@index([ownerId])
  @@index([updatedAt])
  @@map("projects")
}

model ProjectMember {
  id        String   @id @default(cuid())
  projectId String
  userId    String
  joinedAt  DateTime @default(now())
  
  // Relations
  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  user      User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([projectId, userId])
  @@index([projectId])
  @@index([userId])
  @@map("project_members")
}

model Task {
  id          String    @id @default(cuid())
  title       String
  description String?
  status      String    @default("pending")
  priority    String    @default("medium")
  assigneeId  String
  projectId   String
  createdById String
  dueDate     DateTime?
  completedAt DateTime?
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  
  // Relations
  assignee    User     @relation("TaskAssignee", fields: [assigneeId], references: [id])
  project     Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  createdBy   User     @relation("TaskCreator", fields: [createdById], references: [id])
  
  @@index([projectId])
  @@index([assigneeId])
  @@index([status])
  @@index([priority])
  @@index([dueDate])
  @@index([createdById])
  @@index([projectId, status])
  @@index([assigneeId, status])
  @@map("tasks")
}
```

---

## 3. SQL Migration Scripts

### 3.1 Users Table

```sql
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  avatar TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT users_name_length CHECK (LENGTH(name) >= 2),
  CONSTRAINT users_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT users_password_length CHECK (LENGTH(password) >= 8),
  CONSTRAINT users_role_valid CHECK (role IN ('user', 'admin'))
);

-- Create index for email lookups
CREATE UNIQUE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_created_at ON users(created_at DESC);
```

### 3.2 Projects Table

```sql
-- Create projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  description TEXT,
  owner_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT projects_name_length CHECK (LENGTH(name) >= 1),
  CONSTRAINT projects_description_length CHECK (description IS NULL OR LENGTH(description) <= 500)
);

-- Create indexes
CREATE INDEX idx_projects_owner_id ON projects(owner_id);
CREATE INDEX idx_projects_updated_at ON projects(updated_at DESC);
```

### 3.3 Project Members Table

```sql
-- Create project_members table
CREATE TABLE project_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT project_members_unique UNIQUE (project_id, user_id)
);

-- Create indexes
CREATE INDEX idx_project_members_project_id ON project_members(project_id);
CREATE INDEX idx_project_members_user_id ON project_members(user_id);
```

### 3.4 Tasks Table

```sql
-- Create tasks table
CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'pending',
  priority VARCHAR(50) DEFAULT 'medium',
  assignee_id UUID NOT NULL REFERENCES users(id),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  created_by_id UUID NOT NULL REFERENCES users(id),
  due_date TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT tasks_title_length CHECK (LENGTH(title) >= 1),
  CONSTRAINT tasks_description_length CHECK (description IS NULL OR LENGTH(description) <= 2000),
  CONSTRAINT tasks_status_valid CHECK (status IN ('pending', 'in-progress', 'completed')),
  CONSTRAINT tasks_priority_valid CHECK (priority IN ('low', 'medium', 'high'))
);

-- Create indexes for common queries
CREATE INDEX idx_tasks_project_id ON tasks(project_id);
CREATE INDEX idx_tasks_assignee_id ON tasks(assignee_id);
CREATE INDEX idx_tasks_created_by_id ON tasks(created_by_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_priority ON tasks(priority);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);
CREATE INDEX idx_tasks_created_at ON tasks(created_at DESC);

-- Composite indexes for filtered queries
CREATE INDEX idx_tasks_project_status ON tasks(project_id, status);
CREATE INDEX idx_tasks_assignee_status ON tasks(assignee_id, status);
CREATE INDEX idx_tasks_project_assignee ON tasks(project_id, assignee_id);
```

---

## 4. Indexing Strategy

### 4.1 Query Patterns

| Query | Index Used |
|-------|-----------|
| Get all projects for user | `project_members(user_id)` + `projects(id)` |
| Get all tasks for project | `tasks(project_id)` |
| Get all tasks assigned to user | `tasks(assignee_id)` |
| Get tasks by status | `tasks(status)`, `tasks(assignee_id, status)` |
| Get overdue tasks | `tasks(assignee_id, due_date)` WHERE `due_date < NOW()` |
| Search tasks by title | Full-text search (future enhancement) |

### 4.2 Index Maintenance

- **Rebuild:** Weekly during low-traffic periods
- **Stats Update:** Daily
- **Monitoring:** Track query performance with `pg_stat_user_indexes`

---

## 5. Relationships

### 5.1 Entity Relationship Diagram

```
┌─────────────┐       ┌──────────────────┐       ┌─────────────┐
│    User     │       │     Project      │       │    Task     │
├─────────────┤       ├──────────────────┤       ├─────────────┤
│ id (PK)     │───┐   │ id (PK)         │   ┌───│ id (PK)     │
│ name        │   │   │ name           │   │   │ title       │
│ email       │   └───│ owner_id (FK)   │   │   │ description │
│ password    │       │ created_at      │   │   │ status      │
│ role        │       │ updated_at      │   │   │ priority    │
│ avatar      │       └──────────────────┘   │   │ assignee_id │
│ created_at  │              │              │   │ project_id  │
│ updated_at  │              │              │   │ created_by  │
└─────────────┘              │              │   │ due_date    │
       │                      │              │   │ completed_at│
       │                      │              │   │ created_at  │
       │              ┌───────┴───────┐      │   │ updated_at  │
       │              │               │      │   └─────────────┘
       │              ▼               │      │
       │    ┌─────────────────┐        │      │
       │    │ ProjectMember   │        │      │
       │    ├─────────────────┤        │      │
       └───►│ id (PK)        │        │      │
            │ project_id (FK) │────────┘      │
            │ user_id (FK)    │──────────────┘
            │ joined_at       │
            └─────────────────┘
```

### 5.2 Relationship Types

1. **User to Project (Owner):** One-to-Many
2. **User to Project (Member):** Many-to-Many (via ProjectMember)
3. **Project to Task:** One-to-Many
4. **User to Task (Assignee):** One-to-Many
5. **User to Task (Creator):** One-to-Many

---

## 6. Data Validation Rules

### 6.1 User Validation

| Field | Validation Rule |
|-------|---------------|
| name | Required, 2-100 characters |
| email | Required, valid email format, unique |
| password | Required, minimum 8 characters |
| role | Optional, enum ['user', 'admin'], default 'user' |
| avatar | Optional, URL or null |

### 6.2 Project Validation

| Field | Validation Rule |
|-------|---------------|
| name | Required, 1-100 characters |
| description | Optional, maximum 500 characters |
| owner_id | Required, must reference existing user |
| members | Optional, list of user IDs |

### 6.3 Task Validation

| Field | Validation Rule |
|-------|---------------|
| title | Required, 1-200 characters |
| description | Optional, maximum 2000 characters |
| status | Optional, enum ['pending', 'in-progress', 'completed'], default 'pending' |
| priority | Optional, enum ['low', 'medium', 'high'], default 'medium' |
| assignee_id | Required, must be project member |
| project_id | Required, must reference existing project |
| created_by_id | Required, must reference existing user |
| due_date | Optional, must be valid date |

---

## 7. Database Configuration

### 7.1 Connection Settings

```env
# .env
DATABASE_URL="postgresql://username:password@host:5432/taskflow?schema=public"
```

### 7.2 Connection Pool

```typescript
// prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL + '?connection_limit=10&pool_timeout=20',
    },
  },
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['error'],
});

export default prisma;
```

### 7.3 Performance Tuning

```sql
-- Enable query caching
ALTER SYSTEM SET shared_buffers = '256MB';
ALTER SYSTEM SET effective_cache_size = '1GB';
ALTER SYSTEM SET maintenance_work_mem = '128MB';
ALTER SYSTEM SET checkpoint_completion_target = 0.9;
ALTER SYSTEM SET wal_buffers = '16MB';
ALTER SYSTEM SET random_page_cost = 1.1;
ALTER SYSTEM SET effective_io_concurrency = 200;
ALTER SYSTEM SET work_mem = '4MB';
ALTER SYSTEM SET min_wal_size = '1GB';
ALTER SYSTEM SET max_wal_size = '4GB';

-- Apply changes
SELECT pg_reload_conf();
```

---

## 8. Migration Workflow

### 8.1 Creating Migrations

```bash
# Initialize Prisma
npx prisma init

# Create migration
npx prisma migrate dev --name add_users

# Apply migration
npx prisma migrate deploy

# Generate client
npx prisma generate
```

### 8.2 Migration Files

```
prisma/
├── migrations/
│   ├── 20260519000000_init/
│   │   └── migration.sql
│   └── 20260519000001_add_tasks/
│       └── migration.sql
└── schema.prisma
```

---

## 9. Backup & Recovery

### 9.1 Backup Strategy

```bash
# Daily full backup at 2 AM
0 2 * * * pg_dump -U postgres -d taskflow -F c -b -v -f /backups/taskflow_$(date +\%Y\%m\%d).dump
```

### 9.2 Recovery Procedure

```bash
# Stop application
systemctl stop taskflow

# Restore from backup
pg_restore -U postgres -d taskflow -c /backups/taskflow_20260519.dump

# Start application
systemctl start taskflow
```

---

**Schema Status:** Production Ready

**Next Steps:**
1. Review schema with team
2. Test migrations in staging
3. Set up monitoring
4. Configure backups
5. Performance test with sample data

---

**Approved by:** _________________ **Date:** __________

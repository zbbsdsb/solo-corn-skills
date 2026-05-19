# API Documentation: TaskFlow

**Version:** 1.0

**Base URL:** `https://api.taskflow.example.com/v1`

**Date:** 2026-05-19

---

## 1. Overview

### 1.1 Authentication

All API endpoints (except authentication) require JWT Bearer token authentication. Include the token in the Authorization header:

```http
Authorization: Bearer <your-token>
```

Tokens expire after 7 days. Use the refresh endpoint to obtain a new token.

### 1.2 Rate Limiting

- **Default:** 100 requests per 15 minutes per IP
- **Authenticated:** 1000 requests per 15 minutes per user
- **Exceeded:** Returns `429 Too Many Requests`

### 1.3 Error Handling

All errors follow a consistent format:

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Validation error: Email is required"
}
```

### 1.4 Pagination

List endpoints support pagination with query parameters:

- `page` (default: 1): Page number
- `limit` (default: 20, max: 100): Items per page

Response includes pagination metadata:

```json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

---

## 2. Authentication API

### 2.1 Register User

**POST** `/api/auth/register`

Register a new user account.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201 Created):**

```json
{
  "user": {
    "id": "64a1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Validation Rules:**

| Field | Type | Required | Rules |
|-------|------|----------|-------|
| name | string | Yes | 2-100 characters |
| email | string | Yes | Valid email format, unique |
| password | string | Yes | 8-100 characters |

---

### 2.2 Login

**POST** `/api/auth/login`

Authenticate user and receive access token.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200 OK):**

```json
{
  "user": {
    "id": "64a1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 2.3 Logout

**POST** `/api/auth/logout`

Invalidate current session.

**Headers:**

```http
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "message": "Logged out successfully"
}
```

---

### 2.4 Get Current User

**GET** `/api/auth/me`

Retrieve authenticated user's profile.

**Headers:**

```http
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "id": "64a1234567890abcdef12345",
  "name": "John Doe",
  "email": "john@example.com",
  "role": "user",
  "avatar": null,
  "createdAt": "2026-01-15T10:30:00.000Z"
}
```

---

### 2.5 Forgot Password

**POST** `/api/auth/forgot-password`

Send password reset email.

**Request Body:**

```json
{
  "email": "john@example.com"
}
```

**Response (200 OK):**

```json
{
  "message": "If email exists, reset link sent"
}
```

---

## 3. Projects API

### 3.1 List Projects

**GET** `/api/projects`

Get all projects for authenticated user.

**Headers:**

```http
Authorization: Bearer <token>
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| page | integer | 1 | Page number |
| limit | integer | 20 | Items per page |

**Response (200 OK):**

```json
{
  "data": [
    {
      "id": "64a1234567890abcdef12346",
      "name": "Website Redesign",
      "description": "Complete redesign of company website",
      "owner": {
        "id": "64a1234567890abcdef12345",
        "name": "John Doe",
        "email": "john@example.com"
      },
      "members": [
        {
          "id": "64a1234567890abcdef12345",
          "name": "John Doe",
          "email": "john@example.com"
        },
        {
          "id": "64a1234567890abcdef12347",
          "name": "Sarah Smith",
          "email": "sarah@example.com"
        }
      ],
      "taskCount": 12,
      "completedTaskCount": 5,
      "createdAt": "2026-02-01T09:00:00.000Z",
      "updatedAt": "2026-05-18T14:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 1,
    "totalPages": 1
  }
}
```

---

### 3.2 Create Project

**POST** `/api/projects`

Create a new project.

**Headers:**

```http
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "name": "Website Redesign",
  "description": "Complete redesign of company website"
}
```

**Response (201 Created):**

```json
{
  "id": "64a1234567890abcdef12346",
  "name": "Website Redesign",
  "description": "Complete redesign of company website",
  "owner": {
    "id": "64a1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "members": [...],
  "createdAt": "2026-05-19T10:00:00.000Z",
  "updatedAt": "2026-05-19T10:00:00.000Z"
}
```

**Validation Rules:**

| Field | Type | Required | Rules |
|-------|------|----------|-------|
| name | string | Yes | 1-100 characters |
| description | string | No | Max 500 characters |

---

### 3.3 Get Project

**GET** `/api/projects/:id`

Get single project by ID.

**Headers:**

```http
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "id": "64a1234567890abcdef12346",
  "name": "Website Redesign",
  "description": "Complete redesign of company website",
  "owner": {
    "id": "64a1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "members": [...],
  "tasks": [...],
  "createdAt": "2026-02-01T09:00:00.000Z",
  "updatedAt": "2026-05-18T14:30:00.000Z"
}
```

---

### 3.4 Update Project

**PUT** `/api/projects/:id`

Update project details (owner only).

**Headers:**

```http
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "name": "Website Redesign 2.0",
  "description": "Updated description"
}
```

**Response (200 OK):**

```json
{
  "id": "64a1234567890abcdef12346",
  "name": "Website Redesign 2.0",
  "description": "Updated description",
  ...
}
```

---

### 3.5 Delete Project

**DELETE** `/api/projects/:id`

Delete project and all associated tasks (owner only).

**Headers:**

```http
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "message": "Project deleted successfully"
}
```

---

### 3.6 Invite Member

**POST** `/api/projects/:id/invite`

Invite a user to the project (owner only).

**Headers:**

```http
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "email": "sarah@example.com"
}
```

**Response (200 OK):**

```json
{
  "id": "64a1234567890abcdef12346",
  "name": "Website Redesign",
  "members": [
    ...,
    {
      "id": "64a1234567890abcdef12347",
      "name": "Sarah Smith",
      "email": "sarah@example.com"
    }
  ],
  ...
}
```

---

### 3.7 Remove Member

**DELETE** `/api/projects/:id/members/:memberId`

Remove a member from project (owner only).

**Headers:**

```http
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "id": "64a1234567890abcdef12346",
  "name": "Website Redesign",
  "members": [...],
  ...
}
```

---

## 4. Tasks API

### 4.1 List Tasks

**GET** `/api/tasks`

Get all tasks assigned to authenticated user.

**Headers:**

```http
Authorization: Bearer <token>
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| projectId | string | - | Filter by project |
| status | string | - | Filter by status (pending, in-progress, completed) |
| priority | string | - | Filter by priority (low, medium, high) |
| assignee | string | - | Filter by assignee (use "me" for current user) |
| page | integer | 1 | Page number |
| limit | integer | 20 | Items per page |

**Example:**

```http
GET /api/tasks?status=pending&priority=high&assignee=me&limit=10
```

**Response (200 OK):**

```json
{
  "data": [
    {
      "id": "64a1234567890abcdef12348",
      "title": "Design new homepage",
      "description": "Create wireframes for the homepage",
      "status": "pending",
      "priority": "high",
      "assignee": {
        "id": "64a1234567890abcdef12345",
        "name": "John Doe",
        "email": "john@example.com"
      },
      "project": {
        "id": "64a1234567890abcdef12346",
        "name": "Website Redesign"
      },
      "createdBy": {
        "id": "64a1234567890abcdef12345",
        "name": "John Doe"
      },
      "dueDate": "2026-05-25T00:00:00.000Z",
      "completedAt": null,
      "createdAt": "2026-05-15T10:00:00.000Z",
      "updatedAt": "2026-05-15T10:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 12,
    "totalPages": 1
  }
}
```

---

### 4.2 Create Task

**POST** `/api/tasks`

Create a new task.

**Headers:**

```http
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "title": "Design new homepage",
  "description": "Create wireframes for the homepage",
  "projectId": "64a1234567890abcdef12346",
  "assigneeId": "64a1234567890abcdef12345",
  "dueDate": "2026-05-25",
  "priority": "high"
}
```

**Response (201 Created):**

```json
{
  "id": "64a1234567890abcdef12348",
  "title": "Design new homepage",
  "description": "Create wireframes for the homepage",
  "status": "pending",
  "priority": "high",
  "assignee": {
    "id": "64a1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "project": {
    "id": "64a1234567890abcdef12346",
    "name": "Website Redesign"
  },
  "dueDate": "2026-05-25T00:00:00.000Z",
  "createdAt": "2026-05-19T10:00:00.000Z",
  "updatedAt": "2026-05-19T10:00:00.000Z"
}
```

**Validation Rules:**

| Field | Type | Required | Rules |
|-------|------|----------|-------|
| title | string | Yes | 1-200 characters |
| description | string | No | Max 2000 characters |
| projectId | string | Yes | Must be valid project ID |
| assigneeId | string | No | Must be project member (defaults to creator) |
| dueDate | string | No | Valid ISO date |
| priority | string | No | Enum: low, medium, high (default: medium) |

---

### 4.3 Get Task

**GET** `/api/tasks/:id`

Get single task by ID.

**Headers:**

```http
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "id": "64a1234567890abcdef12348",
  "title": "Design new homepage",
  "description": "Create wireframes for the homepage",
  "status": "pending",
  "priority": "high",
  "assignee": {
    "id": "64a1234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com"
  },
  "project": {
    "id": "64a1234567890abcdef12346",
    "name": "Website Redesign"
  },
  "createdBy": {
    "id": "64a1234567890abcdef12345",
    "name": "John Doe"
  },
  "dueDate": "2026-05-25T00:00:00.000Z",
  "completedAt": null,
  "createdAt": "2026-05-15T10:00:00.000Z",
  "updatedAt": "2026-05-15T10:00:00.000Z"
}
```

---

### 4.4 Update Task

**PUT** `/api/tasks/:id`

Update task details.

**Headers:**

```http
Authorization: Bearer <token>
```

**Request Body:**

```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "in-progress",
  "priority": "medium",
  "assigneeId": "64a1234567890abcdef12347",
  "dueDate": "2026-05-30"
}
```

**Response (200 OK):**

```json
{
  "id": "64a1234567890abcdef12348",
  "title": "Updated title",
  "status": "in-progress",
  ...
}
```

**Notes:**
- Only project members can update tasks
- Setting `status` to `completed` automatically sets `completedAt`
- `assigneeId` must be a project member

---

### 4.5 Delete Task

**DELETE** `/api/tasks/:id`

Delete a task.

**Headers:**

```http
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "message": "Task deleted successfully"
}
```

**Notes:**
- Task creator, assignee, or project owner can delete

---

## 5. Users API

### 5.1 Get User Profile

**GET** `/api/users/:id`

Get user profile (public information).

**Headers:**

```http
Authorization: Bearer <token>
```

**Response (200 OK):**

```json
{
  "id": "64a1234567890abcdef12345",
  "name": "John Doe",
  "email": "john@example.com",
  "avatar": null,
  "createdAt": "2026-01-15T10:30:00.000Z"
}
```

---

## 6. Health Check

### 6.1 API Health

**GET** `/api/health`

Check API health status.

**Response (200 OK):**

```json
{
  "status": "ok",
  "timestamp": "2026-05-19T10:00:00.000Z",
  "uptime": 3600.5
}
```

---

## 7. Error Codes

| Code | Status | Description |
|------|--------|-------------|
| 400 | Bad Request | Invalid request data |
| 401 | Unauthorized | Missing or invalid token |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Resource already exists |
| 422 | Unprocessable Entity | Validation failed |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server error |

---

## 8. Webhooks (Future)

*Coming in v1.1*

Webhooks will allow you to receive real-time notifications for events:

- `task.created`
- `task.updated`
- `task.deleted`
- `project.created`
- `project.member_added`

---

## 9. SDKs & Libraries

### 9.1 JavaScript/TypeScript

```bash
npm install @taskflow/sdk
```

### 9.2 Python

```bash
pip install taskflow-sdk
```

---

## 10. Support

- **Documentation:** https://docs.taskflow.example.com
- **API Status:** https://status.taskflow.example.com
- **Support Email:** support@taskflow.example.com
- **GitHub Issues:** https://github.com/taskflow/taskflow-api/issues

---

**Last Updated:** May 19, 2026

**Version History:**

- v1.0 (2026-05-19): Initial API release

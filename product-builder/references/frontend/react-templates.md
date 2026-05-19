# Frontend Development Resources

## 1. React Component Templates

### 1.1 Component Structure

```typescript
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

interface Props {
  title: string;
  description?: string;
  onAction?: () => void;
}

const ComponentName: React.FC<Props> = ({
  title,
  description,
  onAction,
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Side effects
  }, []);

  return (
    <div className="component-class">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {onAction && (
        <button onClick={onAction}>
          Action
        </button>
      )}
    </div>
  );
};

ComponentName.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onAction: PropTypes.func,
};

ComponentName.defaultProps = {
  description: '',
  onAction: undefined,
};

export default ComponentName;
```

### 1.2 Common Components

**Button Component:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}
```

**Card Component:**
```typescript
interface CardProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}
```

**Input Component:**
```typescript
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  error?: string;
}
```

## 2. Next.js Page Templates

### 2.1 Page Structure

```typescript
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const PageName: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Title</title>
      </Head>
      <div className="page-container">
        {/* Page content */}
      </div>
    </>
  );
};

export default PageName;
```

### 2.2 API Routes

```typescript
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Handle GET request
    res.status(200).json({ data: [] });
  } else if (req.method === 'POST') {
    // Handle POST request
    res.status(201).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
```

## 3. Tailwind CSS Patterns

### 3.1 Color Scheme

```css
/* Primary colors */
--color-primary: #6366f1;
--color-primary-hover: #4f46e5;

/* Background colors */
--color-bg-primary: #ffffff;
--color-bg-secondary: #f8fafc;

/* Text colors */
--color-text-primary: #1e293b;
--color-text-secondary: #64748b;
```

### 3.2 Utility Classes

```css
/* Spacing */
.p-4: padding: 1rem;
.mb-4: margin-bottom: 1rem;

/* Flexbox */
.flex: display: flex;
.items-center: align-items: center;
.justify-between: justify-content: space-between;

/* Responsive */
.md:flex: @media (min-width: 768px) { display: flex; }
```

## 4. Form Handling

### 4.1 Form Component

```typescript
interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

const handleSubmit = (data: FormData) => {
  // Validate and submit
};
```

### 4.2 Validation Patterns

```typescript
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validatePassword = (password: string): string | null => {
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (!/[A-Z]/.test(password)) return 'Password must contain uppercase';
  return null;
};
```

## 5. State Management

### 5.1 Context API

```typescript
import { createContext, useContext, useReducer, ReactNode } from 'react';

interface State {
  user: User | null;
  loading: boolean;
}

type Action =
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: State = {
  user: null,
  loading: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

interface AppContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
```

## 6. API Integration

### 6.1 Fetch Utilities

```typescript
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
}
```

### 6.2 Query Hooks

```typescript
import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
```

## 7. Testing Patterns

### 7.1 Unit Tests

```typescript
import { render, screen } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles optional props', () => {
    render(<ComponentName title="Test" description="Description" />);
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
```

### 7.2 Integration Tests

```typescript
describe('API Integration', () => {
  it('fetches data successfully', async () => {
    const response = await fetch('/api/data');
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
  });
});
```

## 8. Frontend Project Structure

```
frontend/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.test.tsx
│   ├── Card/
│   └── Input/
├── pages/
│   ├── index.tsx
│   ├── about.tsx
│   └── api/
├── hooks/
│   └── useFetch.ts
├── context/
│   └── AppContext.tsx
├── utils/
│   └── api.ts
└── styles/
    └── globals.css
```

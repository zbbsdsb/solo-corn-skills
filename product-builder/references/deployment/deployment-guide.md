# Deployment Resources

## 1. CI/CD Configuration

### 1.1 GitHub Actions

```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

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
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### 1.2 GitLab CI

```yaml
stages:
  - test
  - build
  - deploy

test:
  stage: test
  image: node:20
  script:
    - npm install
    - npm test

build:
  stage: build
  image: node:20
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  image: alpine:latest
  script:
    - apk add --no-cache curl
    - curl -X POST https://api.netlify.com/build_hooks/${NETLIFY_BUILD_HOOK}
  only:
    - main
```

## 2. Environment Configuration

### 2.1 .env Template

```env
# Server Configuration
PORT=3000
NODE_ENV=production

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
DATABASE_URL=postgresql://username:password@host:5432/database

# JWT Configuration
JWT_SECRET=your-strong-secret-key-here-at-least-32-characters
JWT_EXPIRES_IN=7d

# OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# API Keys
SENDGRID_API_KEY=your-sendgrid-api-key
STRIPE_API_KEY=your-stripe-api-key

# Logging
LOG_LEVEL=info
```

### 2.2 Environment-Specific Configs

```
.env              # Common variables (gitignored)
.env.development  # Development-specific (gitignored)
.env.production   # Production-specific (gitignored)
.env.example      # Template for reference (committed)
```

## 3. Docker Configuration

### 3.1 Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/server.js"]
```

### 3.2 Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/app
    depends_on:
      - mongo
    networks:
      - app-network

  mongo:
    image: mongo:6.0
    volumes:
      - mongo-data:/data/db
    networks:
      - app-network

volumes:
  mongo-data:

networks:
  app-network:
    driver: bridge
```

## 4. Deployment Platform Guides

### 4.1 Vercel Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Set environment variables
vercel env add NODE_ENV production
vercel env add MONGODB_URI your-mongodb-uri
```

### 4.2 Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

### 4.3 AWS Deployment

```bash
# Install AWS CLI
pip install awscli

# Configure AWS
aws configure

# Create ECR repository
aws ecr create-repository --repository-name my-app

# Build and push Docker image
docker build -t my-app .
docker tag my-app:latest aws-account-id.dkr.ecr.region.amazonaws.com/my-app:latest
docker push aws-account-id.dkr.ecr.region.amazonaws.com/my-app:latest
```

### 4.4 Heroku Deployment

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create my-app

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri

# Deploy
git push heroku main
```

## 5. Health Check Setup

### 5.1 Health Check Endpoint

```typescript
// routes/health.ts
import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Check database connection
    await dbConnectionCheck();
    
    res.status(200).json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      error: 'Database connection failed',
    });
  }
});

export default router;
```

### 5.2 Load Balancer Configuration

```yaml
# AWS Load Balancer health check
HealthCheckConfig:
  Target: 'HTTP:3000/api/health'
  Interval: 30
  Timeout: 5
  HealthyThreshold: 2
  UnhealthyThreshold: 2
```

## 6. SSL/TLS Configuration

### 6.1 Let's Encrypt

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d example.com

# Auto-renew
sudo certbot renew --dry-run
```

### 6.2 HTTPS Server

```typescript
import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync('/path/to/private-key.pem'),
  cert: fs.readFileSync('/path/to/certificate.pem'),
};

https.createServer(options, app).listen(443);
```

## 7. Monitoring & Logging

### 7.1 Logging Configuration

```typescript
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

export default logger;
```

### 7.2 Error Tracking with Sentry

```typescript
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.errorHandler());
```

## 8. Deployment Checklist

### Pre-Deployment
- [ ] Run all tests
- [ ] Build project successfully
- [ ] Verify environment variables
- [ ] Backup database
- [ ] Review changelog

### Deployment
- [ ] Deploy to staging first
- [ ] Test staging environment
- [ ] Deploy to production
- [ ] Verify production health
- [ ] Monitor for errors

### Post-Deployment
- [ ] Verify all endpoints
- [ ] Check logs for errors
- [ ] Monitor performance metrics
- [ ] Document deployment
- [ ] Notify stakeholders

## 9. Rollback Procedures

### 9.1 Git-Based Rollback

```bash
# Check previous deployments
git log --oneline

# Rollback to previous commit
git revert HEAD

# Deploy the revert
git push origin main
```

### 9.2 Container-Based Rollback

```bash
# List available images
docker images

# Stop current container
docker stop my-app

# Run previous version
docker run -d --name my-app -p 3000:3000 my-app:v1.0.0
```

## 10. Deployment Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── .gitlab-ci.yml
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── scripts/
    ├── deploy.sh
    └── health-check.sh
```

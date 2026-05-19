// Playwright E2E Tests for Task Management
// File: frontend/tests/e2e/task-management.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Task Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/dashboard');
  });

  test('user can create a new project', async ({ page }) => {
    await page.click('button:has-text("New Project")');
    
    await page.fill('input[name="name"]', 'Website Redesign');
    await page.fill('textarea[name="description"]', 'Complete redesign of company website');
    
    await page.click('button:has-text("Create Project")');
    
    await expect(page.locator('text=Website Redesign')).toBeVisible();
    await expect(page.locator('text=Complete redesign of company website')).toBeVisible();
  });

  test('user can create a new task', async ({ page }) => {
    await page.goto('/projects');
    await page.click('text=Website Redesign');
    
    await page.click('button:has-text("New Task")');
    
    await page.fill('input[name="title"]', 'Design new homepage');
    await page.fill('textarea[name="description"]', 'Create wireframes for the homepage');
    await page.selectOption('select[name="priority"]', 'high');
    
    await page.click('button:has-text("Create Task")');
    
    await expect(page.locator('text=Design new homepage')).toBeVisible();
  });

  test('user can update task status', async ({ page }) => {
    await page.goto('/my-tasks');
    
    await page.click('text=Design new homepage');
    
    await page.selectOption('select[name="status"]', 'in-progress');
    await page.click('button:has-text("Save")');
    
    await expect(page.locator('text=In Progress')).toBeVisible();
  });

  test('user can complete a task', async ({ page }) => {
    await page.goto('/my-tasks');
    
    await page.click('button:has-text("✓")');
    
    await expect(page.locator('text=Completed')).toBeVisible();
  });

  test('user can delete a task', async ({ page }) => {
    await page.goto('/my-tasks');
    
    await page.click('text=Design new homepage');
    await page.click('button:has-text("Delete")');
    
    page.on('dialog', dialog => dialog.accept());
    
    await expect(page.locator('text=Design new homepage')).not.toBeVisible();
  });

  test('user can filter tasks by status', async ({ page }) => {
    await page.goto('/my-tasks');
    
    await page.click('text=To Do');
    await expect(page.locator('text=To Do')).toBeVisible();
    
    await page.click('text=In Progress');
    await expect(page.locator('text=In Progress')).toBeVisible();
  });

  test('user can search for tasks', async ({ page }) => {
    await page.goto('/dashboard');
    
    await page.fill('input[placeholder*="Search"]', 'Design');
    
    await expect(page.locator('text=Design new homepage')).toBeVisible();
  });

  test('user can assign task to team member', async ({ page }) => {
    await page.goto('/projects');
    await page.click('text=Website Redesign');
    
    await page.click('text=Design new homepage');
    
    await page.selectOption('select[name="assignee"]', 'Sarah');
    await page.click('button:has-text("Save")');
    
    await expect(page.locator('text=Sarah')).toBeVisible();
  });

  test('user can set task due date', async ({ page }) => {
    await page.goto('/projects');
    await page.click('text=Website Redesign');
    
    await page.click('text=Design new homepage');
    
    await page.fill('input[name="dueDate"]', '2026-05-30');
    await page.click('button:has-text("Save")');
    
    await expect(page.locator('text=May 30')).toBeVisible();
  });
});

test.describe('Project Management', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
  });

  test('user can view all projects', async ({ page }) => {
    await page.goto('/projects');
    
    await expect(page.locator('text=Website Redesign')).toBeVisible();
    await expect(page.locator('text=Mobile App')).toBeVisible();
  });

  test('user can invite team member to project', async ({ page }) => {
    await page.goto('/projects');
    await page.click('text=Website Redesign');
    
    await page.click('button:has-text("Invite Member")');
    await page.fill('input[name="email"]', 'sarah@example.com');
    await page.click('button:has-text("Send Invite")');
    
    await expect(page.locator('text=Sarah')).toBeVisible();
  });

  test('user can update project details', async ({ page }) => {
    await page.goto('/projects');
    await page.click('text=Website Redesign');
    
    await page.click('button:has-text("Settings")');
    await page.fill('input[name="name"]', 'Website Redesign 2.0');
    await page.click('button:has-text("Save")');
    
    await expect(page.locator('text=Website Redesign 2.0')).toBeVisible();
  });

  test('user can delete a project', async ({ page }) => {
    await page.goto('/projects');
    
    await page.click('button:has-text("Settings")');
    await page.click('button:has-text("Delete Project")');
    
    page.on('dialog', dialog => dialog.accept());
    
    await expect(page.locator('text=Website Redesign')).not.toBeVisible();
  });

  test('project shows correct task count and progress', async ({ page }) => {
    await page.goto('/projects');
    
    const projectCard = page.locator('text=Website Redesign').locator('..');
    await expect(projectCard.locator('text=12 tasks')).toBeVisible();
    await expect(projectCard.locator('text=65%')).toBeVisible();
  });
});

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.click('button[type="submit"]');
  });

  test('dashboard displays user tasks', async ({ page }) => {
    await page.goto('/dashboard');
    
    await expect(page.locator('text=My Tasks')).toBeVisible();
    await expect(page.locator('text=Design new homepage')).toBeVisible();
  });

  test('dashboard shows recent activity', async ({ page }) => {
    await page.goto('/dashboard');
    
    await expect(page.locator('text=Recent Activity')).toBeVisible();
    await expect(page.locator('text=Sarah completed')).toBeVisible();
  });

  test('dashboard shows project overview', async ({ page }) => {
    await page.goto('/dashboard');
    
    await expect(page.locator('text=Your Projects')).toBeVisible();
    await expect(page.locator('text=Website Redesign')).toBeVisible();
  });

  test('user can navigate to specific project from dashboard', async ({ page }) => {
    await page.goto('/dashboard');
    
    await page.click('text=Website Redesign');
    
    await expect(page).toHaveURL(/\/projects\/[a-zA-Z0-9]+/);
  });
});

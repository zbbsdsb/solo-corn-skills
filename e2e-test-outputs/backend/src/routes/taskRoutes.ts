// Task Routes
// File: backend/src/routes/taskRoutes.ts

import express, { Request, Response } from 'express';
import Joi from 'joi';
import Task from '../models/Task';
import Project from '../models/Project';
import { validate } from '../middleware/validation';
import { authenticate } from '../middleware/auth';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();

const createTaskSchema = Joi.object({
  title: Joi.string().required().min(1).max(200),
  description: Joi.string().max(2000).allow(''),
  projectId: Joi.string().required(),
  assigneeId: Joi.string().allow(null),
  dueDate: Joi.date().allow(null),
  priority: Joi.string().valid('low', 'medium', 'high').default('medium'),
});

const updateTaskSchema = Joi.object({
  title: Joi.string().min(1).max(200),
  description: Joi.string().max(2000).allow(''),
  assigneeId: Joi.string().allow(null),
  dueDate: Joi.date().allow(null),
  priority: Joi.string().valid('low', 'medium', 'high'),
  status: Joi.string().valid('pending', 'in-progress', 'completed'),
});

router.post('/', authenticate, validate(createTaskSchema), async (req: Request, res: Response) => {
  try {
    const { title, description, projectId, assigneeId, dueDate, priority } = req.body;
    const userId = (req as any).user.id;
    
    const project = await Project.findById(projectId);
    if (!project) {
      throw new AppError('Project not found', 404);
    }
    
    if (!project.members.includes(userId as any)) {
      throw new AppError('Not authorized to create tasks in this project', 403);
    }
    
    if (assigneeId && !project.members.includes(assigneeId as any)) {
      throw new AppError('Assignee must be a project member', 400);
    }
    
    const task = await Task.create({
      title,
      description,
      project: projectId,
      assignee: assigneeId || userId,
      dueDate,
      priority,
      createdBy: userId,
    });
    
    await task.populate('assignee', 'name email');
    await task.populate('createdBy', 'name email');
    await task.populate('project', 'name');
    
    res.status(201).json(task);
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to create task', 500);
  }
});

router.get('/', authenticate, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const { projectId, status, priority, assignee } = req.query;
    
    const query: any = { assignee: userId };
    
    if (projectId) {
      query.project = projectId;
    }
    
    if (status) {
      query.status = status;
    }
    
    if (priority) {
      query.priority = priority;
    }
    
    if (assignee === 'me') {
      query.assignee = userId;
    } else if (assignee) {
      query.assignee = assignee;
    }
    
    const tasks = await Task.find(query)
      .populate('assignee', 'name email')
      .populate('createdBy', 'name email')
      .populate('project', 'name')
      .sort({ dueDate: 1, createdAt: -1 });
    
    res.status(200).json(tasks);
  } catch (error) {
    throw new AppError('Failed to fetch tasks', 500);
  }
});

router.get('/:id', authenticate, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.id;
    
    const task = await Task.findById(id)
      .populate('assignee', 'name email')
      .populate('createdBy', 'name email')
      .populate('project', 'name');
    
    if (!task) {
      throw new AppError('Task not found', 404);
    }
    
    const project = await Project.findById(task.project);
    if (!project || !project.members.includes(userId as any)) {
      throw new AppError('Not authorized to view this task', 403);
    }
    
    res.status(200).json(task);
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to fetch task', 500);
  }
});

router.put('/:id', authenticate, validate(updateTaskSchema), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const userId = (req as any).user.id;
    
    const task = await Task.findById(id);
    if (!task) {
      throw new AppError('Task not found', 404);
    }
    
    const project = await Project.findById(task.project);
    if (!project || !project.members.includes(userId as any)) {
      throw new AppError('Not authorized to update this task', 403);
    }
    
    if (updates.assigneeId) {
      if (!project.members.includes(updates.assigneeId as any)) {
        throw new AppError('Assignee must be a project member', 400);
      }
    }
    
    Object.keys(updates).forEach((key) => {
      (task as any)[key] = updates[key];
    });
    
    await task.save();
    await task.populate('assignee', 'name email');
    await task.populate('createdBy', 'name email');
    await task.populate('project', 'name');
    
    res.status(200).json(task);
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to update task', 500);
  }
});

router.delete('/:id', authenticate, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.id;
    
    const task = await Task.findById(id);
    if (!task) {
      throw new AppError('Task not found', 404);
    }
    
    const project = await Project.findById(task.project);
    if (!project) {
      throw new AppError('Project not found', 404);
    }
    
    const isOwnerOrAssignee = 
      task.createdBy.toString() === userId || 
      task.assignee.toString() === userId ||
      project.owner.toString() === userId;
    
    if (!isOwnerOrAssignee) {
      throw new AppError('Not authorized to delete this task', 403);
    }
    
    await Task.findByIdAndDelete(id);
    
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to delete task', 500);
  }
});

export default router;

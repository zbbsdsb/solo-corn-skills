// Project Routes
// File: backend/src/routes/projectRoutes.ts

import express, { Request, Response } from 'express';
import Joi from 'joi';
import Project from '../models/Project';
import { validate } from '../middleware/validation';
import { authenticate } from '../middleware/auth';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();

const createProjectSchema = Joi.object({
  name: Joi.string().required().min(1).max(100),
  description: Joi.string().max(500).allow(''),
});

const updateProjectSchema = Joi.object({
  name: Joi.string().min(1).max(100),
  description: Joi.string().max(500).allow(''),
});

const inviteMemberSchema = Joi.object({
  email: Joi.string().required().email(),
});

router.post('/', authenticate, validate(createProjectSchema), async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const userId = (req as any).user.id;
    
    const project = await Project.create({
      name,
      description,
      owner: userId,
      members: [userId],
    });
    
    await project.populate('owner', 'name email');
    await project.populate('members', 'name email');
    
    res.status(201).json(project);
  } catch (error) {
    throw new AppError('Failed to create project', 500);
  }
});

router.get('/', authenticate, async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    
    const projects = await Project.find({
      members: userId,
    })
      .populate('owner', 'name email')
      .populate('members', 'name email')
      .sort({ updatedAt: -1 });
    
    res.status(200).json(projects);
  } catch (error) {
    throw new AppError('Failed to fetch projects', 500);
  }
});

router.get('/:id', authenticate, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.id;
    
    const project = await Project.findById(id)
      .populate('owner', 'name email')
      .populate('members', 'name email');
    
    if (!project) {
      throw new AppError('Project not found', 404);
    }
    
    if (!project.members.some((member: any) => member._id.toString() === userId)) {
      throw new AppError('Not authorized to view this project', 403);
    }
    
    res.status(200).json(project);
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to fetch project', 500);
  }
});

router.put('/:id', authenticate, validate(updateProjectSchema), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const userId = (req as any).user.id;
    
    const project = await Project.findById(id);
    
    if (!project) {
      throw new AppError('Project not found', 404);
    }
    
    if (project.owner.toString() !== userId) {
      throw new AppError('Only project owner can update project', 403);
    }
    
    if (name !== undefined) project.name = name;
    if (description !== undefined) project.description = description;
    
    await project.save();
    await project.populate('owner', 'name email');
    await project.populate('members', 'name email');
    
    res.status(200).json(project);
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to update project', 500);
  }
});

router.delete('/:id', authenticate, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.id;
    
    const project = await Project.findById(id);
    
    if (!project) {
      throw new AppError('Project not found', 404);
    }
    
    if (project.owner.toString() !== userId) {
      throw new AppError('Only project owner can delete project', 403);
    }
    
    await Project.findByIdAndDelete(id);
    
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to delete project', 500);
  }
});

router.post('/:id/invite', authenticate, validate(inviteMemberSchema), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const userId = (req as any).user.id;
    
    const project = await Project.findById(id);
    
    if (!project) {
      throw new AppError('Project not found', 404);
    }
    
    if (project.owner.toString() !== userId) {
      throw new AppError('Only project owner can invite members', 403);
    }
    
    const invitee = await User.findOne({ email });
    if (!invitee) {
      throw new AppError('User not found', 404);
    }
    
    if (project.members.includes(invitee._id)) {
      throw new AppError('User is already a member', 400);
    }
    
    project.members.push(invitee._id);
    await project.save();
    await project.populate('owner', 'name email');
    await project.populate('members', 'name email');
    
    // TODO: Send invitation email
    
    res.status(200).json(project);
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to invite member', 500);
  }
});

router.delete('/:id/members/:memberId', authenticate, async (req: Request, res: Response) => {
  try {
    const { id, memberId } = req.params;
    const userId = (req as any).user.id;
    
    const project = await Project.findById(id);
    
    if (!project) {
      throw new AppError('Project not found', 404);
    }
    
    if (project.owner.toString() !== userId) {
      throw new AppError('Only project owner can remove members', 403);
    }
    
    if (memberId === project.owner.toString()) {
      throw new AppError('Cannot remove project owner', 400);
    }
    
    project.members = project.members.filter((m) => m.toString() !== memberId);
    await project.save();
    await project.populate('owner', 'name email');
    await project.populate('members', 'name email');
    
    res.status(200).json(project);
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to remove member', 500);
  }
});

export default router;

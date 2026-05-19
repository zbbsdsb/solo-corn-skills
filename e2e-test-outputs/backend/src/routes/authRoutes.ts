// Authentication Routes
// File: backend/src/routes/authRoutes.ts

import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Joi from 'joi';
import User from '../models/User';
import { validate } from '../middleware/validation';
import { authenticate } from '../middleware/auth';
import { AppError } from '../middleware/errorHandler';

const router = express.Router();

const registerSchema = Joi.object({
  name: Joi.string().required().min(2).max(100),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(100),
});

const loginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

router.post('/register', validate(registerSchema), async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new AppError('Email already exists', 400);
    }
    
    const user = await User.create({
      name,
      email,
      password,
    });
    
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );
    
    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to register user', 500);
  }
});

router.post('/login', validate(loginSchema), async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new AppError('Invalid credentials', 401);
    }
    
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      throw new AppError('Invalid credentials', 401);
    }
    
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );
    
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to login', 500);
  }
});

router.post('/logout', authenticate, async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

router.post('/forgot-password', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      res.status(200).json({ message: 'If email exists, reset link sent' });
      return;
    }
    
    // TODO: Send password reset email
    console.log('Password reset email sent to:', email);
    
    res.status(200).json({ message: 'If email exists, reset link sent' });
  } catch (error) {
    throw new AppError('Failed to process request', 500);
  }
});

router.post('/reset-password', async (req: Request, res: Response) => {
  try {
    const { token, password } = req.body;
    
    // TODO: Verify token and reset password
    console.log('Password reset with token:', token);
    
    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    throw new AppError('Failed to reset password', 500);
  }
});

router.get('/me', authenticate, async (req: Request, res: Response) => {
  try {
    const user = await User.findById((req as any).user.id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    });
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw new AppError('Failed to get user', 500);
  }
});

export default router;

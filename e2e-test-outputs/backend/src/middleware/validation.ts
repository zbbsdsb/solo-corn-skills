// Validation Middleware
// File: backend/src/middleware/validation.ts

import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      const message = error.details[0].message;
      return res.status(400).json({
        status: 'error',
        statusCode: 400,
        message: `Validation error: ${message}`,
      });
    }
    
    next();
  };
};

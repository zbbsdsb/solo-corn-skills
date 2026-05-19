// TaskCard Component Tests
// File: frontend/tests/components/TaskCard.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from '../../src/components/TaskCard/TaskCard';

describe('TaskCard', () => {
  const mockTask = {
    id: '1',
    title: 'Design new homepage',
    description: 'Create wireframes for the new homepage design',
    status: 'pending' as const,
    priority: 'high' as const,
    assignee: {
      id: '1',
      name: 'John Doe',
      avatar: undefined,
    },
    project: {
      id: '1',
      name: 'Website Redesign',
    },
    dueDate: '2026-05-25',
  };

  it('should render task title', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('Design new homepage')).toBeInTheDocument();
  });

  it('should render task description', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('Create wireframes for the new homepage design')).toBeInTheDocument();
  });

  it('should render assignee name', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('should render project name', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('Website Redesign')).toBeInTheDocument();
  });

  it('should call onClick when card is clicked', () => {
    const handleClick = jest.fn();
    render(<TaskCard task={mockTask} onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Design new homepage'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call onComplete when complete button is clicked', () => {
    const handleComplete = jest.fn();
    render(<TaskCard task={mockTask} onComplete={handleComplete} />);
    
    const completeButton = screen.getByRole('button', { name: /complete/i });
    fireEvent.click(completeButton);
    expect(handleComplete).toHaveBeenCalledTimes(1);
  });

  it('should not render complete button for completed tasks', () => {
    const completedTask = { ...mockTask, status: 'completed' as const };
    render(<TaskCard task={completedTask} onComplete={jest.fn()} />);
    
    expect(screen.queryByRole('button', { name: /complete/i })).not.toBeInTheDocument();
  });

  it('should render priority indicator with correct color', () => {
    const { container } = render(<TaskCard task={mockTask} />);
    
    const priorityIndicator = container.querySelector('.bg-red-500');
    expect(priorityIndicator).toBeInTheDocument();
  });

  it('should render overdue tasks with red due date', () => {
    const overdueTask = {
      ...mockTask,
      dueDate: '2020-01-01',
    };
    
    render(<TaskCard task={overdueTask} />);
    const dueDateElement = screen.getByText(/Jan 1, 2020/i);
    expect(dueDateElement).toHaveClass('text-red-600');
  });

  it('should render status select dropdown', () => {
    const handleStatusChange = jest.fn();
    render(<TaskCard task={mockTask} onStatusChange={handleStatusChange} />);
    
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('pending');
  });

  it('should call onStatusChange when status is changed', () => {
    const handleStatusChange = jest.fn();
    render(<TaskCard task={mockTask} onStatusChange={handleStatusChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'in-progress' } });
    
    expect(handleStatusChange).toHaveBeenCalledWith('in-progress');
  });

  it('should not render description if not provided', () => {
    const taskWithoutDescription = { ...mockTask, description: undefined };
    render(<TaskCard task={taskWithoutDescription} />);
    
    expect(screen.queryByText('Create wireframes for the new homepage design')).not.toBeInTheDocument();
  });

  it('should not render due date if not provided', () => {
    const taskWithoutDueDate = { ...mockTask, dueDate: undefined };
    render(<TaskCard task={taskWithoutDueDate} />);
    
    expect(screen.queryByText(/May 25/)).not.toBeInTheDocument();
  });

  it('should apply completed styles when task is completed', () => {
    const completedTask = { ...mockTask, status: 'completed' as const };
    render(<TaskCard task={completedTask} />);
    
    const title = screen.getByText('Design new homepage');
    expect(title).toHaveClass('line-through');
    expect(title).toHaveClass('text-gray-400');
  });
});

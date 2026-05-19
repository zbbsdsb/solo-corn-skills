// TaskCard Component
// File: components/TaskCard/TaskCard.tsx

import React from 'react';
import PropTypes from 'prop-types';

type TaskStatus = 'pending' | 'in-progress' | 'completed';
type TaskPriority = 'low' | 'medium' | 'high';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee?: {
    id: string;
    name: string;
    avatar?: string;
  };
  project?: {
    id: string;
    name: string;
  };
  dueDate?: string;
}

interface TaskCardProps {
  task: Task;
  onClick?: () => void;
  onStatusChange?: (status: TaskStatus) => void;
  onComplete?: () => void;
  className?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onClick,
  onStatusChange,
  onComplete,
  className = '',
}) => {
  const priorityColors = {
    low: 'bg-green-500',
    medium: 'bg-yellow-500',
    high: 'bg-red-500',
  };
  
  const statusColors = {
    pending: 'bg-gray-100 text-gray-700',
    'in-progress': 'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700',
  };
  
  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'completed';
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-gray-300 transition-all duration-200 ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        <div className={`w-1 h-full min-h-[60px] rounded-full ${priorityColors[task.priority]}`} />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h3 className={`text-base font-medium ${task.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
              {task.title}
            </h3>
            
            {onComplete && task.status !== 'completed' && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onComplete();
                }}
                className="flex-shrink-0 p-1 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            )}
          </div>
          
          {task.description && (
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
              {task.description}
            </p>
          )}
          
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {task.assignee && (
                <div className="flex items-center">
                  {task.assignee.avatar ? (
                    <img
                      src={task.assignee.avatar}
                      alt={task.assignee.name}
                      className="h-6 w-6 rounded-full"
                    />
                  ) : (
                    <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-medium">
                      {getInitials(task.assignee.name)}
                    </div>
                  )}
                  <span className="ml-1.5 text-xs text-gray-600">{task.assignee.name}</span>
                </div>
              )}
              
              {task.dueDate && (
                <div className={`flex items-center text-xs ${isOverdue ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
                  <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              {onStatusChange && (
                <select
                  value={task.status}
                  onChange={(e) => onStatusChange(e.target.value as TaskStatus)}
                  onClick={(e) => e.stopPropagation()}
                  className={`px-2 py-1 text-xs font-medium rounded ${statusColors[task.status]} border-0 cursor-pointer`}
                >
                  <option value="pending">To Do</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.oneOf(['pending', 'in-progress', 'completed']).isRequired,
    priority: PropTypes.oneOf(['low', 'medium', 'high']).isRequired,
    assignee: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    }),
    project: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    dueDate: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
  onComplete: PropTypes.func,
  className: PropTypes.string,
};

export default TaskCard;

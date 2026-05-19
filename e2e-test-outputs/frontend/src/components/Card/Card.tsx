// Card Component
// File: components/Card/Card.tsx

import React from 'react';
import PropTypes from 'prop-types';

interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  footer?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  actions,
  footer,
  onClick,
  selected = false,
  className = '',
}) => {
  const baseStyles = 'bg-white border border-gray-200 rounded-xl transition-all duration-200';
  
  const hoverStyles = onClick ? 'hover:shadow-md hover:border-gray-300 cursor-pointer' : '';
  
  const selectedStyles = selected ? 'ring-2 ring-blue-500 border-blue-500' : '';
  
  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${selectedStyles} ${className}`}
    >
      {(title || actions) && (
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          {actions && <div className="flex items-center space-x-2">{actions}</div>}
        </div>
      )}
      
      <div className="px-4 py-4">
        {children}
      </div>
      
      {footer && (
        <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 rounded-b-xl">
          {footer}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  actions: PropTypes.node,
  footer: PropTypes.node,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  className: PropTypes.string,
};

export default Card;

import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'sm',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'
  
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8'
  }
  
  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  }
  
  const hoverEffect = hover ? 'hover:shadow-md transition-shadow duration-200' : ''
  
  const classes = `${baseClasses} ${paddings[padding]} ${shadows[shadow]} ${hoverEffect} ${className}`
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

// Card sub-components
Card.Header = ({ children, className = '' }) => (
  <div className={`border-b border-gray-200 dark:border-gray-700 pb-3 mb-4 ${className}`}>
    {children}
  </div>
)

Card.Title = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-gray-900 dark:text-white ${className}`}>
    {children}
  </h3>
)

Card.Content = ({ children, className = '' }) => (
  <div className={`text-gray-600 dark:text-gray-300 ${className}`}>
    {children}
  </div>
)

Card.Footer = ({ children, className = '' }) => (
  <div className={`border-t border-gray-200 dark:border-gray-700 pt-3 mt-4 ${className}`}>
    {children}
  </div>
)

export default Card
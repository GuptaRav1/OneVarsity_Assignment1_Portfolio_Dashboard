import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMobileSidebar } from '../utils/sidebarSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { isOpen, isMobileOpen } = useSelector((state) => state.sidebar)
  const [activeItem, setActiveItem] = useState('overview')

  const menuItems = [
    {
      id: 'overview',
      name: 'Overview',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10c0 1.11.89 2 2 2h14c0-1.11-.89-2-2-2V7c0-1.11-.89-2-2-2H5c-1.11 0-2 .89-2 2z" />
        </svg>
      )
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ]

  const handleItemClick = (itemId) => {
    const section = document.getElementById(itemId);
    if (section) {
      // Use the scrollIntoView API for smooth scrolling
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveItem(itemId)
    if (isMobileOpen) {
      dispatch(closeMobileSidebar())
    }
  }

  const handleMobileOverlayClick = () => {
    dispatch(closeMobileSidebar())
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 md:hidden"
          onClick={handleMobileOverlayClick}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:relative inset-y-0 left-0 z-50 md:z-0
        ${isOpen ? 'w-64' : 'w-20'} 
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        sidebar-transition
        bg-white dark:bg-gray-800 
        border-r border-gray-200 dark:border-gray-700
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
              </div>
              {isOpen && (
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Portfolio
                </span>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`
                  w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${activeItem === item.id
                    ? 'bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  }
                `}
              >
                <span className="flex-shrink-0">
                  {item.icon}
                </span>
                {isOpen && (
                  <span className="ml-3">{item.name}</span>
                )}
              </button>
            ))}
          </nav>

          {/* User Profile */}
          {isOpen && (
            <div className="flex-shrink-0 px-4 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    John Doe
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    Developer
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar, toggleMobileSidebar } from '../utils/sidebarSlice'
import { toggleTheme } from '../utils/themeSlice'
import Button from './Button'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isDarkMode } = useSelector((state) => state.theme)
  const { isOpen } = useSelector((state) => state.sidebar)

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar())
  }

  const handleMobileSidebarToggle = () => {
    dispatch(toggleMobileSidebar())
  }

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Desktop Sidebar Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSidebarToggle}
            className="hidden md:flex"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>

          {/* Mobile Sidebar Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleMobileSidebarToggle}
            className="md:hidden"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>

          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Portfolio Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden sm:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleThemeToggle}
            className="p-2"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </Button>

          {/* Profile Avatar */}
          <div className="relative">
            <img
              className="h-8 w-8 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
// src/components/Contact.jsx

import React from 'react'
import Card from './Card'
import Button from './Button'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert('Thank you for your message! (This is a demo)');
  }

  return (
    <div className="space-y-6 p-6 mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Get In Touch
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. Feel free to reach out via email or the contact form.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          <Card padding="lg">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">john.doe@example.com</p>
              </div>
            </div>
          </Card>

          <Card padding="lg">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 rounded-lg flex items-center justify-center">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">GitHub</h4>
                <p className="text-gray-600 dark:text-gray-400">github.com/johndoe</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card padding="lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your message..."
                />
              </div>
              <div>
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
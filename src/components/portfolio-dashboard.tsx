import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, X, Sun, Moon, User, FolderOpen, Mail, Home, Github, Linkedin, ExternalLink } from 'lucide-react';

// Redux Slice for theme and sidebar management
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarOpen: false,
    darkMode: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
  },
});

export const { toggleSidebar, toggleTheme, closeSidebar } = uiSlice.actions;

// Configure Redux store
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

// Reusable Button Component
const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100',
    ghost: 'hover:bg-gray-100 text-gray-700 focus:ring-gray-500 dark:hover:bg-gray-800 dark:text-gray-300',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Reusable Card Component
const Card = ({ children, className = '', title, ...props }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 ${className}`} {...props}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  const dispatch = useDispatch();
  const { sidebarOpen, darkMode } = useSelector((state) => state.ui);
  
  const menuItems = [
    { icon: Home, label: 'Overview', id: 'overview' },
    { icon: FolderOpen, label: 'Projects', id: 'projects' },
    { icon: Mail, label: 'Contact', id: 'contact' },
  ];
  
  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => dispatch(closeSidebar())}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-50 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Portfolio</h2>
          <button
            onClick={() => dispatch(closeSidebar())}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        
        <nav className="mt-4 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mb-2"
                onClick={() => dispatch(closeSidebar())}
              >
                <Icon size={20} className="mr-3" />
                {item.label}
              </a>
            );
          })}
        </nav>
        
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex space-x-3">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

// Top Navbar Component
const TopNavbar = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.ui);
  
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 mr-2"
          >
            <Menu size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch(toggleTheme())}
            className="p-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

// Overview Section
const OverviewSection = () => {
  const stats = [
    { label: 'Projects Completed', value: '12', color: 'text-blue-600' },
    { label: 'Years Experience', value: '3+', color: 'text-green-600' },
    { label: 'Technologies', value: '15+', color: 'text-purple-600' },
    { label: 'Client Satisfaction', value: '98%', color: 'text-orange-600' },
  ];
  
  return (
    <section id="overview" className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <div className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="About Me">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Passionate full-stack developer with expertise in React, Node.js, and modern web technologies. 
            I love creating intuitive user experiences and solving complex problems through code.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </Card>
        
        <Card title="Recent Activity">
          <div className="space-y-4">
            {[
              { action: 'Completed Portfolio Dashboard', time: '2 hours ago' },
              { action: 'Updated React Skills', time: '1 day ago' },
              { action: 'Started New Project', time: '3 days ago' },
            ].map((activity, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                <span className="text-gray-900 dark:text-gray-100">{activity.action}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      status: 'In Progress',
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Weather monitoring dashboard with beautiful visualizations',
      tech: ['React', 'Chart.js', 'Weather API'],
      status: 'Completed',
      link: '#'
    },
  ];
  
  return (
    <section id="projects" className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <div className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <Button variant="secondary" size="sm" className="w-full">
                <ExternalLink size={14} className="mr-2" />
                View Project
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Get in Touch">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail size={20} className="text-gray-600 dark:text-gray-400 mr-3" />
              <span className="text-gray-900 dark:text-gray-100">john.doe@example.com</span>
            </div>
            <div className="flex items-center">
              <Github size={20} className="text-gray-600 dark:text-gray-400 mr-3" />
              <span className="text-gray-900 dark:text-gray-100">github.com/johndoe</span>
            </div>
            <div className="flex items-center">
              <Linkedin size={20} className="text-gray-600 dark:text-gray-400 mr-3" />
              <span className="text-gray-900 dark:text-gray-100">linkedin.com/in/johndoe</span>
            </div>
          </div>
        </Card>
        
        <Card title="Send Message">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-100"
                placeholder="Your message..."
              />
            </div>
            <Button onClick={() => alert('Message sent! (Demo only)')} className="w-full">
              Send Message
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

// Main Content Component
const MainContent = () => {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <OverviewSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
};

// Main App Component
const App = () => {
  const { darkMode } = useSelector((state) => state.ui);
  
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
        <Sidebar />
        <div className="flex-1 flex flex-col lg:ml-0">
          <TopNavbar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

// Root component with Redux Provider
const PortfolioDashboard = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default PortfolioDashboard;
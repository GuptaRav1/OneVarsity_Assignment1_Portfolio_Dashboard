import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import MainContent from './MainContent'

function App() {
  const { isDarkMode } = useSelector((state) => state.theme)

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-gray-50 dark:bg-gray-900`}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <MainContent />
        </div>
      </div>
    </div>
  )
}

export default App
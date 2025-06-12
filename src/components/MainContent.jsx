import { useSelector } from 'react-redux'
import Overview from './Overview'
import Projects from './Projects'
import Contact from './Contact'

const MainContent = () => {
  const { isOpen } = useSelector((state) => state.sidebar)

  const renderContent = () => {
    return (
      <div>
        <section id="overview" className="scroll-mt-16">
          <Overview />
        </section>

        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </div>

    )
  }

  return (
    <main className={`
      flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900
      ${isOpen ? 'ml-0' : 'ml-0'}
    `}>
      <div className="p-6">
        {renderContent()}
      </div>
    </main>
  )
}

export default MainContent
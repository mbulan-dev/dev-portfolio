import './assets/styles/global/index.css'
import Navbar from './components/00-common/Navbar'
import FooterPage from './pages/FooterPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='global-wrapper'>
        <Navbar />
        <HomePage />
        <FooterPage />
    </div>
  )
}

export default App


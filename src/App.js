
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import Portfolio from './components/portfolio'
import Tools from './components/tools'
import Qualities from './components/qualities'
import News from './components/news'
import Footer from './components/footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className='app bg-blue-200 h-full w-full'>
    
      <Router>
        <Header />
        <Section />
        <Portfolio />
        <Tools />
        <Qualities />
        <News />
        <Footer />
        </Router>
    
     
    </div>
  )
}

export default App
  
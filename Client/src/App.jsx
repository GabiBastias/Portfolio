import './App.css'
import Nav from './components/Nav/Nav'
import Home from './views/Home/Home'
import About from './views/About/About'
import TheFourthElementProject from './views/Projects/TheFourthElementProject/TheFourthElementProject'
import VideogamesProject from './views/Projects/VideogamesProject/VideogamesProject'
import FakeBandsAPI from './views/Projects/FakeBandsAPI/FakeBandsAPI'
import { useSelector } from 'react-redux'

function App() {

  const scrollToPage = (page) => {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const language = useSelector(state => state.language);

  return (
    <>
      <header>
        <Nav scrollToPage={scrollToPage} />
      </header>
      <main className='divHome'>
          <div className="divScroll" id='Home'>
              <Home language={language}/>
          </div>
          <div className="divScroll" id='About'>
              <About language={language}/>
          </div>
          <div className="divScroll" id='TheFourthElement'>
              <TheFourthElementProject language={language}/>
          </div>
          <div className="divScroll" id='Videogames'>
              <VideogamesProject language={language}/>
          </div>
          <div className="divScroll" id='FakeBandAPI'>
            <div className='blank'>
              <FakeBandsAPI language={language}/>
            </div>
          </div>
      </main>
    </>
  )
}

export default App

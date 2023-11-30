import './App.css'
import Nav from './components/Nav/Nav'
import LandingProfile from './views/LandingProfile/LandingProfile'
import About from './views/About/About'
import TheFourthElementProject from './views/Projects/TheFourthElementProject/TheFourthElementProject'
import VideogamesProject from './views/Projects/VideogamesProject/VideogamesProject'

function App() {

  const scrollToPage = (page) => {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <header>
        <Nav scrollToPage={scrollToPage}/>
      </header>
      <main className='divHome'>
          <div className="divScroll" id='Home'>
              <LandingProfile />
          </div>
          <div className="divScroll" id='About'>
              <About/>
          </div>
          <div className="divScroll" id='Projects'>
              <TheFourthElementProject/>
          </div>
          <div className="divScroll">
              <VideogamesProject/>
          </div>
      </main>
    </>
  )
}

export default App

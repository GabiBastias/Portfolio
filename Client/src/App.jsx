import './App.css'
import Nav from './components/Nav/Nav'
import LandingProfile from './views/LandingProfile/LandingProfile'
import About from './views/About/About'
import TheFourthElementProject from './views/Projects/TheFourthElementProject/TheFourthElementProject'
import VideogamesProject from './views/Projects/VideogamesProject/VideogamesProject'
import ContactForm from './components/ContactForm/ContactForm'
import APIShower from './components/APIShower/APIShower'

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
              <About />
          </div>
          <div className="divScroll" id='Projects'>
              <TheFourthElementProject />
          </div>
          <div className="divScroll">
              <VideogamesProject />
          </div>
          <div className="divScroll">
            <div className='blank'>
              <ContactForm />
            </div>
          </div>
          <div className="divScroll">
            <div className='blank'>
              <APIShower />
            </div>
          </div>
      </main>
    </>
  )
}

export default App

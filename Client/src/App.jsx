import './App.css'
import Nav from './components/Nav/Nav'
import Home from './views/Home/Home'
import About from './views/About/About'
import TheFourthElementProject from './views/Projects/TheFourthElementProject/TheFourthElementProject'
import VideogamesProject from './views/Projects/VideogamesProject/VideogamesProject'
import FakeBandsAPI from './views/Projects/FakeBandsAPI/FakeBandsAPI'
import { useSelector } from 'react-redux'
import { useState } from 'react'

function App() {

  const [liStyles, setLiStyles] = useState("liNav");
  const language = useSelector(state => state.language);
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 920 && scrollY <= 1838){
      setLiStyles("liNavTFE");
    } else if (scrollY >= 1839 && scrollY <= 2757){
      setLiStyles("liNavVG");
    } else if (scrollY >= 2758 && scrollY <= 3680){
      setLiStyles("liNavFBA");
    } else if (scrollY < 920){
      setLiStyles("liNav");
    }
  };
 
  window.addEventListener('scroll', handleScroll);
  

  const scrollToPage = (page) => {
    const element = document.getElementById(page);
    
    if (page === "TheFourthElement") {
      setLiStyles("liNavTFE");
    } else if (page === "Videogames") {
      setLiStyles("liNavVG");
    } else if (page === "FakeBandAPI") {
      setLiStyles("liNavFBA");
    } else {
      setLiStyles("liNav");
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <header>
        <Nav scrollToPage={scrollToPage} color={liStyles} />
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
              <FakeBandsAPI language={language}/>
          </div>
      </main>
    </>
  )
}

export default App

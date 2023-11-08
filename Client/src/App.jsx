import { Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './views/Home/Home'
import Nav from './components/Nav/Nav'

function App() {
  
          

  return (
    <>
      <header>
        <Nav/>
      </header>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
            />
          <Route
            path='/'
            element={<Home/>}
            />
        </Routes>
    </>
  )
}

export default App

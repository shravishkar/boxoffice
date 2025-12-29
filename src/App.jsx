import { useState } from 'react'
import Moviegallery from './Components/Moviegallery'
import Navbar from './navbar'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Movviedetails from './Components/moviedetial'




function App() {
  const [count, setCount] = useState(0)
  

  return (
 <Router>

      <div className='appcomp'>
      <div className='sidebar-container'>
          <Navbar/>
      </div>
      <div className='main-container'>
        <Routes>
          <Route  exact path='/' element={<Moviegallery />}/>
          <Route  path='/shows/:id' element={<Movviedetails />}/>
          
        </Routes>

      </div>

    </div>


  </Router>

  )
}

 

export default App

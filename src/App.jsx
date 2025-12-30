import { useState } from 'react'
import Moviegallery from './Components/Moviegallery'
import Navbar from './navbar'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Movviedetails from './Components/moviedetial'
import UserList from './Components/userlist'




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
          <Route  exact path='/boxoffice/' element={<Moviegallery />}/>
          <Route  path='/shows/:id' element={<Movviedetails />}/>
          <Route  path='/users/' element={<UserList />}/>

          
        </Routes>

      </div>

    </div>


  </Router>

  )
}

 

export default App

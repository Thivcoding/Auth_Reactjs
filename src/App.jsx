import React from 'react'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'


const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Create from './component/Create'
import Update from './component/Update'
import './App.css';


function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>} />
        <Route path='/edit/:id' element={<Update/>} />
      </Routes>
   </BrowserRouter>
  ) 
}

export default App

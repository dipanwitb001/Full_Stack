import React from 'react';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={< Signup/>}></Route>
    </Routes>
        
    </BrowserRouter>
  )
}

export default App

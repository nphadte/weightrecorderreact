import React from 'react';
import './App.css';
import './styles/styles.css';
import Home from './components/home/home';
import  Customers from './components/home/customers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/register/register';


function App() {
  return (
    <div className='App'>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}/>  
                <Route path="/home" element={<Home/>}/>  
                <Route path="/customers" element={<Customers/>}/>  
                <Route path="/register" element={<Register/>}/>  
                <Route path="/login" element={<Register/>}/> 
            </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;

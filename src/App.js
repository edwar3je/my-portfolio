import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './RouteComponents/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact='true' path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

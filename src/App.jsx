import React, { } from 'react'
import TodoApp from "./component/TodoApp/TodoApp"
import { Fragment } from 'react';
import About from './component/About/About';
import Header from './component/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {

  return (
    //fragment <></>

    <Router>

      <Header />

      <Routes>
        <Route path='/' exact element={<TodoApp />} />
        <Route path='/about' element={<About />} />
      </Routes>


    </Router>


  );

};


export default App;
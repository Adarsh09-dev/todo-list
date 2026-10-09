import React, { } from 'react'
import TodoApp from "./component/TodoApp/TodoApp"
import { Fragment } from 'react';
import About from './component/About/About';
import Header from './component/Header/Header';



const App = () => {

  return (
    //fragment <></>
    <>
      <Header />
      <About />
      <TodoApp />

    </>
  );

};


export default App;
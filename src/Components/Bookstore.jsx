import React from 'react';
import Header from './Header';
import Main from './Main';
import {  Route, Routes } from 'react-router-dom';
import { Fragment } from "react";

import './style.scss'
export default function Bookstore({background,setBackground}) {
  return <div>
      
      <Routes >
          <Route path='/books' element={<Fragment ><Header background={background} setBackground={setBackground} /> <Main /></Fragment>}></Route>
          <Route path='/categories' element={<Fragment ><Header background={background} setBackground={setBackground} /> </Fragment>}></Route>
      </Routes>
      
  </div>;
}

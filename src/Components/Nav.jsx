import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

export default function Nav() {
  return <div className='nav'>
      <div className="nav-section">
          <NavLink className='nav-item' to='/books'>BOOKS</NavLink>
          <NavLink className='nav-item' to='/categories'>CATEGORIES</NavLink>
      </div>
      
  </div>;
}

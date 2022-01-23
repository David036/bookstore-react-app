import React from 'react';
import Nav from './Nav';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Header(props) {
  return <div className='header'>
      <div className="header-section">
          <h1>Bookstore CMS</h1>
          <Nav />
          <FormControlLabel onClick={() =>  {props.setBackground(!props.background)}} control={<Switch defaultChecked />} label="" />
          <button>User</button>
      </div>
  </div>;
}

import React from 'react';
import './Desktop.css';
import MainContainer from './MainContainer/MainContainer';
import SideNavbar from './SideNavbar/SideNavbar';

const Desktop = () => {
  return (
    <div className='desktop'>
      <SideNavbar/>
      <MainContainer/>
    </div>
  )
}

export default Desktop

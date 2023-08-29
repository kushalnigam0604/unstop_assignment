import React from 'react';
import './SideNavbarElement.css';
import {RxDashboard} from 'react-icons/rx';
import {MdOutlineAssessment} from 'react-icons/md'
import {MdOutlinePhotoLibrary} from 'react-icons/md'
import {GrStatusGood} from 'react-icons/gr'


const SideNavbarElement = () => {
  return (
    <>
      <div className='sideNavbarElement'><RxDashboard className='sideNavbarElementIcon'/>Dashboard</div>
      <div className='sideNavbarElement sideNavbarElementAssessment'><MdOutlineAssessment className='sideNavbarElementIcon'/>Assessment</div>
      <div className='sideNavbarElement'><MdOutlinePhotoLibrary className='sideNavbarElementIcon'/>My Library</div>
      <hr />
      <button className='sideNavbarElementButton'>Admin</button>
      <div className='sideNavbarElement'><GrStatusGood className='sideNavbarElementIcon'/><span>Round</span><span>Status</span></div>
    </>
  )
}

export default SideNavbarElement

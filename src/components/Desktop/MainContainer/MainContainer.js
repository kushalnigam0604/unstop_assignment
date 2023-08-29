import React from 'react'
import AssessmentOverview from './AssessmentOverview/AssessmentOverview';
import LoginForm from './LoginForm/LoginForm';
import './MainContainer.css';
import MainContainerHeader from './MainContainerHeader/MainContainerHeader';
import MyAssessment from './MyAssessment/MyAssessment';
import { useSelector } from 'react-redux';


const MainContainer = () => {
  const value = useSelector((state) => state.popup.value);
  console.log(value)

  return (
    <div className='mainContainer'>
      <MainContainerHeader/>
      <AssessmentOverview/>
      <MyAssessment/>
      {value && <LoginForm />}
    </div>
  )
}

export default MainContainer

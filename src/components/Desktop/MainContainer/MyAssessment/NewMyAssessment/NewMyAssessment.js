import React from 'react'
import './NewMyAssessment.css'
import {AiOutlinePlus} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { openLoginForm } from '../../../../../slices/FormPopupSlice';


const NewMyAssessment = () => {
    const dispatch = useDispatch();

  return (
    <div className='newMyAssessment' onClick={() => dispatch(openLoginForm())}>
      <div className="newMyAssessmentIcon">
      <AiOutlinePlus/>
      </div>
      <div className="newMyAssessmentTitle">
      New Assessment
      </div>
      <div className="newMyAssessmentPara">
      From here you can add questions of multiple types like MCQs, subjective(text or paragraph)!
      </div>
    </div>
  )
}

export default NewMyAssessment

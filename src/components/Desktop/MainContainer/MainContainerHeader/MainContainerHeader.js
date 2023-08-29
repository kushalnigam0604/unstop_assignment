import React from "react";
import "./MainContainerHeader.css";
import { BiMobile } from "react-icons/bi";

const MainContainerHeader = () => {
  return (
    <div className="mainContainerHeader">
      <div className="mainContainerLeftHeader">
        <span className="assessmentSpan">Assessment</span>
        <span className="blankAssessmentSpan"></span>
        <span className="myAssessmentSpan">My Assessments</span>
      </div>
      <div className="mainContainerRightHeader">
        <BiMobile />
      </div>
    </div>
  );
};

export default MainContainerHeader;

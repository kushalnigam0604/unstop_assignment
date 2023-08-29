import React from "react";
import MathMyAssessment from "./MathMyAssessment/MathMyAssessment";
import "./MyAssessment.css";
import NewMyAssessment from "./NewMyAssessment/NewMyAssessment";

const MyAssessment = () => {
  return (
    <div className="myAssessment">
      <div className="myAssessmentHeading">My Assessment</div>
      <div className="myAssessmentContainer">
        <NewMyAssessment />
        <MathMyAssessment />
        <MathMyAssessment />
      </div>
    </div>
  );
};

export default MyAssessment;

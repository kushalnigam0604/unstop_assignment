import React from "react";
import "./AssessmentOverviewDigitData.css";

const AssessmentOverviewDigitData = ({largeNumber,smallNumber,text}) => {
  return (
    <>
      <div className="AssessmentOverviewDigitDataOuterDiv">
        <span className="AssessmentOverviewDigitDataLargeNumber">{largeNumber}</span>
        <span className="AssessmentOverviewDigitDataSmalNumber">{smallNumber}</span>
      </div>

      <span className="AssessmentOverviewDigitDataText">{text}</span>
    </>
  );
};

export default AssessmentOverviewDigitData;

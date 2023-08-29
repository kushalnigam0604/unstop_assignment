import React from "react";
import "./AssessmentOverview.css";
import { HiMenuAlt4 } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import AssessmentOverviewDigitData from "./AssessmentOverviewDigitData/AssessmentOverviewDigitData";

const AssessmentOverview = () => {
  return (
    <div className="assessmentOverview">
      <div className="assessmentOverviewSpan">Assessment Overview</div>
      <div className="assessmentOverviewDataDiv">
        <div className="assessmentOverviewDataFourDiv">
          <span>Total Assessment</span>
          <div className="assessmentOverviewDataDivContent">
            <div className="assessmentOverviewDataDivContentIcon">
              <HiMenuAlt4 />
            </div>
            <div className="assessmentOverviewDataDivContentDigitData">
              <AssessmentOverviewDigitData
                largeNumber="34"
                smallNumber=""
                text=""
              />
            </div>
          </div>
        </div>
        <div className="assessmentOverviewDataBlankDiv"></div>
        <div className="assessmentOverviewDataFourDiv">
          <span>Candidates</span>
          <div className="assessmentOverviewDataDivContent">
            <div className="assessmentOverviewDataDivContentIcon">
              <FiUsers />
            </div>
            <div className="assessmentOverviewDataDivContentDigitData">
              <AssessmentOverviewDigitData
                largeNumber="11,145"
                smallNumber="+89"
                text="Total Candidate"
              />
            </div>
            <div className="assessmentOverviewDataDivContentBlank"></div>
            <div className="assessmentOverviewDataDivContentDigitData">
              <AssessmentOverviewDigitData
                largeNumber="1,14"
                smallNumber="+89"
                text="Who Attemped"
              />
            </div>
          </div>
        </div>
        <div className="assessmentOverviewDataBlankDiv"></div>
        <div className="assessmentOverviewDataFourDiv">
          <span>Candidates Source</span>
          <div className="assessmentOverviewDataDivContent">
            <div className="assessmentOverviewDataDivContentIcon">
              <BsGlobe />
            </div>
            <div className="assessmentOverviewDataDivContentDigitData">
              <AssessmentOverviewDigitData
                largeNumber="11,000"
                smallNumber="+89"
                text="E-mail"
              />
            </div>
            <div className="assessmentOverviewDataDivContentBlank"></div>
            <div className="assessmentOverviewDataDivContentDigitData">
              <AssessmentOverviewDigitData
                largeNumber="145"
                smallNumber="+89"
                text="Social Share"
              />
            </div>
            <div className="assessmentOverviewDataDivContentBlank"></div>
            <div className="assessmentOverviewDataDivContentDigitData">
              <AssessmentOverviewDigitData
                largeNumber="145"
                smallNumber="+89"
                text="Unique Link"
              />
            </div>
          </div>
        </div>
        <div className="assessmentOverviewDataBlankDiv"></div>
        <div className="assessmentOverviewDataFourDiv">
          <span>Total Purpose</span>
          <div className="assessmentOverviewDataDivContent">
            <div className="assessmentOverviewDataDivContentIcon">
              <FiLink2 />
            </div>
            <div className="assessmentOverviewDataDivContentDigitData">
              <AssessmentOverviewDigitData
                largeNumber="11"
                smallNumber=""
                text=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentOverview;

import React from "react";
import "./ResumeButton.scss"; // Make sure to save your SCSS code in this file

const ResumeButton = ({ onClick }) => { // Accept onClick prop
  return (
    <div className="resume">
      <button className="btn-download" id="btn-auto-click" onClick={onClick}> {/* Use onClick here */}
        <div className="arrow"></div>
      </button>
    </div>
  );
};

export default ResumeButton;

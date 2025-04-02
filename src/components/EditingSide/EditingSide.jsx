import React from 'react'
import './EditingSide.css'
import generalIcon from "/home/athanasios/Odin/CV_Application/src/assets/business-man-wearing-suit-and-tie-svgrepo-com.svg";
import educationIcon from "/home/athanasios/Odin/CV_Application/src/assets/school-svgrepo-com.svg";
import workIcon from "/home/athanasios/Odin/CV_Application/src/assets/work-alt-svgrepo-com.svg";

function General() {
    return (
        <div className="general">
            <div className="top">
                <img src={generalIcon}></img>
                <p> General Information </p>
            </div>
            <div className="bottom">
                <form className="general-input">
                    
                </form>
            </div>
        </div>
    );
}

function Education() {
    return (
        <div className="education">
            <div className="top">
                <img src={educationIcon}></img>
                <p> Education </p>
            </div>
            <div className="bottom">

            </div>
        </div>
    );
}

function WorkExperience() {
    return (
        <div className="work-experience"> 
            <div className="top">
                <img src={workIcon}></img>
                <p> Work </p>
            </div>
            <div className="bottom">

            </div>
        </div>
    );
}
function EditingSide() {
    return (
        <div className="editing-side">
            <div className="title"> 
                <h1> Resume Editor </h1>
            </div>
            <div className="testing">
                <General/>
                <Education/>
                <WorkExperience/>
            </div>
        </div>
    )
}

export default EditingSide
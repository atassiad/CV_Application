import React from 'react';
import './ResumeSide.css';

function ResumeGeneralInfo({ name, occupation, telephone, email, location }) {
    return (
        <div className="resume-general-info">
            <h1> {name || "Your Name"} </h1>
            <p>{`${occupation || "Your Occupation"} | ${telephone || "Your Phone"} | ${email || "Your Email"} | ${location || "Your Location"}`}</p>
        </div>
    );
}

function ResumeEducation({ school_name, degree_type, graduation_range, gpa, relevent_coursework }) {
    return (
        <div className="resume-education">
            <h2> Education </h2>
            <div className="school-grad-split">
                <p>{school_name || "Your School Name"}</p>
                <p>{graduation_range || "Your Graduation Range"}</p>
            </div>
            <p>{degree_type || "Your Degree Type"}</p>
            <p>{gpa || "Your GPA"}</p>
            <p>{relevent_coursework || "Your Relevant Coursework"}</p>
        </div>
    );
}

function ResumeWorkExperience({ position, company, work_range, location, description }) {
    return (
        <div className="resume-work-experience">
            <h2> Work Experience </h2>
            <div className="position-work-range-split">
                <p>{position || "Your Position"}</p>
                <p>{work_range || "Your Work Range"}</p>
            </div>
            <p>{company || "Your Company"}</p>
            <p>{location || "Your Location"}</p>
            <p>{description || "Your Description"}</p>
        </div>
    );
}

function ResumeSide({ generalInfo, educationInfo, workExperienceInfo }) {
    return (
        <div className="resume-side">
            <div className="resume">
                <ResumeGeneralInfo
                    name={generalInfo.name}
                    occupation={generalInfo.occupation}
                    telephone={generalInfo.telephone}
                    email={generalInfo.email}
                    location={generalInfo.location}
                />
                <ResumeEducation {...educationInfo} />
                <ResumeWorkExperience {...workExperienceInfo} />
            </div>
        </div>
    );
}

export default ResumeSide;
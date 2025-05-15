import React from 'react';
import './ResumeSide.css';

function ResumeGeneralInfo({ name, occupation, telephone, email, location }) {
    return (
        <div className="resume-general-info">
            <h1> {name || "Lebron James"} </h1>
            <p>
                <span className="value">{`${occupation || "Basketball Player"} | ${telephone || "123-456-789"} | ${email || "lebron@gmail.com"} | ${location || "Cleveland, Ohio"}`}</span>
            </p>
        </div>
    );
}

function ResumeEducation({ school_name, degree_type, graduation_range, gpa, relevent_coursework }) {
    return (
        <div className="resume-education">
            <h2> Education </h2>
            <div className="school-grad-split">
                <p>{school_name || "Cleveland Institute of Technology"}</p>
                <p>{graduation_range || "May 2000 - July 2025"}</p>
            </div>
            <p>{degree_type || "Bachelors of Science in Corner Threes"}</p>
            <p>
                <span className="label">GPA:</span> <span className="value">{gpa || "4.0/4.0"}</span>
            </p>
            <p>
                <span className="label">Relevant Coursework:</span> <span className="value">{relevent_coursework || "Projectile Motion for Three Point Effectiveness, Driving to the Rim, and the Flying Dutchman"}</span>
            </p>
        </div>
    );
}

function ResumeWorkExperience({ position, company, work_range, location, description }) {
    return (
        <div className="resume-work-experience">
            <h2> Work Experience </h2>
            <div className="position-work-range-split">
                <p>{position || "Senior Executive of Buckets"}</p>
                <p>{work_range || "May 2000 - Current"}</p>
            </div>
            <div className="company-location-split">
                <p>{company || "Cleveland Cavaliers"}</p>
                <p>{location || "Cleveland, Ohio"}</p>
            </div>
            <p><span className="label">Accomplishments:</span> <span className="value">{description || "Maximized buckets by consistently taking the ball to the rack achieving a career-long efg% of 75%. Essentially, I can put the ball in the hole."}</span></p>
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
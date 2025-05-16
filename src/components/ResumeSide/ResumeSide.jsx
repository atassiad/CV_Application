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

let sampleSummary = "Visionary basketball executive and full-court entrepreneur with 20+ years of experience in dunk optimization, championship logistics, and locker room morale engineering. Known for managing multimillion-dollar brand partnerships while simultaneously managing triple-double workloads. Adept at leading cross-functional teams (usually to the Finals), mentoring junior associates (see: the entire Lakers roster), and executing high-pressure pivots—on and off the court. Seeking to leverage unparalleled vertical integration and clutch-time decision-making to expand influence in global sports diplomacy and Space Jam cinematic universes.";
function ProfessionalSummary({ summary }) {
    return (
        <div className="resume-professional-summary">
            <h2> Professional Summary </h2>
            <p>
                <span className="value">{`${summary || sampleSummary}`}</span>
            </p>
        </div>
    );
}

function ResumeSkills({ skill1, skill2, skill3, skill4, skill5, skill6 }) {
    return (
        <div className="resume-skills">
            <h2> Skills </h2>
            <div className="skills-split">
                <div className="skills-col">
                    <ul>
                        <li><span className="value">{skill1 || "Shooting"}</span></li>
                        <li><span className="value">{skill2 || "Passing"}</span></li>
                    </ul>
                </div>
                <div className="skills-col">
                    <ul>
                        <li><span className="value">{skill3 || "Dribbling"}</span></li>
                        <li><span className="value">{skill4 || "Defense"}</span></li>
                    </ul>
                </div>
                <div className="skills-col">
                    <ul>
                        <li><span className="value">{skill5 || "Leadership"}</span></li>
                        <li><span className="value">{skill6 || "Teamwork"}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

let sampleInterests = "Basketball, Space Jam, Dunking, Fatherhood, Dunking, Philanthropy, and Cabo Trips when I lose the championship.";
let sampleCertifications = "Certified in Dunkology, Certified in Space Jam Diplomacy,Certified in Fatherhood, and Certified rap specialist.";
function InterestsAndCertifications({ interests, certifications }) {
    return (
        <div className="resume-interests-certifications">
            <h2> Interests & Certifications </h2>
            <p>
                <span className="label">Interests:</span> <span className="value">{interests || sampleInterests}</span>
            </p>
            <p>
                <span className="label">Certifications:</span> <span className="value">{certifications || sampleCertifications}</span>
            </p>
        </div>
    );
}

function ResumeSide({ 
    generalInfo, 
    educationInfo, 
    workExperienceInfo, 
    professionalSummary, 
    skills, 
    interestsAndCertifications 
}) {
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
                <ProfessionalSummary summary={professionalSummary} />
                <ResumeSkills 
                    skill1={skills.skill1} 
                    skill2={skills.skill2} 
                    skill3={skills.skill3} 
                    skill4={skills.skill4} 
                    skill5={skills.skill5} 
                    skill6={skills.skill6} 
                />
                <ResumeEducation {...educationInfo} />
                <ResumeWorkExperience {...workExperienceInfo} />
                <InterestsAndCertifications 
                    interests={interestsAndCertifications.interests} 
                    certifications={interestsAndCertifications.certifications} 
                />
            </div>
        </div>
    );
}

export default ResumeSide;
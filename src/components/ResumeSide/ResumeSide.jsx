import React from 'react'
import './ResumeSide.css'

function ResumeEducation({name, occupation, telephone, email, location}) {
    return (
        <div className="resume-education">
            <h1> {name} </h1>
            <p>{occupation + " | " + telephone + " | " + email + " | " + location}</p>
        </div>
    )
}

function ResumeSide() {
    return (
        <div className="resume-side">
            <div className="resume">
                <ResumeEducation name="John" occupation="Supreme Ruler" telephone="1000" email="john@gmail.com" location="North Pole"/>
            </div>
        </div>
    )
}

export default ResumeSide
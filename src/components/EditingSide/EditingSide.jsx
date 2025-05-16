import React, { useState } from 'react';
import './EditingSide.css';
import generalIcon from "../../assets/business-man-wearing-suit-and-tie-svgrepo-com.svg";
import educationIcon from "../../assets/school-svgrepo-com.svg";
import workIcon from "../../assets/work-alt-svgrepo-com.svg";
import profIcon from "../../assets/book-user-svgrepo-com.svg";
import skillIcon from "../../assets/align-bottom-svgrepo-com.svg";
import interestsIcon from "../../assets/computer-svgrepo-com.svg";


function InputField({ label, type = "text", name, placeholder, value, onChange }) {
    const fieldStyle = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "400px",
        marginBottom: "10px"
    };

    const labelStyle = {
        fontSize: "16px",
        fontWeight: "bold",
        marginBottom: "5px"
    };

    const inputStyle = {
        padding: "8px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "100%"
    };

    return (
        <div style={fieldStyle}>
            <label style={labelStyle} htmlFor={name}>{label}:</label>
            <input
                style={inputStyle}
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

function General({ onGeneralSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        occupation: '',
        telephone: '',
        email: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGeneralSubmit(formData);
    };

    return (
        <div className="general">
            <div className="top">
                <img src={generalIcon} alt="General Icon" />
                <p> General Information </p>
            </div>
            <form className="general-input" onSubmit={handleSubmit}>
                <div className="left">
                    <InputField label="Full Name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
                    <InputField label="Occupation" name="occupation" placeholder="Enter your occupation" value={formData.occupation} onChange={handleChange} />
                    <InputField label="Phone Number" name="telephone" placeholder="Enter your phone number" value={formData.telephone} onChange={handleChange} />
                </div>
                <div className="right">
                    <InputField label="Email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    <InputField label="Location" name="location" placeholder="Enter your location" value={formData.location} onChange={handleChange} />
                    <div className="button-container">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function Education({ onEducationSubmit }) {
    const [formData, setFormData] = useState({
        school_name: '',
        degree_type: '',
        graduation_range: '',
        gpa: '',
        relevent_coursework: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEducationSubmit(formData);
    };

    return (
        <div className="education">
            <div className="top">
                <img src={educationIcon} alt="Education Icon" />
                <p> Education </p>
            </div>
            <form className="education-input" onSubmit={handleSubmit}>
                <div className="left">
                    <InputField label="School Name" name="school_name" placeholder="Enter your school name" value={formData.school_name} onChange={handleChange} />
                    <InputField label="Degree Type" name="degree_type" placeholder="Enter your degree type" value={formData.degree_type} onChange={handleChange} />
                    <InputField label="Graduation Range" name="graduation_range" placeholder="Enter your graduation range" value={formData.graduation_range} onChange={handleChange} />
                </div>
                <div className="right">
                    <InputField label="GPA" name="gpa" placeholder="Enter your GPA" value={formData.gpa} onChange={handleChange} />
                    <InputField label="Relevant Coursework" name="relevent_coursework" placeholder="Enter relevant coursework" value={formData.relevent_coursework} onChange={handleChange} />
                    <div className="button-container">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function WorkExperience({ onWorkExperienceSubmit }) {
    const [formData, setFormData] = useState({
        position: '',
        company: '',
        work_range: '',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onWorkExperienceSubmit(formData);
    };

    return (
        <div className="work-experience">
            <div className="top">
                <img src={workIcon} alt="Work Icon" />
                <p> Work Experience </p>
            </div>
            <form className="work-input" onSubmit={handleSubmit}>
                <div className="left">
                    <InputField label="Position" name="position" placeholder="Enter your position" value={formData.position} onChange={handleChange} />
                    <InputField label="Company" name="company" placeholder="Enter your company" value={formData.company} onChange={handleChange} />
                    <InputField label="Work Range" name="work_range" placeholder="Enter your work range" value={formData.work_range} onChange={handleChange} />
                </div>
                <div className="right">
                    <InputField label="Location" name="location" placeholder="Enter your location" value={formData.location} onChange={handleChange} />
                    <InputField label="Description" name="description" placeholder="Enter your description" value={formData.description} onChange={handleChange} />
                    <div className="button-container">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function ProfessionalSummary({ onProfessionalSummarySubmit }) {
    const [summary, setSummary] = useState('');

    const handleChange = (e) => {
        setSummary(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onProfessionalSummarySubmit(summary);
    };

    return (
        <div className="professional-summary">
            <div className="top">
                <img src={profIcon} alt="Prof Icon" />
                <p> Professional Summary </p>
            </div>
            <form className="prof-input" onSubmit={handleSubmit}>
                <div className="left">
                    <InputField 
                        label="Description" 
                        name="Description" 
                        placeholder="Enter your professional summary" 
                        value={summary} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="right">
                    <div className="button-container">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function Skills({ onSkillsSubmit }) {
    const [formData, setFormData] = useState({
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',
        skill6: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSkillsSubmit(formData);
    };

    return (
        <div className="skills">
            <div className="top">
                <img src={skillIcon} alt="Skills Icon" />
                <p> Skills </p>
            </div>
            <form className="skills-input" onSubmit={handleSubmit}>
                <div className="left">
                    <InputField label="Skill 1" name="skill1" placeholder="Enter skill 1" value={formData.skill1} onChange={handleChange} />
                    <InputField label="Skill 2" name="skill2" placeholder="Enter skill 2" value={formData.skill2} onChange={handleChange} />
                    <InputField label="Skill 3" name="skill3" placeholder="Enter skill 3" value={formData.skill3} onChange={handleChange} />
                </div>
                <div className="right">
                    <InputField label="Skill 4" name="skill4" placeholder="Enter skill 4" value={formData.skill4} onChange={handleChange} />
                    <InputField label="Skill 5" name="skill5" placeholder="Enter skill 5" value={formData.skill5} onChange={handleChange} />
                    <InputField label="Skill 6" name="skill6" placeholder="Enter skill 6" value={formData.skill6} onChange={handleChange} />
                    <div className="button-container">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function InterestsAndCertifications({ onInterestsAndCertificationsSubmit }) {
    const [formData, setFormData] = useState({
        interests: '',
        certifications: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onInterestsAndCertificationsSubmit(formData);
    };

    return (
        <div className="interests-certifications">
            <div className="top">
                <img src={interestsIcon} alt="Interests Icon" />
                <p> Interests & Certifications </p>
            </div>
            <form className="int-cert-input" onSubmit={handleSubmit}>
                <div className="left">
                    <InputField 
                        label="Interests" 
                        name="interests" 
                        placeholder="Enter your interests" 
                        value={formData.interests} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="right">
                    <InputField 
                        label="Certifications" 
                        name="certifications" 
                        placeholder="Enter your certifications" 
                        value={formData.certifications} 
                        onChange={handleChange} 
                    />
                    <div className="button-container">
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function EditingSide({ 
    onGeneralSubmit, 
    onEducationSubmit, 
    onWorkExperienceSubmit, 
    onProfessionalSummarySubmit, 
    onSkillsSubmit, 
    onInterestsAndCertificationsSubmit 
}) {
    return (
        <div className="editing-side">
            <div className="title">
                <h1> Resume Editor </h1>
            </div>
            <div className="edit-resume">
                <General onGeneralSubmit={onGeneralSubmit} />
                <ProfessionalSummary onProfessionalSummarySubmit={onProfessionalSummarySubmit} />
                <Skills onSkillsSubmit={onSkillsSubmit} />
                <Education onEducationSubmit={onEducationSubmit} />
                <WorkExperience onWorkExperienceSubmit={onWorkExperienceSubmit} />
                <InterestsAndCertifications onInterestsAndCertificationsSubmit={onInterestsAndCertificationsSubmit} />
            </div>
        </div>
    );
}

export default EditingSide;
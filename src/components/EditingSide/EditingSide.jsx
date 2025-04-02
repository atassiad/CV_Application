import React from 'react'
import './EditingSide.css'
import generalIcon from "/home/athanasios/Odin/CV_Application/src/assets/business-man-wearing-suit-and-tie-svgrepo-com.svg";
import educationIcon from "/home/athanasios/Odin/CV_Application/src/assets/school-svgrepo-com.svg";
import workIcon from "/home/athanasios/Odin/CV_Application/src/assets/work-alt-svgrepo-com.svg";

function InputField({ label, type = "text", name, placeholder }) {
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
            />
        </div>
    );
}

function General() {
    return (
        <div className="general">
            <div className="top">
                <img src={generalIcon}></img>
                <p> General Information </p>
            </div>
            <form className="general-input">
                <div className="left">
                    <InputField label="Full Name" name="fullname" placeholder="Your Full Name"/>
                    <InputField label="Occupation" name="occupation" placeholder="Your Occupation"/>
                    <InputField label="Phone Number" name="phonenumber" placeholder="Your Phone Number" />
                </div>
                <div className="right"> 
                    <InputField label="Full Name" name="fullname" placeholder="Your Full Name" />
                    <InputField label="Full Name" name="fullname" placeholder="Your Full Name" />
                </div>
            </form>
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
            <form className="education-input">
                <div className="left">
                    <InputField label="Full Name" name="fullname" placeholder="Your Full Name" />
                    <InputField label="Occupation" name="occupation" placeholder="Your Occupation" />
                    <InputField label="Occupation" name="occupation" placeholder="Your Occupation" />
                </div>
                <div className="right">
                    <InputField label="Full Name" name="fullname" placeholder="Your Full Name" />
                    <InputField label="Full Name" name="fullname" placeholder="Your Full Name" />
                </div>
            </form>
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
            <form className="work-input">
                <div className="left">
                    <InputField label="Full Name" name="fullname" placeholder="Your Full Name" />
                    <InputField label="Occupation" name="occupation" placeholder="Your Occupation" />
                    <InputField label="Occupation" name="occupation" placeholder="Your Occupation" />
                </div>
                <div className="right">
                    <InputField label="Full Name" name="fullname" placeholder="Your Full Name" />
                    <InputField label="Full Name" name="fullname" placeholder="Your Full Name" />
                </div>
            </form>
        </div>
    );
}
function EditingSide() {
    return (
        <div className="editing-side">
            <div className="title"> 
                <h1> Resume Editor </h1>
            </div>
            <div className="edit-resume">
                <General/>
                <Education/>
                <WorkExperience/>
            </div>
        </div>
    )
}

export default EditingSide
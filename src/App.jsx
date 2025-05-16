import React, { useState } from 'react';
import Footer from './components/Footer/Footer.jsx';
import EditingSide from './components/EditingSide/EditingSide.jsx';
import ResumeSide from './components/ResumeSide/ResumeSide.jsx';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    occupation: '',
    telephone: '',
    email: '',
    location: ''
  });

  const [educationInfo, setEducationInfo] = useState({
    school_name: '',
    degree_type: '',
    graduation_range: '',
    gpa: '',
    relevent_coursework: ''
  });

  const [workExperienceInfo, setWorkExperienceInfo] = useState({
    position: '',
    company: '',
    work_range: '',
    location: '',
    description: ''
  });

  const [professionalSummary, setProfessionalSummary] = useState('');
  const [skills, setSkills] = useState({
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: ''
  });

  const [interestsAndCertifications, setInterestsAndCertifications] = useState({
    interests: '',
    certifications: ''
  });

  const handleGeneralSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationInfo(data);
  };

  const handleWorkExperienceSubmit = (data) => {
    setWorkExperienceInfo(data);
  };

  const handleProfessionalSummarySubmit = (summary) => {
    setProfessionalSummary(summary);
  };

  const handleSkillsSubmit = (data) => {
    setSkills(data);
  };

  const handleInterestsAndCertificationsSubmit = (data) => {
    setInterestsAndCertifications(data);
  };

  return (
    <div className="app-container">
      <div className="main-app">
        <EditingSide 
          onGeneralSubmit={handleGeneralSubmit} 
          onEducationSubmit={handleEducationSubmit} 
          onWorkExperienceSubmit={handleWorkExperienceSubmit} 
          onProfessionalSummarySubmit={handleProfessionalSummarySubmit}
          onSkillsSubmit={handleSkillsSubmit}
          onInterestsAndCertificationsSubmit={handleInterestsAndCertificationsSubmit}
        />
        <ResumeSide 
          generalInfo={generalInfo} 
          educationInfo={educationInfo} 
          workExperienceInfo={workExperienceInfo} 
          professionalSummary={professionalSummary}
          skills={skills}
          interestsAndCertifications={interestsAndCertifications}
        />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;

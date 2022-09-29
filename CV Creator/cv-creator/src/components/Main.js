import React, { useState } from "react";
import MainForm from "./MainForm";
import CV from "./CV";

export default function Main() {
  const exampleCV = {
    personalInfo: {
      firstName: "",
      lastName: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
      description: "",
    },
    educationInfo: {
      universityName: "",
      educationLocation: "",
      degree: "",
      subject: "",
      educationStartDate: "",
      educationEndDate: "",
    },
    experienceInfo: {
      position: "",
      company: "",
      experienceLocation: "",
      experienceStartDate: "",
      experienceEndDate: "",
    },
  };
  const [cv, setCv] = useState(exampleCV);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeEducation = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      educationInfo: {
        ...prevState.educationInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e) => {
    const { name, value } = e.target;

    setCv((prevState) => ({
      ...prevState,
      experienceInfo: {
        ...prevState.experienceInfo,
        [name]: value,
      },
    }));
  };

  return (
    <div className="container">
      <div className="form-container">
        <MainForm
          cv={cv}
          onChangePersonal={handleChangePersonal}
          onChangeEducation={handleChangeEducation}
          onChangeExperience={handleChangeExperience}
        />
      </div>
      <div className="cv-container">
        <CV cv={cv} />
      </div>
    </div>
  );
}

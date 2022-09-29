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
      location: "",
      degree: "",
      subject: "",
      startDate: "",
      endDate: "",
    },
  };
  const [cv, setCv] = useState(exampleCV);

  const handleChangePersonal = (e) => {
    const { name, value, type } = e.target;

    setCv((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeEducation = (e) => {
    const { name, value, type } = e.target;

    setCv((prevState) => ({
      ...prevState,
      educationInfo: {
        ...prevState.educationInfo,
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
        />
      </div>
      <div className="cv-container">
        <CV cv={cv} />
      </div>
    </div>
  );
}

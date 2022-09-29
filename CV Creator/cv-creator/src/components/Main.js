import React, { useState, useRef } from "react";
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
  const componentRef = useRef();

  return (
    <div className="container">
      <div className="form-container">
        <MainForm cv={cv} onChangePersonal={handleChangePersonal} />
      </div>
      <div className="cv-container">
        <CV cv={cv} ref={componentRef} />
      </div>
    </div>
  );
}

import React from "react";

import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import Button from "./ActionButtons";

export default function MainForm({
  cv,
  onChangePersonal,
  onChangeEducation,
  onChangeExperience,
}) {
  // console.log({ cv });
  return (
    <form className="form-subcontainer">
      <PersonalForm
        personalInfo={cv.personalInfo}
        onChange={onChangePersonal}
      />
      <EducationForm
        educationInfo={cv.educationInfo}
        onChange={onChangeEducation}
      />
      <ExperienceForm
        experienceInfo={cv.experienceInfo}
        onChange={onChangeExperience}
      />
      <div className="general-btns">
        <Button className="form-generate-btn" content="Generate PDF" />
        <Button className="form-reset-btn" content="Reset" />
      </div>
    </form>
  );
}

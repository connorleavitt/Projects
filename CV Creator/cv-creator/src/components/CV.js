import Section from "./Section";

export default function CV({ cv }) {
  // const personalInfo = {
  //   ...cv,
  //   firstName: "",
  //   lastName: "",
  // };

  return (
    <div className="cv-subcontainer">
      <Section {...{ type: "header" }} personalInfo={cv.personalInfo} />
      <Section
        {...{ type: "main" }}
        personalInfo={cv.personalInfo}
        educationInfo={cv.educationInfo}
        experienceInfo={cv.experienceInfo}
      />
      <Section {...{ type: "personal" }} personalInfo={cv.personalInfo} />
    </div>
  );
}

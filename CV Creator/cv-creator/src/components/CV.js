import Section from "./Section";

export default function CV({ cv, componentRef }) {
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
      />
      <Section {...{ type: "personal" }} personalInfo={cv.personalInfo} />
    </div>
  );
}

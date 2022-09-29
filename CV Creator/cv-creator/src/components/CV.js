import Section from "./Section";

export default function CV({ cv, componentRef }) {
  const personalInfo = {
    ...cv,
    firstName: "",
  };
  console.log(personalInfo.firstName);
  return (
    <div className="cv-subcontainer">
      <Section {...{ type: "header" }} />
      <Section {...{ type: "main" }} />
      <Section {...{ type: "personal" }} personalInfo={cv.personalInfo} />
    </div>
  );
}

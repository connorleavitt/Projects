import Subsection from "./Subsection";

export default function Section({
  type,
  personalInfo,
  educationInfo,
  experienceInfo,
}) {
  const className = `cv-subcontainer--${type}`;
  const personalInfoObject = { ...personalInfo };
  const firstName = personalInfoObject.firstName;
  const lastName = personalInfoObject.lastName;
  const title = personalInfoObject.title;

  if (type === "main") {
    return (
      <div className={className}>
        <Subsection {...{ type: "description" }} personalInfo={personalInfo} />
        <Subsection {...{ type: "education" }} educationInfo={educationInfo} />
        <Subsection
          {...{ type: "experience" }}
          experienceInfo={experienceInfo}
        />
      </div>
    );
  }
  if (type === "personal") {
    return (
      <div className={className}>
        <Subsection {...{ type: "personal" }} personalInfo={personalInfo} />
      </div>
    );
  }
  return (
    <div className={className}>
      {title}. {firstName} {lastName}
    </div>
  );
}

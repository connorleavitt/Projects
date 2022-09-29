import Subsection from "./Subsection";

export default function Section({ type, personalInfo }) {
  const className = `cv-subcontainer--${type}`;

  if (type === "main") {
    return (
      <div className={className}>
        <Subsection {...{ type: "description" }} />
        <Subsection {...{ type: "education" }} />
        <Subsection {...{ type: "experience" }} />
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
  return <div className={className}></div>;
}

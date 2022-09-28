import Section from "./Section";

export default function CV() {
  return (
    <div className="cv-subcontainer">
      <Section {...{ type: "header" }} />
      <Section {...{ type: "main" }} />
      <Section {...{ type: "personal" }} />
    </div>
  );
}

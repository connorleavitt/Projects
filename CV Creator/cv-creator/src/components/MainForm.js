import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import Button from "./ActionButtons";

export default function MainForm() {
  return (
    <form className="form-subcontainer">
      <PersonalForm {...{ header: "Personal Information" }} />
      <EducationForm {...{ header: "Education" }} />
      <ExperienceForm {...{ header: "Experience" }} />
      <Button className="form-generate-btn" content="Generate PDF" />
      <Button className="form-reset-btn" content="Reset" />
    </form>
  );
}

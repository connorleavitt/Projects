import Input from "./Input";
import Button from "./ActionButtons";

export default function ExperienceForm() {
  return (
    <div className="form-subcontainer--section">
      <h2 className="form-title">Experience</h2>
      <Input type={"text"} placeholder={"Position"} />
      <Input type={"text"} placeholder={"Company"} />
      <Input type={"text"} placeholder={"Location"} />
      <Input type={"date"} placeholder={"From"} />
      <Input type={"date"} placeholder={"To"} />
      <Button className="form-delete-btn" content="Delete" />
      <Button className="form-add-btn" content="Add" />
    </div>
  );
}

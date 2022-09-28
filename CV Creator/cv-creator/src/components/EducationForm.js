import Input from "./Input";
import Button from "./ActionButtons";

export default function EducationForm({ header }) {
  return (
    <div className="form-subcontainer--section">
      <h2 className="form-title">{header}</h2>
      <Input type={"text"} placeholder={"University"} />
      <Input type={"text"} placeholder={"Location"} />
      <Input type={"text"} placeholder={"Degree"} />
      <Input type={"text"} placeholder={"Subject"} />
      <Input type={"date"} placeholder={"From"} />
      <Input type={"date"} placeholder={"To"} />
      <Button className="form-delete-btn" content="Delete" />
      <Button className="form-add-btn" content="Add" />
    </div>
  );
}

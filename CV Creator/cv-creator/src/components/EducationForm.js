import Input from "./Input";
import Button from "./ActionButtons";

export default function EducationItem({ onChange, educationInfo }) {
  return (
    <div className="form-subcontainer--section">
      <h2 className="form-title">Education</h2>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="universityName"
        placeholder="University Name"
        value={educationInfo.universityName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="educationLocation"
        placeholder="City, State"
        value={educationInfo.educationLocation}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationInfo.degree}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="subject"
        placeholder="Subject"
        value={educationInfo.subject}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="educationStartDate"
        placeholder="Start Date"
        value={educationInfo.educationStartDate}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="educationEndDate"
        placeholder="End Date"
        value={educationInfo.educationEndDate}
      />
      <div className="form-btn-update">
        <Button className="form-add-btn" content="Add" />
        <Button className="form-delete-btn" content="Delete" />
      </div>
    </div>
  );
}

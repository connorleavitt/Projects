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
        name="location"
        placeholder="City, State"
        value={educationInfo.locationName}
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
        name="startDate"
        value={educationInfo.startDate}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="endDate"
        value={educationInfo.endDate}
      />
      <Button className="form-delete-btn" content="Delete" />
      <Button className="form-add-btn" content="Add" />
    </div>
  );
}

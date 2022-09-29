import Input from "./Input";
import Button from "./ActionButtons";

export default function ExperienceForm({ onChange, experienceInfo }) {
  return (
    <div className="form-subcontainer--section">
      <h2 className="form-title">Experience</h2>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="position"
        placeholder="Position"
        value={experienceInfo.position}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="company"
        placeholder="Company"
        value={experienceInfo.company}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="experienceLocation"
        placeholder="City, State"
        value={experienceInfo.experienceLocation}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="experienceStartDate"
        placeholder="Start Date"
        value={experienceInfo.experienceStartDate}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="experienceEndDate"
        placeholder="End Date"
        value={experienceInfo.experienceEndDate}
      />
      <div className="form-btn-update">
        <Button className="form-add-btn" content="Add" />
        <Button className="form-delete-btn" content="Delete" />
      </div>
    </div>
  );
}

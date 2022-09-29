import Input from "./Input";
import Button from "./ActionButtons";
import { useState } from "react";

export default function EducationItem() {
  const [details, setDetails] = useState({
    universityName: "",
    locationName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="form-subcontainer--section">
      <h2 className="form-title">Education</h2>
      <Input
        onChange={handleChange}
        type="text"
        name="universityName"
        placeholder="University name"
        // value={educationItem.universityName}
      />
      <Input
        onChange={handleChange}
        type="text"
        name="locationName"
        placeholder="Location"
        // value={educationItem.locationName}
      />
      <Input type={"text"} placeholder={"Degree"} />
      <Input type={"text"} placeholder={"Subject"} />
      <Input type={"date"} placeholder={"From"} />
      <Input type={"date"} placeholder={"To"} />
      <Button className="form-delete-btn" content="Delete" />
      <Button className="form-add-btn" content="Add" />
    </div>
  );
}

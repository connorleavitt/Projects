import Textarea from "./Textarea";
import Input from "./Input";

export default function PersonalForm({ blank }) {
  return (
    <div className="form-subcontainer--section">
      <h2 className="form-title">Personal Information</h2>
      <Input type={"text"} placeholder={"First Name"} />
      <Input type={"text"} placeholder={"Last Name"} />
      <Input type={"text"} placeholder={"Title"} />
      <Input type={"text"} placeholder={"Address"} />
      <Input type={"tel"} placeholder={"Phone Number"} />
      <Input type={"text"} placeholder={"Email"} />
      <Textarea placeholder={"Description"} />
    </div>
  );
}

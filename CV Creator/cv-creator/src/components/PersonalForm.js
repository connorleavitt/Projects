import React from "react";

import Textarea from "./Textarea";
import Input from "./Input";

export default function PersonalForm({ personalInfo, onChange }) {
  return (
    <div className="form-subcontainer--section">
      <h2 className="form-title">Personal Information</h2>
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="firstName"
        placeholder="First name"
        value={personalInfo.firstName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={personalInfo.lastName}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="title"
        placeholder="Title"
        value={personalInfo.title}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="Address"
        value={personalInfo.address}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={personalInfo.phone}
      />
      <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
      />
      <Textarea
        onChange={(e) => onChange(e)}
        name="description"
        placeholder="Description"
        value={personalInfo.description}
      />
    </div>
  );
}

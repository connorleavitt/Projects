export default function Subsection({ type, personalInfo, educationInfo }) {
  const mainClassName = `cv-subcontainer-section--${type}`;
  const titleClassName = `cv-subcontainer-section--${type}-title`;
  const contentClassName = `cv-subcontainer-section--${type}-content`;

  const personalInfoObject = { ...personalInfo };
  const title = personalInfoObject.title;
  const address = personalInfoObject.address;
  const phone = personalInfoObject.phone;
  const email = personalInfoObject.email;
  const description = personalInfoObject.description;

  const educationInfoObject = { ...educationInfo };
  const universityName = educationInfoObject.universityName;
  const location = educationInfoObject.location;
  const degree = educationInfoObject.degree;
  const subject = educationInfoObject.subject;
  const startDate = educationInfoObject.startDate;
  const endDate = educationInfoObject.endDate;

  if (type === "description") {
    return (
      <div className={mainClassName}>
        <h2 className={titleClassName}>Description</h2>
        <div className={contentClassName}>{description}</div>
      </div>
    );
  }

  if (type === "education") {
    return (
      <div className={mainClassName}>
        <h2 className={titleClassName}>Education</h2>
        <div className={contentClassName}>
          <div className="education-university">{universityName}</div>
          <div className="education-location">{location}</div>
          <div className="education-degree">
            {degree}, {subject}
          </div>
          <div className="education-date">
            {startDate} - {endDate}
          </div>
        </div>
      </div>
    );
  }

  if (type === "experience") {
    return (
      <div className={mainClassName}>
        <h2 className={titleClassName}>Experience</h2>
        <div className={contentClassName}>
          {/* <div>position:</div>
          <div>company:</div>
          <div>Location</div>
          <div>From:</div>
          <div>To:</div> */}
        </div>
      </div>
    );
  }

  if (type === "personal") {
    return (
      <div className={mainClassName}>
        <h2 className={titleClassName}>Personal</h2>
        <div className={contentClassName}>
          <div>Title: {title}</div>
          <div>Address: {address}</div>
          <div>Phone: {phone}</div>
          <div>Email: {email}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={mainClassName}>
      <h2 className={titleClassName}>{type}</h2>
      <div className={contentClassName}></div>
    </div>
  );
}

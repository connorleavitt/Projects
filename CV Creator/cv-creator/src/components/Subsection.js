export default function Subsection({
  type,
  personalInfo,
  educationInfo,
  experienceInfo,
}) {
  const mainClassName = `cv-subcontainer-section--${type}`;
  const titleClassName = `cv-subcontainer-section--${type}-title`;
  const contentClassName = `cv-subcontainer-section--${type}-content`;

  const personalInfoObject = { ...personalInfo };
  const address = personalInfoObject.address;
  const phone = personalInfoObject.phone;
  const email = personalInfoObject.email;
  const description = personalInfoObject.description;

  const educationInfoObject = { ...educationInfo };
  const universityName = educationInfoObject.universityName;
  const educationLocation = educationInfoObject.educationLocation;
  const degree = educationInfoObject.degree;
  const subject = educationInfoObject.subject;
  const educationStartDate = educationInfoObject.educationStartDate;
  const educationEndDate = educationInfoObject.educationEndDate;

  const experienceInfoObject = { ...experienceInfo };
  const position = experienceInfoObject.position;
  const company = experienceInfoObject.company;
  const experienceLocation = experienceInfoObject.experienceLocation;
  const experienceStartDate = experienceInfoObject.experienceStartDate;
  const experienceEndDate = experienceInfoObject.experienceEndDate;

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
          <div className="education-location">{educationLocation}</div>
          <div className="education-degree">
            {degree}, {subject}
          </div>
          <div className="education-date">
            {educationStartDate} - {educationEndDate}
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
          <div className="experience-information">
            {position} at {company}
          </div>
          <div className="experience-location">{experienceLocation}</div>
          <div className="experience-date">
            {experienceStartDate} - {experienceEndDate}
          </div>
        </div>
      </div>
    );
  }

  if (type === "personal") {
    return (
      <div className={mainClassName}>
        <h2 className={titleClassName}>Personal</h2>
        <div className={contentClassName}>
          <div className="personal-address">
            <h3>Address</h3>
            {address}
          </div>
          <div className="personal-phone">
            <h3>Phone Number</h3>
            {phone}
          </div>
          <div className="personal-email">
            <h3>Email Address</h3>
            {email}
          </div>
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

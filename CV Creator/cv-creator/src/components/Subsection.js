export default function Subsection({ type, personalInfo }) {
  const mainClassName = `cv-subcontainer-section--${type}`;
  const titleClassName = `cv-subcontainer-section--${type}-title`;
  const contentClassName = `cv-subcontainer-section--${type}-content`;

  const personalInfoObject = { ...personalInfo };
  const title = personalInfoObject.title;
  const address = personalInfoObject.address;
  const phone = personalInfoObject.phone;
  const email = personalInfoObject.email;
  const description = personalInfoObject.description;

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
          {/* <div>University:</div>
          <div>Location:</div>
          <div>degree+subject</div>
          <div>From:</div>
          <div>To:</div> */}
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

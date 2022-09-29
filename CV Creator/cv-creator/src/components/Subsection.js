export default function Subsection({ type, personalInfo }) {
  const mainClassName = `cv-subcontainer-section--${type}`;
  const titleClassName = `cv-subcontainer-section--${type}-title`;
  const contentClassName = `cv-subcontainer-section--${type}-content`;

  const obj = { ...personalInfo };
  const firstName = obj.firstName;
  console.log(firstName);

  if (type === "description") {
    return (
      <div className={mainClassName}>
        <h2 className={titleClassName}>{type}</h2>
        <div className={contentClassName}></div>
      </div>
    );
  }

  if (type === "education") {
    return (
      <div className={mainClassName}>
        <h2 className={titleClassName}>{type}</h2>
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
        <h2 className={titleClassName}>{type}</h2>
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
        <h2 className={titleClassName}>{type}</h2>
        <div className={contentClassName}>
          <div>Title: {firstName}</div>
          <div>address:</div>
          <div>phone</div>
          <div>email:</div>
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

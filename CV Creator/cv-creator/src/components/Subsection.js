export default function Subsection({ type }) {
  const mainClassName = `cv-subcontainer-section--${type}`;
  const titleClassName = `cv-subcontainer-section--${type}-title`;
  const contentClassName = `cv-subcontainer-section--${type}-content`;

  if (type === "description") {
    return (
      <div className={mainClassName}>
        <h2 className={titleClassName}>{type}</h2>
        <div className={contentClassName}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          dicta nobis excepturi asperiores corporis vel molestias porro autem
          error eum ad facere et ex fuga rerum quibusdam itaque commodi quam.
        </div>
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
          {/* <div>Title:</div>
          <div>address:</div>
          <div>phone</div>
          <div>email:</div> */}
        </div>
      </div>
    );
  }

  return (
    <div className={mainClassName}>
      <h2 className={titleClassName}>{type}</h2>
      <div className={contentClassName}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
        dicta nobis excepturi asperiores corporis vel molestias porro autem
        error eum ad facere et ex fuga rerum quibusdam itaque commodi quam.
      </div>
    </div>
  );
}

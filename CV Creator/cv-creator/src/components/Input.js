// import UpdateCV from "./UpdateCV";

export default function Input({ type, name, placeholder, onChange, value }) {
  // if ({ required }) {
  //   console.log("required");
  //   return (
  //     <input
  //       // onChange={UpdateCV}
  //       className="form-input"
  //       type={type}
  //       placeholder={placeholder}
  //       required
  //     />
  //   );
  // }

  return (
    <input
      className="form-input"
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
    />
  );
}

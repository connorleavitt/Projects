// import UpdateCV from "./UpdateCV";

export default function Input({ type, placeholder }) {
  return (
    <input
      // onChange={UpdateCV}
      className="form-input"
      type={type}
      placeholder={placeholder}
    />
  );
}

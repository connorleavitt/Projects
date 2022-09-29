export default function Textarea({ name, placeholder, onChange, value }) {
  return (
    <textarea
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
      className="form-textarea"
    />
  );
}

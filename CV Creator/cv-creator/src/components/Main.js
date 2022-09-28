import MainForm from "./MainForm";
import CV from "./CV";

export default function Main() {
  return (
    <div className="container">
      <div className="form-container">
        <MainForm />
      </div>
      <div className="cv-container">
        <CV />
      </div>
    </div>
  );
}

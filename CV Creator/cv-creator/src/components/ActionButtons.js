export default function ActionButton({ className, content }) {
  const reload = (e) => {
    e.preventDefault();
    console.log("button clicked", e);
  };

  if (content === "Reset") {
    return (
      <button onClick={reload} className={className}>
        {content}
      </button>
    );
  }
  return <button className={className}>{content}</button>;
}

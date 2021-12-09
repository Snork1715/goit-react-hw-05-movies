import "./PageHeading.css";

export default function PageHeading({ text }) {
  return (
    <div className="page-heading">
      <h2>{text}</h2>
    </div>
  );
}

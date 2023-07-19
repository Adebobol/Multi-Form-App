export default function Step({ num, description, className }) {
  return (
    <div className="step">
      <div className={`step-number ${className}`}>{num}</div>
      <div>
        <h3>Step{num}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function UpAddOn({ ad, toggleSwitch }) {
  return (
    <div className="summary-addOn">
      <p>{ad.addOnName}</p>
      <p>
        {`+${ad.addOnPrice}/`}
        {toggleSwitch ? "yr" : "mo"}
      </p>
    </div>
  );
}

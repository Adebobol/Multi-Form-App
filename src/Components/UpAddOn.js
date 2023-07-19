export default function UpAddOn({ addOnName, addOnPrice }) {
  return (
    <div className="summary-addOn">
      <p>{addOnName}</p>
      <p>{addOnPrice}</p>
    </div>
  );
}

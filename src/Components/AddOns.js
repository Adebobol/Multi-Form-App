export default function AddOns({ addOnName, addOnPrice, addOnSummary }) {
  return (
    <div className="addOn">
      <div className="addOn-inner">
        <input type="checkbox" />
        <div>
          <h3>{addOnName}</h3>
          <p>{addOnSummary}</p>
        </div>
      </div>
      <p>{addOnPrice}</p>
    </div>
  );
}

export default function AddOns({
  addOnName,
  addOnPrice,
  summary,
  checked,
  tick,
  handleSummary,
  toggleSwitch,
}) {
  function createSummary() {
    tick(!checked);
    const newSummary = { addOnName, addOnPrice };
    handleSummary(newSummary);
    console.log(addOnPrice);
  }

  return (
    <div
      className="addOn"
      style={checked ? { backgroundColor: "hsl(228, 100%, 84%)" } : {}}
    >
      <div className="addOn-inner">
        <input type="checkbox" checked={checked} onChange={createSummary} />

        <div>
          <h3>{addOnName}</h3>
          <p>{summary}</p>
        </div>
      </div>
      <p>
        {`+${addOnPrice}/`}
        {toggleSwitch ? "yr" : "mo"}
      </p>
    </div>
  );
}

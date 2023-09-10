import UpAddOn from "./UpAddOn";

export default function Up({
  summaryName,
  toggleSwitch,
  setTogggleSwitch,
  addOnSummary,
  summaryPrice,
}) {
  return (
    <div className="summary">
      <div className="summary-title">
        <div>
          <h3>
            {summaryName}({toggleSwitch ? "Yearly" : "Monthly"})
          </h3>
          <p>Change</p>
        </div>
        <p>
          {`+${summaryPrice}/`}
          {toggleSwitch ? "yr" : "mo"}
        </p>
      </div>
      <hr />
      <div>
        {addOnSummary.map((ad) => (
          <UpAddOn ad={ad} toggleSwitch={toggleSwitch} />
        ))}
      </div>
    </div>
  );
}

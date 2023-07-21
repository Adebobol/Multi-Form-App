import UpAddOn from "./UpAddOn";

export default function Up({ summaryName,toggleSwitch, setTogggleSwitch }) {
  return (
    <div className="summary">
      <div className="summary-title">
        <div>
          <h3>{summaryName}({toggleSwitch ? "Monthly" : "Yearly"})</h3>
          <p>Change</p>
        </div>
        <p>$9/mo</p>
      </div>
      <hr />
      <UpAddOn addOnName="Online service" addOnPrice="+$1/mo" />
      <UpAddOn addOnName="Larger storage" addOnPrice="+$2/mo" />
    </div>
  );
}

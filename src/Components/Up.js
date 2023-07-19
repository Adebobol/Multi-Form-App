import UpAddOn from "./UpAddOn";

export default function Up() {
  return (
    <div className="summary">
      <div className="summary-title">
        <div>
          <h2>X(Y)</h2>
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

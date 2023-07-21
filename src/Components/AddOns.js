import { useState } from "react";
export default function AddOns({
  addOnName,
  addOnPrice,
  addOnSummary
}) {
  const [addOn, setAddOn] = useState(false);
  return (
    <div
      className="addOn"
      style={addOn ? { backgroundColor: "hsl(228, 100%, 84%)" } : {}}
    >
      <div className="addOn-inner">
        <input type="checkbox" onChange={()=>setAddOn()} />
        <div>
          <h3>{addOnName}</h3>
          <p>{addOnSummary}</p>
        </div>
      </div>
      <p>{addOnPrice}</p>
    </div>
  );
}

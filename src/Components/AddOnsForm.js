import Heading from "./Heading";
import AddOns from "./AddOns";

export default function AddOnsForm() {
  return (
    <div>
      <Heading
        first="Pick add-ons"
        second="Add-ons help enhance your gaming experience."
      />
      <div className="addOn-list">
        <AddOns
          addOnName="Online service"
          addOnPrice="+$1/mo"
          addOnSummary="Access to multiplayer games."
        />
        <AddOns
          addOnName="Larger storage"
          addOnPrice="+$2/mo"
          addOnSummary="Extra 1TB of cloud save."
        />
        <AddOns
          addOnName="Customizable profile"
          addOnPrice="+$2/mo"
          addOnSummary="Custom theme on your profile."
        />
      </div>
    </div>
  );
}

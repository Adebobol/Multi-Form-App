import Heading from "./Heading";
import AddOns from "./AddOns";

export default function AddOnsForm({
  setAddOnSummary,
  onlineChecked,
  checkOnline,
  storageChecked,
  checkStorage,
  profileChecked,
  checkProfile,
  handleSummary,
  toggleSwitch,
}) {
  return (
    <div>
      <Heading
        first="Pick add-ons"
        second="Add-ons help enhance your gaming experience."
      />
      <div className="addOn-list">
        <AddOns
          addOnName="Online service"
          addOnPrice={1}
          summary="Access to multiplayer games."
          setAddOnSummary={setAddOnSummary}
          checked={onlineChecked}
          tick={checkOnline}
          handleSummary={handleSummary}
          toggleSwitch={toggleSwitch}
        />
        <AddOns
          addOnName="Larger storage"
          addOnPrice={2}
          summary="Extra 1TB of cloud save."
          setAddOnSummary={setAddOnSummary}
          checked={storageChecked}
          tick={checkStorage}
          handleSummary={handleSummary}
          toggleSwitch={toggleSwitch}
        />
        <AddOns
          addOnName="Customizable profile"
          addOnPrice={2}
          summary="Custom theme on your profile."
          setAddOnSummary={setAddOnSummary}
          checked={profileChecked}
          tick={checkProfile}
          handleSummary={handleSummary}
          toggleSwitch={toggleSwitch}
        />
      </div>
    </div>
  );
}

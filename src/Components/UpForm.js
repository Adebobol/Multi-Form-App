import Heading from "./Heading";
import Up from "./Up";
import UpTotal from "./UpTotal";

export default function UpForm({
  summaryName,
  summaryPrice,
  toggleSwitch,
  setToggleSwitch,
  addOnSummary,
  onSwitch
}) {
  return (
    <div>
      <Heading
        first="Finishing up"
        second="Double check everything looks OK before confirming."
      />
      <Up
        summaryName={summaryName}
        summaryPrice={summaryPrice}
        toggleSwitch={toggleSwitch}
        setToggleSwitch={setToggleSwitch}
        addOnSummary={addOnSummary}
        onSwitch={onSwitch}
      />
      <UpTotal summaryPrice={summaryPrice} addOnSummary={addOnSummary} toggleSwitch={toggleSwitch} />
    </div>
  );
}

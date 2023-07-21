import Heading from "./Heading";
import Up from "./Up";
import UpTotal from "./UpTotal";

export default function UpForm({ summaryName, toggleSwitch, setToggleSwitch }) {
  return (
    <div>
      <Heading
        first="Finishing up"
        second="Double check everything looks OK before confirming."
      />
      <Up summaryName={summaryName} toggleSwitch={toggleSwitch} setToggleSwitch={setToggleSwitch} />
      <UpTotal />
    </div>
  );
}

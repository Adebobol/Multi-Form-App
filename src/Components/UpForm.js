import Heading from "./Heading";
import Up from "./Up";
import UpTotal from "./UpTotal";

export default function UpForm() {
  return (
    <div>
      <Heading
        first="Finishing up"
        second="Double check everything looks OK before confirming."
      />
      <Up />
      <UpTotal />
    </div>
  );
}

import Heading from "./Heading";
import Plan from "./Plan";
import SwitchPlan from "./SwitchPlan";

export default function PlanForm({ onSwitch, onSetSwitch }) {
  return (
    <div>
      <Heading
        first="Arcade"
        second="You have the option of monthly or yearly bill."
      />
      <div className="package-list">
        <Plan
          image="./assets/images/icon-arcade.svg"
          packageName="Arcade"
          packagePrice="$9/mo"
          freePackage="2 months free"
          onSwitch={onSwitch}
        />
        <Plan
          image="./assets/images/icon-advanced.svg"
          packageName="Advanced"
          packagePrice="$12/mo"
          freePackage="2 months free"
          onSwitch={onSwitch}
        />
        <Plan
          image="./assets/images/icon-pro.svg"
          packageName="Pro"
          packagePrice="$15/mo"
          freePackage="2 months free"
          onSwitch={onSwitch}
        />
      </div>
      <SwitchPlan onSetSwitch={onSetSwitch} />
    </div>
  );
}

import Heading from "./Heading";
import Plan from "./Plan";
import SwitchPlan from "./SwitchPlan";

export default function PlanForm({
  onSwitch,
  onChang,
  onSetSwitch,
  plan,
  setPlan,
}) {
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
          packagePrice="$9/"
          freePackage="2 months free"
          onSwitch={onSwitch}
          num={0}
          plan={plan}
          setPlan={setPlan}
          onChang={onChang}
        />
        <Plan
          image="./assets/images/icon-advanced.svg"
          packageName="Advanced"
          packagePrice="$12/"
          freePackage="2 months free"
          onSwitch={onSwitch}
          num={1}
          plan={plan}
          setPlan={setPlan}
          onChang={onChang}
        />
        <Plan
          image="./assets/images/icon-pro.svg"
          packageName="Pro"
          packagePrice="$15/"
          freePackage="2 months free"
          onSwitch={onSwitch}
          num={2}
          plan={plan}
          setPlan={setPlan}
          onChang={onChang}
        />
      </div>
      <SwitchPlan onSetSwitch={onSetSwitch} />
    </div>
  );
}

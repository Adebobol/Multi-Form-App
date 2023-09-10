export default function SwitchPlan({ onSetSwitch, onSwitch }) {
  return (
    <div className="my-switch">
      <h3>Monthly</h3>

      <label className="switch">
        <input
          className="sli"
          checked={onSwitch}
          type="checkbox"
          onChange={(e) => onSetSwitch(!onSwitch)}
        />
        <span className="slider round"></span>
      </label>
      <h3>yearly</h3>
    </div>
  );
}

export default function SwitchPlan({ onSetSwitch }) {
  return (
    <div className="my-switch">
      <h3>Monthly</h3>
      <label className="switch">
        <input
          className="sli"
          type="checkbox"
          onClick={() => onSetSwitch((sitch)=>!sitch)}
        />
        <span className="slider round"></span>
      </label>
      <h3>yearly</h3>
    </div>
  );
}

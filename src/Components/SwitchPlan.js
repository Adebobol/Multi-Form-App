export default function SwitchPlan({ onSetSwitch }) {
  function swi() {
    // e.preventDefault()
    onSetSwitch((sitch) => !sitch);
  }
  return (
    <div className="my-switch">
      {/* // <div> */}
      <h3>Monthly</h3>

      <label className="switch">
        <input className="sli" type="checkbox" onChange={() => swi()} />
        <span className="slider round"></span>
      </label>
      <h3>yearly</h3>
    </div>
  );
}

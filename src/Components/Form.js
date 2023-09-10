export default function Form({
  key,
  name,
  labelName,
  inputType,
  inputPlaceholder,
  send,
}) {
  return (
    <div className="form">
      <label>{labelName}</label>
      <input
        type={inputType}
        value={name}
        placeholder={inputPlaceholder}
        onChange={(e) => send(e.target.value)}
      />
    </div>
  );
}

export default function Form({labelName, inputType, inputPlaceholder}) {
  return (
    <div className="form">
      <label>{labelName}</label>
      <input type={inputType} placeholder={inputPlaceholder} />
    </div>
  );
}

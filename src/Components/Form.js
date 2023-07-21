

export default function Form({ name,labelName, inputType, inputPlaceholder }) {
  return (
    <div className="form">
      <label>{labelName}</label>
      <input
        type={inputType}
        value={name}
        placeholder={inputPlaceholder}
        onChange={(e) => e.target.value}
      />
    </div>
  );
}

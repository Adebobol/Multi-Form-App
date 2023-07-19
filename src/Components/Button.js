export default function Button({ buttonName, onNext, onPrevious, className }) {
  return (
    <button
      className={`button ${className}`}
      onClick={buttonName === "Next step" ? onNext : onPrevious}
    >
      {buttonName}
    </button>
  );
}

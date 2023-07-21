export default function Button({ buttonName, onNext, onPrevious, className }) {

  return (
    <button
      className={`button ${className}`} 
      onClick={buttonName === "Next step" ? (e)=>onNext(e) : (e)=>onPrevious(e)}
    >
      {buttonName}
    </button>
  );
}

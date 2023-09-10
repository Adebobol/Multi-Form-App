export default function UpTotal({ addOnSummary, summaryPrice, toggleSwitch }) {
  const totalSum = addOnSummary.reduce(function (acc, cur) {
    return acc + cur.addOnPrice;
  }, 0);

  return (
    <div className="summary-total">
      <p>Total(per month)</p>
      <h3>
        {`+${totalSum + summaryPrice}/`}
        {toggleSwitch ? "yr" : "mo"}
      </h3>
    </div>
  );
}

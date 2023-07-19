export default function Plan({
  image,
  packageName,
  packagePrice,
  freePackage,
  onSwitch,
}) {
  return (
    <div className="package">
      <img className="img-plan" src={image} alt=""></img>
      <div>
        <h3>{packageName}</h3>
        <p>{packagePrice}</p>
        {onSwitch ?<p>{freePackage}</p>:''}
      </div>
    </div>
  );
}

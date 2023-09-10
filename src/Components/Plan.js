// import { useState } from "react";

export default function Plan({
  image,
  packageName,
  packagePrice,
  freePackage,
  onSwitch,
  num,
  plan,
  onChang,
}) {
  const isPlan = plan === num;
  return (
    <div
      className={`package ${isPlan ? "selected-package" : "selected-package2"}`}
      onClick={() => onChang(num, packageName, packagePrice)}
    >
      <img className="img-plan" src={image} alt=""></img>
      <div>
        <h3>{packageName}</h3>
        <p>
          {`+${packagePrice}/`}
          {onSwitch ? "yr" : "mo"}
        </p>
        {onSwitch ? <p>{freePackage}</p> : ""}
      </div>
    </div>
  );
}

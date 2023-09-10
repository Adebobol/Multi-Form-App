import Step from "./Components/Step";
import InfoForm from "./Components/InfoForm";
import Button from "./Components/Button";
// import Plan from "./Components/Plan";
import { useState } from "react";
import PlanForm from "./Components/PlanForm";
import AddOnsForm from "./Components/AddOnsForm";
import UpForm from "./Components/UpForm";

export default function App() {
  const [step, setStep] = useState(1);
  const [page, setPage] = useState(1);
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [plan, setPlan] = useState(0);
  const [summaryName, setSummaryName] = useState("Arcade");
  const [summaryPrice, setSummaryPrice] = useState(9)
  const [addOnSummary, setAddOnSummary] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [onlineChecked, setOnlineChecked] = useState(false);
  const [storageChecked, setStorageChecked] = useState(false);
  const [profileChecked, setProfileChecked] = useState(false);

  function checkOnline(is) {
    setOnlineChecked(is);
  }
  function checkStorage(is) {
    setStorageChecked(is);
  }
  function checkProfile(is) {
    setProfileChecked(is);
  }

  function handleSummary(newSummary) {
    setAddOnSummary((addOnSummary) => [...addOnSummary, newSummary]);
  }

  function changePlan(num, packageName,packagePrice) {
    setPlan((no) => (no === num ? 0 : num));
    console.log(plan);
    setSummaryName(packageName);
    setSummaryPrice(packagePrice)
  }

  function handleNext(e) {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
      setPage(page + 1);
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep(step - 1);
      setPage(page - 1);
    }
  }

  return (
    <div className="main">
      <div className="main-sidebar">
        <Step
          num={1}
          description="YOUR INFO"
          className={step === 1 ? "active" : ""}
        />
        <Step
          num={2}
          description="SELECT PLAN"
          className={step === 2 ? "active" : ""}
        />
        <Step
          num={3}
          description="ADD-ONS"
          className={step === 3 ? "active" : ""}
        />
        <Step
          num={4}
          description="SUMMARY"
          className={step === 4 ? "active" : ""}
        />
      </div>

      <div className="info">
        {page === 1 && (
          <InfoForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            number={number}
            setNumber={setNumber}
          />
        )}
        {page === 2 && (
          <PlanForm
            onSwitch={toggleSwitch}
            onSetSwitch={setToggleSwitch}
            plan={plan}
            setPlan={setPlan}
            onChang={changePlan}
          />
        )}
        {page === 3 && (
          <AddOnsForm
          toggleSwitch={toggleSwitch}
            setAddOnSummary={setAddOnSummary}
            onlineChecked={onlineChecked}
            checkOnline={checkOnline}
            storageChecked={storageChecked}
            checkStorage={checkStorage}
            profileChecked={profileChecked}
            checkProfile={checkProfile}
            handleSummary={handleSummary}
          />
        )}
        {page === 4 && (
          <UpForm
            toggleSwitch={toggleSwitch}
            setToggleSwitch={setToggleSwitch}
            summaryName={summaryName}
            summaryPrice={summaryPrice}
            addOnSummary={addOnSummary}
          />
        )}
        <div className="btn-footer">
          <Button
            buttonName="Go back"
            className={step > 1 ? "" : "hid"}
            onPrevious={handlePrevious}
          />
          <Button
            buttonName={step >= 4 ? "Confirm" : "Next step"}
            onNext={handleNext}
          />
          {/* <button onClick={handlePrevious}>Prev</button> */}
          {/* <button onClick={handleNext}>Next</button> */}
        </div>
      </div>
    </div>
  );
}

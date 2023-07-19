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

  function handleNext() {
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
        {page === 1 && <InfoForm />}
        {page === 2 && (
          <PlanForm onSwitch={toggleSwitch} onSetSwitch={setToggleSwitch} />
        )}
        {page === 3 && <AddOnsForm />}
        {page === 4 && <UpForm />}
        <div className="btn-footer">
          <Button
            buttonName="Previous"
            className={step > 1 ? "" : "hid"}
            onPrevious={handlePrevious}
          />
          <Button
            buttonName={step >= 4 ? "Confirm" : "Next step"}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}

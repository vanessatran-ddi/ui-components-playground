import { useEffect, useState } from "react";
import {
  GoAButton,
  GoAFormStep,
  GoAFormStepper,
  GoAFormStepStatusType,
  GoAPages,
} from "@abgov/react-components";

export function FormStepperRoute() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [step, setStep] = useState<number>(2);
  // controlled by the user based on form completion
  const [status, setStatus] = useState<GoAFormStepStatusType[]>([
    "complete",
    "complete",
    "incomplete",
    "incomplete",
  ]);
  function setPage(page: number) {
    if (page < 1 || page > 4) return;
    setStep(page);
  }
  return (
    <>
      <GoAFormStepper step={step} onChange={setStep} mobile={windowWidth < 1024}>
        <GoAFormStep text="Select department" status={status[0]} />
        <GoAFormStep text="Provide details" status={status[1]} />
        <GoAFormStep text="Attach documentation" status={status[2]} />
        <GoAFormStep text="Review and submit" status={status[3]} />
      </GoAFormStepper>
      <GoAPages current={step} mb="xl">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </GoAPages>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <GoAButton type="secondary" onClick={() => setPage(step - 1)}>
          Previous
        </GoAButton>
        <GoAButton type="primary" onClick={() => setPage(step + 1)}>
          Next
        </GoAButton>
      </div>
    </>
  );
}

import {
  GoabButton,
  GoabFormStep,
  GoabPages,
  GoabFormStepper,
} from "@abgov/react-components";
import { GoabFormStepStatus } from "@abgov/ui-components-common";
import { useState } from "react";

export const Issue2408 = () => {
  const [step, setStep] = useState<number>(-1);
// controlled by the user based on form completion
  const [status, setStatus] = useState<GoabFormStepStatus[]>([
    "complete",
    "complete",
    "incomplete",
    "not-started"
  ])
  function setPage(page: number) {
    if (page < 1 || page > 4) return;
    setStep(page);
    setStatus((prevStatus) =>
      prevStatus.map((_, index) => (index < page ? "complete" : "incomplete"))
    );
  }

  return (
    <>
      <GoabFormStepper step={step} onChange={(event) => setStep(event.step)}>
        <GoabFormStep text="Personal details" status={status[0]} />
        <GoabFormStep text="Employment history" status={status[1]} />
        <GoabFormStep text="References" status={status[2]} />
        <GoabFormStep text="Review" status={status[3]} />
      </GoabFormStepper>
      <GoabPages current={step} mb="3xl" mt="xl" mr="xl" ml="xl">
        <div>{/*Page 1 content*/}</div>
        <div>{/*Page 2 content*/}</div>
        <div>{/*Page 3 content*/}</div>
        <div>{/*Page 4 content*/}</div>
      </GoabPages>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <GoabButton type="secondary" onClick={() => setPage(step - 1)}>Previous</GoabButton>
        <GoabButton type="primary" onClick={() => setPage(step + 1)}>Next</GoabButton>
      </div>
    </>
  );
};

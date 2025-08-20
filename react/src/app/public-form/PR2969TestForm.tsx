import {
  GoabButton,
  GoabCallout,
  GoabFieldset,
  GoabFormItem,
  GoabInput,
  GoabLink,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabText,
  usePublicFormController,
} from "@abgov/react-components";
import { GoabFormState, requiredValidator } from "@abgov/ui-components-common";
import React, { useState } from "react";

type Page = "personal-info" | "review";

export const PR2969TestForm = () => {
  const [formStateDisplay, setFormStateDisplay] = useState<any>(null);
  const [completed, setCompleted] = useState(false);
  const [lastValidState, setLastValidState] = useState<any>(null);

  const {
    init,
    initState,
    validate,
    continueTo,
    complete,
  } = usePublicFormController<Page>("details");

  const emailValidator = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return null;
  };

  const onInit = (event: Event) => {
    init(event);
    setTimeout(() => {
      initState({
        uuid: crypto.randomUUID(),
        form: {},
        history: [],
        editting: "",
        status: "not-started"
      });
    }, 0)
  }

  const onContinue = (e: Event, from: Page) => {
    const detail = (e as CustomEvent).detail;
    if (detail?.cancelled) return;

    if (from === "personal-info") {
      // Validate required field
      const [isNameValid] = validate(e, "fullName", [
        requiredValidator("Full name is required."),
      ]);

      // Validate email
      const [isEmailValid] = validate(e, "email", [
        requiredValidator("Email is required."),
        emailValidator
      ]);

      if (!isNameValid || !isEmailValid) {
        console.log("Validation failed - invalid state should NOT be saved");
        return; // Do nothing - this is where invalid state should not be saved
      }

      // If validation passes, save the valid state
      setLastValidState(detail.state);
      console.log("Validation passed - saving valid state:", detail.state);
      
      continueTo("review");
    }
  }

  const onCompleteForm = (formState: GoabFormState) => {
    console.log("Complete PR2969 test form", formState);
    setCompleted(true);
    setFormStateDisplay(JSON.stringify(formState, null, 2));
  }

  return (
    <>
      <GoabText tag="h1" size="heading-xl">PR 2969 Test Form</GoabText>
      
      <GoabCallout type="information" heading="Testing Instructions" mb="xl">
        <ol>
          <li>Enter valid data (name and email) and go to summary page</li>
          <li>Click "Change" link</li>
          <li>Enter invalid data (empty name or invalid email)</li>
          <li>Click "Continue"</li>
          <li>Reload the page</li>
          <li>Verify the summary shows the original valid data, not the invalid data</li>
        </ol>
      </GoabCallout>

      {lastValidState && (
        <div style={{ margin: '20px', padding: '20px', backgroundColor: '#e8f5e9', border: '1px solid #4caf50', borderRadius: '5px' }}>
          <h3>Last Valid State Saved:</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {JSON.stringify(lastValidState, null, 2)}
          </pre>
        </div>
      )}

      {completed && (
        <div style={{ margin: '20px', padding: '20px', backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>Final Form State:</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {formStateDisplay}
          </pre>
        </div>
      )}

      <GoabPublicForm name="pr2969-test-form" onComplete={onCompleteForm} onInit={onInit}>
        <GoabPublicFormPage
          id="personal-info"
          heading="Enter Your Personal Information"
          buttonText={"Continue to review"}
          first={true}
          onContinue={(e) => onContinue(e, "personal-info")}>

          <GoabFieldset>
            <GoabFormItem label="Full Name" helpText="Enter your first and last name">
              <GoabInput name="fullName" />
            </GoabFormItem>

            <GoabFormItem label="Email Address" helpText="We'll use this to contact you">
              <GoabInput name="email" type="email" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage id="review" type="summary" heading="Review Your Information">
          <GoabPublicFormSummary />
          
          <GoabButton type="primary" onClick={() => complete()}>
            Submit Application
          </GoabButton>
        </GoabPublicFormPage>
      </GoabPublicForm>
    </>
  );
};
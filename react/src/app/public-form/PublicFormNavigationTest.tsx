import {
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabFormItem,
  GoabInput,
  GoabRadioGroup,
  GoabRadioItem,
  GoabFieldset,
  GoabCallout,
  usePublicFormController
} from "@abgov/react-components";
import { useState } from "react";
import { GoabFormState, requiredValidator } from "@abgov/ui-components-common";

type Page = "question" | "page-a" | "page-b" | "summary";

/**
 * Test for Issue 1: Missing Back Button After Form Path Change
 *
 * Reproduction Steps:
 * 1. Choose "Yes" -> fill Page A -> complete form
 * 2. From summary, change to "No"
 * 3. Verify Back button appears on Page B
 */
export const PublicFormNavigationTest = () => {
  const [formState, setFormState] = useState<GoabFormState | null>(null);
  const {
    init,
    initState,
    continueTo,
    validate,
  } = usePublicFormController<Page>("details");

  const handleFormComplete = (state: GoabFormState) => {
    console.log("Form completed with state:", state);
    setFormState(state);
  };

  const handleFormInit = (event: Event) => {
    console.log("Form initialized:", event);
    init(event);
    setTimeout(() => {
      initState({
        uuid: crypto.randomUUID(),
        form: {},
        history: [],
        editting: "",
        status: "not-started"
      });
    }, 0);
  };

  const handleFormStateChange = (state: GoabFormState) => {
    console.log("Form state changed:", state);
    setFormState(state);
  };

  const onContinue = (e: Event, from: Page) => {
    if ((e as CustomEvent).detail?.cancelled) return;

    let nextPage: Page | undefined;

    switch (from) {
      case "question":
        nextPage = validateQuestion(e);
        break;
      case "page-a":
        nextPage = "summary";
        break;
      case "page-b":
        nextPage = "summary";
        break;
      default:
        break;
    }

    if (nextPage) {
      continueTo(nextPage);
    }
  };

  const validateQuestion = (e: Event): Page | undefined => {
    console.log("validateQuestion called with event:", e);
    const [isValid] = validate(e, "needs-services", []);

    if (!isValid) {
      console.log("Validation failed, staying on current page");
      return undefined;
    }

    const needsServices = (e as CustomEvent).detail?.state?.["needs-services"];
    const value = needsServices?.value;
    console.log("Question validation - value:", value);

    if (value === "yes") {
      console.log("Navigating to page-a");
      return "page-a";
    } else if (value === "no") {
      console.log("Navigating to page-b");
      return "page-b";
    }

    console.log("No value selected, staying on current page");
    return undefined;
  };

  return (
    <div>
      <h1>Public Form Navigation Test</h1>

      <GoabCallout type="information" mb="l">
        <strong>Test Instructions:</strong>
        <ol>
          <li>Choose "Yes" and click Continue</li>
          <li>Fill out Page A and click Continue</li>
          <li>On Summary page, click Confirm to complete form</li>
          <li>From Summary, click "Change" for the Yes/No question</li>
          <li>Change to "No" and click Continue</li>
          <li><strong>Verify: Back button should appear on Page B</strong></li>
        </ol>
      </GoabCallout>

      <GoabPublicForm
        name="navigation-test-form"
        onComplete={handleFormComplete}
        onInit={handleFormInit}
        onStateChange={handleFormStateChange}
      >
        {/* Question Page - Yes/No radio */}
        <GoabPublicFormPage
          id="question"
          heading="Do you need additional services?"
          buttonText="Continue"
          onContinue={(e) => onContinue(e, "question")}
        >
          <GoabFieldset>
            <GoabFormItem name="Do you need additional services?">
              <GoabRadioGroup name="needs-services">
                <GoabRadioItem value="yes" label="Yes" />
                <GoabRadioItem value="no" label="No" />
              </GoabRadioGroup>
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        {/* Page A - Shown when "Yes" is selected */}
        <GoabPublicFormPage
          id="page-a"
          heading="Page A - Additional Services Details"
          buttonText="Continue"
          onContinue={(e) => onContinue(e, "page-a")}
        >
          <GoabFieldset>
            <GoabFormItem label="What services do you need?">
              <GoabInput name="service-details" />
            </GoabFormItem>
            <GoabFormItem label="Preferred contact method">
              <GoabInput name="contact-method" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        {/* Page B - Shown when "No" is selected */}
        <GoabPublicFormPage
          id="page-b"
          heading="Page B - Confirmation"
          buttonText="Continue"
          onContinue={(e) => onContinue(e, "page-b")}
        >
          <GoabFieldset>
            <GoabFormItem label="Please confirm your contact information">
              <GoabInput name="contact-confirmation" />
            </GoabFormItem>
            <GoabFormItem label="Any additional comments">
              <GoabInput name="additional-comments" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        {/* Summary Page */}
        <GoabPublicFormPage
          id="summary"
          type="summary"
          heading="Review Your Information"
          buttonText="Confirm"
        >
          <GoabPublicFormSummary />
        </GoabPublicFormPage>
      </GoabPublicForm>

      {formState && (
        <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
          <h3>Current Form State</h3>
          <pre style={{ fontSize: "12px", overflow: "auto" }}>
            {JSON.stringify(formState, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

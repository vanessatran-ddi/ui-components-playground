import {
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabFormItem,
  GoabInput,
  GoabFieldset,
  GoabCallout,
  usePublicFormController
} from "@abgov/react-components";
import { useState } from "react";
import { GoabFormState } from "@abgov/ui-components-common";

type Page = "personal-info" | "contact-info" | "additional-details" | "summary";

/**
 * Test for Issue 2: Accessibility - Change Links Tab Order
 *
 * Test Steps:
 * 1. Fill out the form and reach summary
 * 2. Use Tab key to navigate through the summary
 * 3. Verify "Change" links are included in tab order
 * 4. Verify focus styling appears on Change links
 */
export const PublicFormAccessibilityTest = () => {
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
      case "personal-info":
        nextPage = "contact-info";
        break;
      case "contact-info":
        nextPage = "additional-details";
        break;
      case "additional-details":
        nextPage = "summary";
        break;
      default:
        break;
    }

    if (nextPage) {
      continueTo(nextPage);
    }
  };

  return (
    <div>
      <h1>Public Form Accessibility Test</h1>

      <GoabCallout type="information" mb="l">
        <strong>Accessibility Test Instructions:</strong>
        <ol>
          <li>Fill out all form fields below</li>
          <li>Click Continue to reach the Summary page</li>
          <li><strong>Use Tab key to navigate through the summary</strong></li>
          <li><strong>Verify: "Change" links should be accessible via Tab navigation</strong></li>
          <li><strong>Verify: Focus styling appears on Change links when tabbed to</strong></li>
          <li>Try clicking a Change link and verify it works</li>
        </ol>
      </GoabCallout>

      <GoabPublicForm
        name="accessibility-test-form"
        onComplete={handleFormComplete}
        onInit={handleFormInit}
        onStateChange={handleFormStateChange}
      >
        {/* Personal Information Page */}
        <GoabPublicFormPage
          id="personal-info"
          heading="Personal Information"
          buttonText="Continue"
          onContinue={(e) => onContinue(e, "personal-info")}
        >
          <GoabFieldset>
            <GoabFormItem label="First Name" requirement="required">
              <GoabInput name="first-name" />
            </GoabFormItem>
            <GoabFormItem label="Last Name" requirement="required">
              <GoabInput name="last-name" />
            </GoabFormItem>
            <GoabFormItem label="Email Address" requirement="required">
              <GoabInput name="email" type="email" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        {/* Contact Information Page */}
        <GoabPublicFormPage
          id="contact-info"
          heading="Contact Information"
          buttonText="Continue"
          onContinue={(e) => onContinue(e, "contact-info")}
        >
          <GoabFieldset>
            <GoabFormItem label="Phone Number">
              <GoabInput name="phone" type="tel" />
            </GoabFormItem>
            <GoabFormItem label="Address">
              <GoabInput name="address" />
            </GoabFormItem>
            <GoabFormItem label="City">
              <GoabInput name="city" />
            </GoabFormItem>
            <GoabFormItem label="Postal Code">
              <GoabInput name="postal-code" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        {/* Additional Details Page */}
        <GoabPublicFormPage
          id="additional-details"
          heading="Additional Details"
          buttonText="Continue"
          onContinue={(e) => onContinue(e, "additional-details")}
        >
          <GoabFieldset>
            <GoabFormItem label="Occupation">
              <GoabInput name="occupation" />
            </GoabFormItem>
            <GoabFormItem label="Emergency Contact Name">
              <GoabInput name="emergency-contact-name" />
            </GoabFormItem>
            <GoabFormItem label="Emergency Contact Phone">
              <GoabInput name="emergency-contact-phone" type="tel" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        {/* Summary Page */}
        <GoabPublicFormPage
          id="summary"
          type="summary"
          heading="Review Your Information"
          buttonText="Submit Application"
        >
          <GoabCallout type="information" mb="l">
            <strong>Tab Navigation Test:</strong> Use the Tab key to navigate through this summary.
            All "Change" links should be accessible and show focus styling.
          </GoabCallout>
          <GoabPublicFormSummary />
        </GoabPublicFormPage>
      </GoabPublicForm>

      {formState && (
        <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
          <h3>Current Form State</h3>
          <p><strong>Status:</strong> {formState.status}</p>
          <p><strong>Editing:</strong> {formState.editting}</p>
          <details>
            <summary>Full State (click to expand)</summary>
            <pre style={{ fontSize: "12px", overflow: "auto" }}>
              {JSON.stringify(formState, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
};

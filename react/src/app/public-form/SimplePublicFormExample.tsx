import { useState,} from 'react';
import {
  GoabFormState,
  requiredValidator,
} from "@abgov/ui-components-common";
import {
  GoabPublicForm,
  GoabPublicFormPage,
  GoabFieldset,
  GoabFormItem,
  GoabInput,
  GoabTextArea,
  GoabRadioGroup,
  GoabRadioItem,
  GoabModal,
  GoabButtonGroup,
  GoabButton,
  GoabPublicFormSummary,
  GoabDatePicker,
  usePublicFormController
} from "@abgov/react-components";

type Page =
  | "name"
  | "sin"
  | "postalcode"
  | "residence"
  | "residence-duration"
  | "birthdate"
  | "currently-employed"
  | "highest-education"
  | "other-education"
  | "previously-applied"
  | "summary"
  | "ineligible";

export function SimplePublicFormExample() {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const {
    state,
    init,
    initState,
    continueTo,
    validate,
  } = usePublicFormController<Page>("details");

  const showConfirmation = (state: GoabFormState) => {
    setShowConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setShowConfirmationModal(false);
  };

  const submitForm = () => {
    setShowConfirmationModal(false);
  };

  // Validation functions
  const validateName = (e: Event): Page | undefined => {
    console.log("state is ", state);
    const [firstNameOk] = validate(e, "firstName", [
      requiredValidator("First name is required"),
    ]);
    const [lastNameOk] = validate(e, "lastName", [
      requiredValidator("Last name is required"),
    ]);
    if (!firstNameOk || !lastNameOk) {
      return;
    }
    return "sin";
  };

  const validateResidence = (e: Event): Page | undefined => {
    const { state } = (e as CustomEvent).detail;
    if (state.alberta?.value === "No") {
      return "ineligible";
    }
    return "residence-duration";
  };

  const validateResidenceDuration = (e: Event): Page | undefined => {
    const { state } = (e as CustomEvent).detail;
    if (state.duration?.value === "Less than a year") {
      return "ineligible";
    }
    return "birthdate";
  };

  const validateEducation = (e: Event): Page | undefined => {
    const { state } = (e as CustomEvent).detail;
    if (state.education?.value === "Other") {
      return "other-education";
    }
    return "previously-applied";
  };

  const onPageChange = (e: Event | null, from: string) => {
    console.log("onPageChange with e ", e, from);

    // Add null check for e
    if (!e) {
      console.warn("onPageChange received null event");
      return;
    }

    const { cancelled } = (e as CustomEvent).detail;
    if (cancelled) return;

    let nextPage: Page | undefined;

    // Handle page validations
    switch (from) {
      case "name":
        nextPage = validateName(e);
        break;
      case "sin":
        nextPage = "postalcode";
        break;
      case "postalcode":
        nextPage = "residence";
        break;
      case "residence":
        nextPage = validateResidence(e);
        break;
      case "residence-duration":
        nextPage = validateResidenceDuration(e);
        break;
      case "birthdate":
        nextPage = "currently-employed";
        break;
      case "currently-employed":
        nextPage = "highest-education";
        break;
      case "highest-education":
        nextPage = validateEducation(e);
        break;
      case "other-education":
        nextPage = "previously-applied";
        break;
      case "previously-applied":
        nextPage = "summary";
        break;
      case "summary":
        break;
    }

    if (nextPage) {
      continueTo(nextPage);
    }
  };

  const handleInit = (event: Event) => {
    console.log("Form initialized", event);
    init(event);

    // Initialize state after form reference is set
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

  return (
    <>
      <GoabPublicForm
        name="public-form-1"
        onComplete={showConfirmation}
        onInit={handleInit}
      >
        <GoabPublicFormPage
          id="name"
          heading="What is your full name?"
          summaryHeading="Introduction"
          first={true}
          type={"step"}
          onContinue={(e) => onPageChange(e, 'name')}
        >
          <GoabFieldset>
            <GoabFormItem name="firstName" label="First name">
              <GoabInput name="firstName" />
            </GoabFormItem>
            <GoabFormItem name="lastName" label="Last name">
              <GoabInput name="lastName" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="sin"
          onContinue={(e) => onPageChange(e, 'sin')}
        >
          <GoabFieldset>
            <GoabFormItem id="sin-item" label="What is your SIN?" labelSize="large">
              <GoabInput id="sin" name="sin" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="postalcode"
          onContinue={(e) => onPageChange(e, 'postalcode')}
          heading="Postal Code"
        >
          <GoabFieldset>
            <GoabFormItem name="Your city" label="Foo City" helpText="Where you live" publicFormSummaryOrder={3}>
              <GoabInput name="city" />
            </GoabFormItem>
            <GoabFormItem label="Address" publicFormSummaryOrder={4}>
              <GoabTextArea name="address" />
            </GoabFormItem>
            <GoabFormItem name="Postal Code" label="Postal Code" publicFormSummaryOrder={1}>
              <GoabInput name="postal-code" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="residence"
          onContinue={(e) => onPageChange(e, 'residence')}
        >
          <GoabFieldset>
            <GoabFormItem
              id="alberta-item"
              label="Do you currently live in Alberta?"
              labelSize="large"
              helpText="This service is for residents of Alberta"
            >
              <GoabRadioGroup id="alberta" name="alberta">
                <GoabRadioItem value="Yes" label="Yes" />
                <GoabRadioItem value="No" label="No" />
              </GoabRadioGroup>
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="residence-duration"
          onContinue={(e) => onPageChange(e, 'residence-duration')}
        >
          <GoabFieldset>
            <GoabFormItem
              id="duration-item"
              label="How long have you been living in Alberta?"
              labelSize="large"
            >
              <GoabRadioGroup id="duration" name="duration">
                <GoabRadioItem value="Less than a year" label="Less than a year" />
                <GoabRadioItem value="More than a year" label="More than a year" />
              </GoabRadioGroup>
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="birthdate"
          onContinue={(e) => onPageChange(e, 'birthdate')}
        >
          <GoabFieldset>
            <GoabFormItem
              id="birthdate-item"
              label="What is your date of birth?"
              helpText="Your date of birth is required to ensure you meet the minimum age criteria"
              labelSize="large"
            >
              <GoabFormItem id="birth-date-item" label="Birth Date">
                <GoabDatePicker name="birth-date" type="input"/>
              </GoabFormItem>
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="currently-employed"
          onContinue={(e) => onPageChange(e, 'currently-employed')}
        >
          <GoabFieldset>
            <GoabFormItem
              id="currently-employed"
              label="Are you currently employed?"
              labelSize="large"
            >
              <GoabRadioGroup id="currency-employed" name="employed">
                <GoabRadioItem value="Yes" label="Yes" />
                <GoabRadioItem value="No" label="No" />
              </GoabRadioGroup>
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="highest-education"
          onContinue={(e) => onPageChange(e, 'highest-education')}
        >
          <GoabFieldset>
            <GoabFormItem
              id="education-item"
              label="What is the highest level of education you have completed?"
              labelSize="large"
            >
              <GoabRadioGroup id="education" name="education">
                <GoabRadioItem value="High school" label="High school" />
                <GoabRadioItem value="Post secondary" label="Post secondary" />
                <GoabRadioItem value="Graduate studies" label="Graduate studies" />
                <GoabRadioItem value="None" label="None" />
                <GoabRadioItem value="Other" label="Other" />
              </GoabRadioGroup>
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="other-education"
          onContinue={(e) => onPageChange(e, 'other-education')}
        >
          <GoabFieldset>
            <GoabFormItem
              id="other-education-description-item"
              label="Describe your education"
              labelSize="large"
            >
              <GoabTextArea id="other-education-description" name="other-education-description" />
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="previously-applied"
          onContinue={(e) => onPageChange(e, 'previously-applied')}
        >
          <GoabFieldset>
            <GoabFormItem
              id="previously-applied-item"
              label="Have you previously applied for this service?"
              labelSize="large"
            >
              <GoabRadioGroup id="previously-applied" name="previously-applied">
                <GoabRadioItem value="Yes" label="Yes" />
                <GoabRadioItem value="No" label="No" />
              </GoabRadioGroup>
            </GoabFormItem>
          </GoabFieldset>
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="summary"
          heading="Summary"
          type="summary"
          onContinue={(e) => onPageChange(e, 'summary')}
        >
          <GoabPublicFormSummary />
        </GoabPublicFormPage>

        <GoabPublicFormPage
          id="ineligible"
          heading="Not Eligible"
        >
          <GoabFieldset>
            <p>Sorry, you are not eligible for this service.</p>
          </GoabFieldset>
        </GoabPublicFormPage>
      </GoabPublicForm>

      <GoabModal open={showConfirmationModal} heading="Submit application">
        Once submitted you will not be able to apply again until your file has been looked at.
        <GoabButtonGroup alignment="end">
          <GoabButton type="secondary" onClick={hideConfirmationModal}>
            Cancel
          </GoabButton>
          <GoabButton onClick={submitForm}>Submit</GoabButton>
        </GoabButtonGroup>
      </GoabModal>
    </>
  );
}

export default SimplePublicFormExample;

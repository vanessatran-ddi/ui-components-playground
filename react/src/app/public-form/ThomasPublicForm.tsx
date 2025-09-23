import { useState } from 'react';
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
  GoabCheckbox,
  GoabPublicFormSummary,
  usePublicFormController,
} from "@abgov/react-components";

type Page = "question-children" | "select-option" | "do-you-want" | "how-many" | "summary";


export function FormTest() {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const {
    state,
    init,
    initState,
    continueTo,
    validate,
  } = usePublicFormController<Page>("details");

  const showConfirmation = (state: GoabFormState) => {
    console.log("Form completed:", state);
    // TODO: Handle form submission
  };

  const handleInit = (event: Event) => {
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

  const validateQuestionChildren = (e: Event): Page | undefined => {
    console.log(e);

    const [questionChildrenValid] = validate(e, "question-children", [
      requiredValidator("Do you have any children? is required"),
    ]);
    if (!questionChildrenValid) return;


    const { state } = (e as CustomEvent).detail;
    if (state['question-children']?.value === "Yes") {
      return "select-option";
    }
    if (state['question-children']?.value === "No") {
      return "do-you-want";
    }
    return undefined;
  };
  const validateDoYouWant = (e: Event): Page | undefined => {
    const [doYouWantValid] = validate(e, "do-you-want", [
      requiredValidator("Do you want them? is required"),
    ]);
    if (!doYouWantValid) return;
    return "how-many";
  }
  const validateHowMany = (e: Event): Page | undefined => {
    const [howManyValid] = validate(e, "how-many", [
      requiredValidator("How many? is required"),
    ]);
    if (!howManyValid) return;
    return "summary";
  }

  const onPageChange = (e: Event | null, from: string) => {
    if (!e || (e as CustomEvent).detail.cancelled) return;

    let nextPage: Page | undefined;

    switch (from) {
      case "question-children":
        nextPage = validateQuestionChildren(e);
        break;
      case "select-option":
        nextPage = "how-many";
        break;
      case "do-you-want":
        nextPage =validateDoYouWant(e);
        break;
      case "how-many":
        nextPage = validateHowMany(e);
        break;
    }

    if (nextPage) {
      continueTo(nextPage);
    }
  };

  return (
    <GoabPublicForm
      name="form-test"
      onComplete={showConfirmation}
      onInit={handleInit}
    >
      <GoabPublicFormPage
        id="question-children"
        heading="Do you have any children?"
        onContinue={(e) => onPageChange(e, 'question-children')}
      >
        <GoabFieldset>
          <GoabFormItem
            id="question-children-item"
            name="question-children"
            label="Do you have any children?"
            labelSize="large"

          >
            <GoabRadioGroup id="question-children" name="question-children">
              <GoabRadioItem value="Yes" label="Yes" />
              <GoabRadioItem value="No" label="No" />
            </GoabRadioGroup>
          </GoabFormItem>
        </GoabFieldset>
      </GoabPublicFormPage>

      <GoabPublicFormPage
        id="select-option"
        heading="Select an option"

        onContinue={(e) => onPageChange(e, 'select-option')}
      >
        <GoabFieldset>
          <GoabFormItem
            id="select-option-item"
            name="select-option"
            label="Select an option"
            labelSize="large"

          >
            <GoabCheckbox name="select-option-option-1" text="Option 1" />
            <GoabCheckbox name="select-option-option-2" text="Option 2" />
          </GoabFormItem>
        </GoabFieldset>
      </GoabPublicFormPage>

      <GoabPublicFormPage
        id="do-you-want"
        heading="Do you want them?"

        onContinue={(e) => onPageChange(e, 'do-you-want')}
      >
        <GoabFieldset>
          <GoabFormItem
            id="do-you-want-item"
            name="do-you-want"
            label="Do you want them?"
            labelSize="large"

          >
            <GoabRadioGroup id="do-you-want" name="do-you-want">
              <GoabRadioItem value="Yes" label="Yes" />
              <GoabRadioItem value="No" label="No" />
              <GoabRadioItem value="Maybe" label="Maybe" />
            </GoabRadioGroup>
          </GoabFormItem>
        </GoabFieldset>
      </GoabPublicFormPage>

      <GoabPublicFormPage
        id="how-many"
        heading="How many?"

        onContinue={(e) => onPageChange(e, 'how-many')}
      >
        <GoabFieldset>
          <GoabFormItem
            id="how-many-item"
            name="how-many"
            label="How many?"
            labelSize="large"
            helpText="Helper text is here."
          >
            <GoabInput id="how-many" name="how-many" />
          </GoabFormItem>
        </GoabFieldset>
      </GoabPublicFormPage>

      <GoabPublicFormPage
        id="summary"
        heading="Review Your Information"
        type="summary"
      >
        <GoabPublicFormSummary />
      </GoabPublicFormPage>
    </GoabPublicForm>
  );
}

export default FormTest;

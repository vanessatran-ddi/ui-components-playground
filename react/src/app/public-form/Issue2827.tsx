import {
  GoabFieldset,
  GoabFormItem, GoabInput,
  GoabPublicForm,
  GoabPublicFormPage,
  usePublicFormController,
} from "@abgov/react-components";
import { GoabFormState, requiredValidator } from "@abgov/ui-components-common";
import React from "react";

type Page = "first-step" | "summary";

export const Issue2827 = () => {
  const {
    init,
    initState,
    validate,
    complete,
  } = usePublicFormController<Page>("details");

  const [formStateDisplay, setFormStateDisplay] = React.useState<any>(null);
  const [completed, setCompleted] = React.useState(false);

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

    if (from === "first-step") {
      const [isValid] = validate(e, "firstName", [
        requiredValidator("First name is required."),
      ]);
      if (!isValid) return; // Do nothing

      complete();
      // continueTo("review"); // When we have review page
    }

  }

  const onCompleteIssue2827 = (formState: GoabFormState) => {
    console.log("Complete issue2827", formState);
    setCompleted(true);
    setFormStateDisplay(JSON.stringify(formState, null, 2));
  }

  return (
    <>
      {completed && (
        <div style={{ margin: '20px', padding: '20px', backgroundColor: '#f5f5f5', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>Form State after it is completed:</h3>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
            {formStateDisplay}
          </pre>
        </div>
      )}

      <GoabPublicForm name="issue2827-form" onComplete={onCompleteIssue2827} onInit={onInit}>
        <GoabPublicFormPage
        id="first-step"
        heading="Issue 2827 Checkbox Step"
        first={true}
        buttonText={"Continue to review"}
        onContinue={(e) => onContinue(e, "first-step")}>

        <GoabFieldset mt="xl">
          <GoabFormItem label="First name">
            <GoabInput name="firstName"></GoabInput>
          </GoabFormItem>
        </GoabFieldset>
      </GoabPublicFormPage>
    </GoabPublicForm>
    </>
  );
};

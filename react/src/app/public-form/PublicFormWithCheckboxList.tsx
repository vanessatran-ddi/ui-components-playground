import {
  GoabCheckbox,
  GoabCheckboxList,
  GoabFieldset,
  GoabFormItem,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  usePublicFormController,
} from "@abgov/react-components";
import { GoabFormState, GoabCheckboxListOnChangeDetail } from "@abgov/ui-components-common";
import { useState } from "react";

type Page = "preferences" | "summary";

interface PublicFormWithCheckboxListProps {
  onComplete?: (state: GoabFormState) => void;
}

export const PublicFormWithCheckboxList = ({onComplete}: PublicFormWithCheckboxListProps) => {
  const {
    init,
    initState,
    continueTo,
  } = usePublicFormController<Page>("details");

  const [selectedContactMethods, setSelectedContactMethods] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

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
    }, 0);
  };

  const onCompleteForm = (e: GoabFormState) => {
    console.log("Complete checkbox list form", e);
    console.log("Selected contact methods:", selectedContactMethods);
    console.log("Selected interests:", selectedInterests);
    onComplete?.(e);
  };

  const onContinue = (e: Event, from: Page) => {
    console.log("onContinue", e, from);
    if ((e as CustomEvent).detail?.cancelled) return;

    let nextPage: Page | undefined;

    switch (from) {
      case "preferences":
        nextPage = validatePreferences(e);
        break;
      default:
        break;
    }

    if (nextPage) {
      continueTo(nextPage);
    }
  };

  const validatePreferences = (e: Event): Page | undefined => {
    // For this example, we'll allow submission without requiring any checkboxes
    // This demonstrates that checkbox lists are typically optional
    console.log("Validating preferences with:", {
      contactMethods: selectedContactMethods,
      interests: selectedInterests
    });
    return "summary";
  };

  const onContactMethodsChange = (event: GoabCheckboxListOnChangeDetail) => {
    console.log("Contact methods changed:", event);
    setSelectedContactMethods(event.value || []);
  };

  const onInterestsChange = (event: GoabCheckboxListOnChangeDetail) => {
    console.log("Interests changed:", event);
    setSelectedInterests(event.value || []);
  };

  return (
    <GoabPublicForm name="public-form-checkbox-list" onComplete={onCompleteForm} onInit={onInit}>
      <GoabPublicFormPage
        id="preferences"
        heading="Your Communication Preferences"
        summaryHeading="Preferences"
        buttonText="Save and continue"
        onContinue={(e) => onContinue(e, "preferences")}
      >
        <GoabFieldset>
          <GoabFormItem
            name="contactMethods"
            label="How would you like us to contact you?"
            labelSize="large"
            helpText="Select all that apply"
          >
            <GoabCheckboxList
              name="contactMethods"
            >
              <GoabCheckbox name="sms" text="Text Message (SMS)" />
              <GoabCheckbox name="mail" text="Physical Mail" />
            </GoabCheckboxList>
          </GoabFormItem>

          <GoabFormItem
            name="interests"
            label="What are you interested in?"
            labelSize="large"
            helpText="Select your areas of interest"
          >
            <GoabCheckboxList
              name="interests"
            >
              <GoabCheckbox name="news" text="Government News & Updates" />
              <GoabCheckbox name="services" text="New Services & Programs" />
              <GoabCheckbox name="events" text="Community Events" />
              <GoabCheckbox name="emergency" text="Emergency Alerts" />
            </GoabCheckboxList>
          </GoabFormItem>
        </GoabFieldset>
      </GoabPublicFormPage>

      <GoabPublicFormPage
        id="summary"
        heading="Summary"
        type="summary"
      >
        <GoabPublicFormSummary/>
      </GoabPublicFormPage>
    </GoabPublicForm>
  );
};

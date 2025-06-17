import { GoabFormState, requiredValidator } from "@abgov/ui-components-common";
import { useState } from "react";
import {
  GoabCheckbox,
  GoabFieldset,
  GoabFormItem,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabText,
  GoabCallout,
  usePublicFormController,
} from "@abgov/react-components";
import { UploadIdentityFile } from "./UploadIdentityFile";

type Page = "2C.1" | "2C.Review";

interface Section2CProps {
  onComplete?: (state: GoabFormState) => void;
}

export const Section2C = ({onComplete}: Section2CProps) => {

  // File upload state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Main form controller for Section2C pages
  const {
    init,
    continueTo,
    validate,
    controller: mainFormController,
  } = usePublicFormController<Page>("details");

  const onInit = (event: Event) => {
    init(event);
  }

  const onCompleteSection2C = (e: GoabFormState) => {
    console.log("Complete section2C", e);
    onComplete?.(e);
  }

  const onContinue = (e: Event, from: Page) => {
    console.log("onContinue", e, from);
    if ((e as CustomEvent).detail?.cancelled) return;

    let nextPage: Page | undefined;

    switch (from) {
      case "2C.1":
        nextPage = validate2C1(e);
        break;
      default:
        break;
    }

    if (nextPage) {
      continueTo(nextPage);
    }
  }

  // Handle file upload callback
  const handleFileUpload = (file: File) => {
    console.log("File uploaded:", file.name);
    setUploadedFile(file);
  };

  const validate2C1 = (e: Event): Page | undefined => {
    // Check if file has been uploaded
    if (!uploadedFile) {
      console.error("Please upload your government issued ID.");
      return undefined;
    }

    const [isConfirmOk] = validate(e, "confirmation", [requiredValidator("Please confirm the accuracy of your information.")]);

    if (!isConfirmOk) return undefined;

    // Continue to review page
    return "2C.Review";
  }

  return (
    <GoabPublicForm name={"section2c-form"} onComplete={onCompleteSection2C} onInit={onInit}>
      <GoabPublicFormPage
        id="2C.1"
        heading="Verify your identity"
        buttonText="Save and continue"
        onContinue={(e) => onContinue(e, "2C.1")}
      >
        <GoabText mb="l">
          Velit nisl etiam nec fames eu hendrerit mauris. Amet ut lobortis augue gravida
          pharetra id vel vestibulum quam. Blandit nullam sit lacus nunc habitasse cras.
          Mattis ut id egestas ipsum volutpat et leo faucibus. Risus a tortor euismod lorem.
        </GoabText>

        <UploadIdentityFile onUpload={handleFileUpload}/>
        <GoabFieldset>
          <GoabFormItem name="Confirmation">
            <GoabCheckbox
              name="confirmation"
              text="By submitting these documents, I confirm that all information provided is true and accurate to the best of my knowledge"
            />
          </GoabFormItem>
        </GoabFieldset>
      </GoabPublicFormPage>

      <GoabPublicFormPage
        id="2C.Review"
        type="summary"
        heading="You have completed the first part of the application"
        buttonText="Back to application overview"
      >
        <GoabCallout type="success" heading="Application submitted for review" mb="xl">
          <GoabText mb="s">
            You will receive a copy of the initial application to your email name@email.com.
          </GoabText>
          <GoabText mb="0">
            Your reference number is: <strong>1234ABC</strong>
          </GoabText>
        </GoabCallout>

        <GoabText tag="h2" mb="s">What happens next</GoabText>
        <GoabText mb="s">
          Your application is being reviewed. You will be contacted by email to schedule your service within 24 hours.
        </GoabText>
        <GoabText mb="l">
          You can now close this window. You will receive a link back to the application overview by email.
        </GoabText>

        <GoabText mb="s">What did you think of this service? <a href="#" style={{ color: '#0073e6' }}>Give feedback</a></GoabText>

        <GoabText tag="h2" mb="s">If you have questions about your application</GoabText>
        <GoabText mb="s">Contact the [ministry area].</GoabText>
        <GoabText mb="s">Email: <a href="mailto:information@gov.ab.ca" style={{ color: '#0073e6' }}>information@gov.ab.ca</a></GoabText>
        <GoabText mb="l">Phone: <a href="tel:7801234567" style={{ color: '#0073e6' }}>780 123 4567</a></GoabText>
      </GoabPublicFormPage>
    </GoabPublicForm>
  );
}

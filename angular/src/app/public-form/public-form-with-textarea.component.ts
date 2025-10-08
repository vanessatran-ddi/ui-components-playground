import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Component } from "@angular/core";
import {
  GoabFormState,
  PublicFormController,
} from "@abgov/ui-components-common";
import { requiredValidator } from "@abgov/ui-components-common";
import {
  GoabButton,
  GoabButtonGroup,
  GoabFieldset,
  GoabFormItem,
  GoabModal,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabTextArea,
} from "@abgov/angular-components";

type Page = "feedback" | "summary";

@Component({
  selector: "abgov-public-form-with-textarea",
  standalone: true,
  templateUrl: "./public-form-with-textarea.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    GoabPublicForm,
    GoabPublicFormPage,
    GoabFieldset,
    GoabFormItem,
    GoabTextArea,
    GoabModal,
    GoabButtonGroup,
    GoabButton,
    GoabPublicFormSummary,
  ],
})
export class PublicFormWithTextAreaComponent extends PublicFormController<Page> {
  constructor() {
    super("details");
  }

  _showConfirmationModal = false;

  showConfirmation(state: GoabFormState) {
    console.log("TextArea form completed with state:", state);
    this._showConfirmationModal = true;
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitForm() {
    console.log("TextArea form submitted");
    this._showConfirmationModal = false;
  }

  onPageChange(e: Event, from: string) {
    let dest: Page | undefined = undefined;
    switch (from) {
      case "feedback":
        dest = this.validateFeedback(e);
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }
  }

  validateFeedback(e: Event): Page | undefined {
    const [commentsOk] = this.validate(e, "comments", [
      requiredValidator("Comments are required"),
    ]);
    if (!commentsOk) {
      return;
    }
    return "summary";
  }
}
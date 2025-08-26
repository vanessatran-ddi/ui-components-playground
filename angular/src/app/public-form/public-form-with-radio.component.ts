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
  GoabRadioGroup,
  GoabRadioItem,
} from "@abgov/angular-components";

type Page = "survey" | "summary";

@Component({
  selector: "abgov-public-form-with-radio",
  standalone: true,
  templateUrl: "./public-form-with-radio.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    GoabPublicForm,
    GoabPublicFormPage,
    GoabFieldset,
    GoabFormItem,
    GoabRadioGroup,
    GoabRadioItem,
    GoabModal,
    GoabButtonGroup,
    GoabButton,
    GoabPublicFormSummary,
  ],
})
export class PublicFormWithRadioComponent extends PublicFormController<Page> {
  constructor() {
    super("details");
  }

  _showConfirmationModal = false;

  showConfirmation(state: GoabFormState) {
    console.log("Radio form completed with state:", state);
    this._showConfirmationModal = true;
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitForm() {
    console.log("Radio form submitted");
    this._showConfirmationModal = false;
  }

  onPageChange(e: Event, from: string) {
    let dest: Page | undefined = undefined;
    switch (from) {
      case "survey":
        dest = this.validateSurvey(e);
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }
  }

  validateSurvey(e: Event): Page | undefined {
    const [satisfactionOk] = this.validate(e, "satisfaction", [
      requiredValidator("Satisfaction rating is required"),
    ]);
    const [frequencyOk] = this.validate(e, "frequency", [
      requiredValidator("Usage frequency is required"),
    ]);
    if (!satisfactionOk || !frequencyOk) {
      return;
    }
    return "summary";
  }
}
import {Component} from "@angular/core";
import {GoabFormState, PublicFormController, requiredValidator} from "@abgov/ui-components-common";
import {
  GoabButton,
  GoabButtonGroup,
  GoabDatePicker,
  GoabFieldset,
  GoabFormItem, GoabModal,
  GoabPublicForm,
  GoabPublicFormPage, GoabPublicFormSummary
} from "@abgov/angular-components";
type Page = "dates" | "summary";
@Component({
  selector: "abgov-public-form-datepicker",
  standalone: true,
  templateUrl: "./public-form-datepicker.component.html",
  imports: [
    GoabPublicForm,
    GoabPublicFormPage,
    GoabFieldset,
    GoabFormItem,
    GoabDatePicker,
    GoabPublicFormSummary,
    GoabModal,
    GoabButtonGroup,
    GoabButton
  ]
})
export class PublicFormDatepickerComponent extends PublicFormController<Page> {
  constructor() {
    super("details");
  }

  _showConfirmationModal = false;

  showConfirmation(state: GoabFormState) {
    console.log("Date picker form completed with state:", state);
    this._showConfirmationModal = true;
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitForm() {
    console.log("Date picker form submitted");
    this._showConfirmationModal = false;
  }

  onPageChange(e: Event, from: string) {
    let dest: Page | undefined = undefined;
    switch (from) {
      case "dates":
        dest = this.validateDates(e);
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }
  }

  validateDates(e: Event): Page | undefined {
    const [birthDateOk] = this.validate(e, "birth-date", [
      requiredValidator("Birth date is required"),
    ]);
    if (!birthDateOk) {
      return;
    }
    return "summary";
  }
}

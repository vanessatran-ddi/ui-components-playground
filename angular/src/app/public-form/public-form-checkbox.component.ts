import {Component} from "@angular/core";
import {GoabFormState, PublicFormController} from "@abgov/ui-components-common";
import {
  GoabButton,
  GoabButtonGroup,
  GoabCheckbox,
  GoabFieldset,
  GoabFormItem, GoabModal,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary
} from "@abgov/angular-components";
type Page = "checkbox" | "summary";

@Component({
  selector: "abgov-public-form-checkbox",
  templateUrl: "./public-form-checkbox.component.html",
  standalone: true,
  imports: [
    GoabPublicFormPage,
    GoabPublicForm,
    GoabFieldset,
    GoabFormItem,
    GoabCheckbox,
    GoabPublicFormSummary,
    GoabModal,
    GoabButtonGroup,
    GoabButton
  ]
})
export class PublicFormCheckboxComponent extends PublicFormController<Page> {
  constructor() {
    super("details");
  }

  _showConfirmationModal = false;

  showConfirmation(state: GoabFormState) {
    console.log("Checkbox form completed with state:", state);
    this._showConfirmationModal = true;
  }

  onPageChange(e: Event, from: string) {
    let dest: Page | undefined = undefined;
    console.log("onPageChange ", e);
    switch (from) {
      case "checkbox":
        dest = "summary";
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitForm() {
    console.log("Checkbox form submitted");
    this._showConfirmationModal = false;
  }
}

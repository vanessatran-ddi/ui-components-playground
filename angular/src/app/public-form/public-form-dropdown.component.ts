import {Component} from "@angular/core";
import {GoabFormState, PublicFormController, requiredValidator} from "@abgov/ui-components-common";
import {
  GoabButton,
  GoabButtonGroup,
  GoabDropdown,
  GoabDropdownItem,
  GoabFieldset,
  GoabFormItem, GoabModal,
  GoabPublicForm,
  GoabPublicFormPage, GoabPublicFormSummary
} from "@abgov/angular-components";
type Page = "location" | "summary";
@Component({
  selector: "abgov-public-form-dropdown",
  standalone: true,
  templateUrl: "./public-form-dropdown.component.html",
  imports: [
    GoabPublicForm,
    GoabPublicFormPage,
    GoabFieldset,
    GoabFormItem,
    GoabDropdown,
    GoabDropdownItem,
    GoabPublicFormSummary,
    GoabModal,
    GoabButtonGroup,
    GoabButton
  ]
})
export class PublicFormDropdownComponent extends PublicFormController<Page>  {
  constructor() {
    super("details");
  }

  _showConfirmationModal = false;

  showConfirmation(state: GoabFormState) {
    console.log("Dropdown form completed with state:", state);
    this._showConfirmationModal = true;
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitForm() {
    console.log("Dropdown form submitted");
    this._showConfirmationModal = false;
  }

  onPageChange(e: Event, from: string) {
    let dest: Page | undefined = undefined;
    switch (from) {
      case "location":
        dest = this.validateLocation(e);
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }
  }

  validateLocation(e: Event): Page | undefined {
    const [provinceOk] = this.validate(e, "province", [
      requiredValidator("Province is required"),
    ]);
    const [serviceTypeOk] = this.validate(e, "service-type", [
      requiredValidator("Service type is required"),
    ]);
    if (!provinceOk || !serviceTypeOk) {
      return;
    }
    return "summary";
  }
}

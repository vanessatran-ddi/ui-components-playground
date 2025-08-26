import { Component } from "@angular/core";
import {
  GoabFormState,
  GoabCheckboxListOnChangeDetail,
  PublicFormController,
} from "@abgov/ui-components-common";
import { requiredValidator } from "@abgov/ui-components-common";
import {
  GoabButton,
  GoabButtonGroup,
  GoabCheckbox,
  GoabCheckboxList,
  GoabFieldset,
  GoabFormItem,
  GoabModal,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
} from "@abgov/angular-components";

type Page = "preferences" | "summary";

@Component({
  selector: "abgov-public-form-with-checkbox",
  standalone: true,
  templateUrl: "./public-form-with-checkbox.component.html",
  imports: [
    GoabPublicForm,
    GoabPublicFormPage,
    GoabFieldset,
    GoabFormItem,
    GoabCheckbox,
    GoabCheckboxList,
    GoabModal,
    GoabButtonGroup,
    GoabButton,
    GoabPublicFormSummary,
  ],
})
export class PublicFormWithCheckboxComponent extends PublicFormController<Page> {
  constructor() {
    super("details");
  }

  _showConfirmationModal = false;
  selectedContactMethods: string[] = [];
  selectedInterests: string[] = [];

  showConfirmation(state: GoabFormState) {
    console.log("Checkbox form completed with state:", state);
    this._showConfirmationModal = true;
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitForm() {
    console.log("Checkbox form submitted");
    this._showConfirmationModal = false;
  }

  onPageChange(e: Event, from: string) {
    let dest: Page | undefined = undefined;
    console.log("onPageChange ", e);
    switch (from) {
      case "preferences":
        dest = this.validatePreferences(e);
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }
  }

  validatePreferences(e: Event): Page | undefined {
    // For checkbox example, we'll allow submission without requiring any checkboxes
    // This demonstrates that checkboxes are typically optional
    console.log("Selected contact methods:", this.selectedContactMethods);
    console.log("Selected interests:", this.selectedInterests);
    return "summary";
  }

  onContactMethodsChange(event: GoabCheckboxListOnChangeDetail) {
    console.log("Contact methods changed:", event);
    this.selectedContactMethods = event.value || [];
  }

  onInterestsChange(event: GoabCheckboxListOnChangeDetail) {
    console.log("Interests changed:", event);
    this.selectedInterests = event.value || [];
  }
}

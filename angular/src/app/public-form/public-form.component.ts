import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Component } from "@angular/core";
import {
  GoabFieldsetItemState, GoabFieldsetItemValue,
  GoabFormState, GoabPublicFormPageOnCompleteDetail,
  GoabPublicFormPageOnContinueDetail,
  PublicFormController, relay,
} from "@abgov/ui-components-common";
import { requiredValidator } from "@abgov/ui-components-common";
import {
  GoabButton,
  GoabButtonGroup,
  GoabCallout,
  GoabDetails,
  GoabFieldset,
  GoabFormItem,
  GoabInput, GoabModal,
  GoabPublicForm,
  GoabPublicFormPage, GoabPublicFormSummary, GoabRadioGroup, GoabRadioItem, GoabText,
  GoabTextArea,
} from "@abgov/angular-components";

type Page =
  | "name"
  | "sin"
  | "postalcode"
  | "residence"
  | "residence-duration"
  | "birthdate"
  | "currently-employed"
  | "highest-education"
  | "other-education"
  | "previously-applied"
  | "summary"
  | "ineligible";

@Component({
  selector: "abgov-public-form",
  standalone: true,
  templateUrl: "./public-form.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    GoabPublicForm,
    GoabPublicFormPage,
    GoabFieldset,
    GoabFormItem,
    GoabInput,
    GoabTextArea,
    GoabRadioGroup,
    GoabRadioItem,
    GoabDetails,
    GoabCallout,
    GoabText,
    GoabModal,
    GoabButtonGroup,
    GoabButton,
    GoabPublicFormSummary,
  ],
})
export class PublicFormComponent extends PublicFormController<Page> {
  // =====
  // Props

  // =====
  constructor() {
    super("details");
  }

  _showConfirmationModal = false;

  // =========
  // Functions
  // =========


  showConfirmation(state: GoabFormState) {
    console.log("I am at showConfirmation and state is ", state);
    // this._formData = state.form;
    this._showConfirmationModal = true;
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitForm() {
    this._showConfirmationModal = false;
  }

  showDrawer = false;
  toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }


  // ======
  // Events
  // ======

  onPageChange(e: GoabPublicFormPageOnContinueDetail, from: string) {
    console.log("onPageChange with e ", e, from);
    let dest: Page | undefined = undefined;
    switch (from) {
      case "name":
        dest = this.validateName(e);
        break;
      case "sin":
        dest = this.validateSIN(e);
        break;
      case "postalcode":
        dest = this.validatePostalCode(e);
        break;
      case "residence":
        dest = this.validateResidence(e);
        break;
      case "residence-duration":
        dest = this.validateResidenceDuration(e);
        break;
      case "birthdate":
        dest = this.validateBirthdate(e);
        break;
      case "currently-employed":
        dest = this.validateEmployment(e);
        break;
      case "highest-education":
        dest = this.validateEducation(e);
        break;
      case "previously-applied":
        dest = this.validatePreviousApplication(e);
        break;
      case "other-education":
        dest = this.validateOtherEducation(e);
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }

  }

  // ===========
  // Validations
  // ===========

  validateName(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    const [firstNameOk] = this.validate(e, "firstName", [
      requiredValidator("First name is required"),
    ]);
    const [lastNameOk] = this.validate(e, "lastName", [
      requiredValidator("Last name is required"),
    ]);
    if (!firstNameOk || !lastNameOk) {
      return;
    }
    console.log("validateName is called ", e);
    return "sin";
  }

  validateSIN(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    // const [ok] = this.validate("sin", e, [requiredValidator("SIN is required")]);
    // if (!ok) {
    //   return;
    // }

    return "postalcode";
  }

  validatePostalCode(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    // const [ok] = this.validate("postal-code", e, [
    //   requiredValidator("Postal code is required"),
    // ]);
    // if (!ok) {
    //   return;
    // }

    return "residence";
  }

  validateResidence(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    // const [ok, value] = this.validate("alberta", e, [
    //   requiredValidator("Residence status is required"),
    // ]);
    // if (!ok) {
    //   return;
    // }
    //
    // if (value === "No") {
    //   return "ineligible";
    // }
    console.log("Reach and return residence-duration");
    return "residence-duration";
  }

  validateResidenceDuration(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    // const [ok, value] = this.validate("duration", e, [
    //   requiredValidator("Duration is required"),
    // ]);
    // if (!ok) {
    //   return;
    // }

    // if (value === "Less than a year") {
    //   return "ineligible";
    // }
    return "birthdate";
  }

  validateBirthdate(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    // const [dayValid, date] = this.validate("birth-date", e, [
    //   dateValidator({ invalidMsg: "Invalid date" }),
    // ]);
    // if (!dayValid) {
    //   return;
    // }
    const date = "2020-01-01";
    const birthdate = new Date(date);
    // const isAdult = differenceInYears(new Date(), birthdate) > 18;

    // if (!isAdult) {
    //   return "ineligible";
    // }
    return "currently-employed";
  }

  validateEmployment(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    // const [ok, value] = this.validate("employed", e, [
    //   requiredValidator("Employment status is required"),
    // ]);
    // if (!ok) {
    //   return;
    // }
    //
    // if (value === "No") {
    //   return "ineligible";
    // }
    return "highest-education";
  }

  validateEducation(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    // const [ok, value] = this.validate("education", e, [
    //   requiredValidator("Education response is required"),
    // ]);
    // if (!ok) {
    //   return;
    // }
    //
    // if (value === "Other") {
    //   return "other-education";
    // }
    return "previously-applied";
  }

  validateOtherEducation(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    // const [ok, _value] = this.validate("other-education-description", e, [
    //   requiredValidator("Education description is required"),
    // ]);
    // if (!ok) {
    //   return;
    // }

    return "previously-applied";
  }

  validatePreviousApplication(e: GoabPublicFormPageOnContinueDetail): Page | undefined {
    // const [ok, _value] = this.validate("previously-applied", e, [
    //   requiredValidator("Previously application status is required"),
    // ]);
    // if (!ok) {
    //   return;
    // }

    return "summary";
  }
}

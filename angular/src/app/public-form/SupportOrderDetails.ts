import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  dateValidator,
  GoabBlock,
  GoabButton,
  GoabButtonGroup,
  GoabCircularProgress,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabFieldset,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem,
  GoabModal,
  GoabTable,
  GoabInput,
  GoabDetails,
  GoabText,
  GoabDatePicker,
  lengthValidator,
  requiredValidator,
} from "@abgov/angular-components";
import { CommonModule } from "@angular/common";
import { PublicFormController } from "@abgov/ui-components-common";

type Page =
  | "what-is-your-role"
  | "description"
  | "payor-name"
  | "children-subform"
  | "address"
  | "summary";

type ChildPage = "name" | "alternate-name" | "dob" | "complete";

@Component({
  selector: "abgov-fsos",
  standalone: true,
  templateUrl: "./SupportOrderDetails.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    GoabBlock,
    GoabButton,
    GoabButtonGroup,
    GoabCircularProgress,
    GoabPublicForm,
    GoabPublicFormPage,
    GoabPublicFormSummary,
    GoabFieldset,
    GoabFormItem,
    GoabRadioGroup,
    GoabRadioItem,
    GoabModal,
    GoabTable,
    GoabInput,
    GoabDetails,
    GoabText,
    GoabDatePicker
  ]
})
export class SupportOrderDetailsComponent implements OnInit {
  someDate = "2024-06-12";

  resetDate() {
    this.someDate = "2026-02-13";
  }

  onDateChange(e: Event) {
    this.someDate = (e as CustomEvent).detail.value;
  }

  onChange(e: Event) {
    // Handle change event
    console.log('onChange:', e);
  }

  someText = ""
  inputChange(e: Event) {
    console.log((e as CustomEvent).detail)
    this.someText = (e as CustomEvent).detail.value.replace("x", "")
  }

  _childFormController: PublicFormController<ChildPage>;
  _mainFormController: PublicFormController<Page>

  continueButtonVisibility: "visible" | "hidden" = "hidden";
  showDeleteModal = false;
  formStatus: "initializing" | "complete" = "initializing";
  deleteIndex = -1;
  showSpinner = "true";

  children(): Record<string, string>[] {
    return this._childFormController.getStateList();
  }

  constructor(private router: Router) {
    this._mainFormController = new PublicFormController("details");
    this._childFormController = new PublicFormController("list");
  }

  ngOnInit(): void {
    setTimeout(() => {
      // const raw = `{"uuid":"1d56d799-5241-4a82-9309-e948d9dd0221","form":{"what-is-your-role":{"heading":"What is your role in the court order?","data":{"type":"details","fieldsets":{"role":{"name":"role","value":"Recipient","label":"Role","order":1}}}},"children-subform":{"data":{"type":"list","items":[{"uuid":"e22c3c10-4dab-433e-9cb8-e33ec1585f6c","form":{"name":{"heading":"Name","data":{"type":"details","fieldsets":{"firstName":{"name":"firstName","value":"Wes","label":"First name","order":1},"lastName":{"name":"lastName","value":"Olsen","label":"Last name","order":2}}}},"alternate-name":{"heading":"Does your child go by a different name?"},"dob":{"heading":"Your child's birthdate","data":{"type":"details","fieldsets":{"d":{"name":"d","value":"2019-08-04","label":"Date of birth","order":1}}}},"complete":{"heading":"Summary"}},"history":["name","alternate-name","dob","complete"],"editting":"dob","lastModified":"2025-02-11T17:18:58.038Z","status":"not-started"},{"uuid":"18aee25d-db52-4cd9-bffd-927a804aaeb2","form":{"name":{"heading":"Name","data":{"type":"details","fieldsets":{"firstName":{"name":"firstName","value":"Colton","label":"First name","order":1},"lastName":{"name":"lastName","value":"Olsen","label":"Last name","order":2}}}},"dob":{"heading":"Your child's birthdate","data":{"type":"details","fieldsets":{"d":{"name":"d","value":"2012-03-01","label":"Date of birth","order":1}}}}},"history":["name","alternate-name","dob","complete"],"editting":"","lastModified":"2025-02-11T17:18:33.298Z","status":"not-started"}]}},"address":{"heading":"Your current address","data":{"type":"details","fieldsets":{"city":{"name":"city","value":"Edmonton","label":"City","order":1},"address":{"name":"address","value":"1012-9ave","label":"Address","order":2},"postal-code":{"name":"postal-code","value":"T6W2M3","label":"Postal Code","order":3}}}},"summary":{"heading":"Summary"},"index":{"heading":"Child(ren)'s profile"}},"history":["what-is-your-role","children-subform","address","summary"],"editting":"","status":"not-started"}`;
      // Try to load from localStorage first
      const savedState = this.loadFromLocalStorage();
      const data = savedState ? savedState.mainForm : JSON.parse('{}');
      this._mainFormController.initState(data, () => {
        // Also restore child form state if available
        if (savedState && savedState.childForm) {
          this._childFormController.state = savedState.childForm;
        }
        
        this.formStatus = "complete";
        this.showSpinner = "false";
      });
    }, 1000);

    this.continueButtonVisibility = this.children().length > 0 ? "visible" : "hidden";
  }

  updateState(e: Event) {
    console.log("updating state")
    this._mainFormController.updateObjectState(e);
    this.continueButtonVisibility = this.children().length > 0 ? "visible" : "hidden";

    // Save to localStorage after every state change
    this.saveToLocalStorage();
  }

  showModal(index: number) {
    this.showDeleteModal = true;
    this.deleteIndex = index;
  }

  updateChildrenState(e: Event) {
    this._childFormController.updateListState(e);
    // Save to localStorage when children state changes too
    this.saveToLocalStorage();
  }

  onComplete() {
    // Clear localStorage when form is completed
    this.clearLocalStorage();
    
    (async () => {
      await this.router.navigate(["/fsos"]);
    })();
  }

  onDeleteCancel() {
    this.showDeleteModal = false;
  }

  onDeleteConfirm() {
    this.showDeleteModal = false;
    this._childFormController.remove(this.deleteIndex);
  }

  onPageChange(e: Event, from: Page) {
    let dest: Page | undefined = undefined;
    switch (from) {
      case "what-is-your-role":
        dest = this.handleRole(e);
        break;
      case "description":
        dest = this.handleDescription(e);
        break;
      case "payor-name":
        dest = this.handlePayorName(e);
        break;
      case "children-subform":
        // no validation required here
        dest = "address";
        break;
      case "address":
        dest = this.handleAddress(e);
        break;
      case "summary":
        break;
      default:
        console.warn("Unhandled page", from);
        break;
    }

    if (dest) {
      this._mainFormController.continueTo(dest);
    }
  }

  onChildPageChange(e: Event, from: ChildPage) {
    let dest: ChildPage | undefined = undefined;
    switch (from) {
      case "name":
        dest = this.handleChildrenNames(e);
        break;
      case "alternate-name":
        dest = this.handleChildrenAlternateName(e);
        break;
      case "dob":
        dest = this.handleChildDateOfBirth(e);
        break;
      default:
        console.warn("Unhandled page", from);
        break;
    }

    if (dest) {
      this._childFormController.continueTo(dest);
    }
  }

  // ===========
  // Validations
  // ===========

  handleRole(e: Event): Page | undefined {
    const [ok, value] = this._mainFormController.validate(e, "role", [
      requiredValidator("Role is required"),
      lengthValidator({ min: 2 }),
    ]);
    if (!ok) {
      return;
    }

    if (value === "Payor") {
      return "payor-name";
    }

    return "description";
  }

  handleDescription(e: Event): Page | undefined {
    return "children-subform";
  }

  handlePayorName(_: Event): Page | undefined {
    return "address";
  }

  handleAddress(e: Event): Page | undefined {
    const [cityOk] = this._mainFormController.validate(e, "city", [requiredValidator()]);
    const [addressOk] = this._mainFormController.validate(e,"address", [
      requiredValidator(),
    ]);
    const [postalCodeOk] = this._mainFormController.validate(e,"postal-code", [
      requiredValidator(),
    ]);

    if (!cityOk || !addressOk || !postalCodeOk) {
      return;
    }

    return "summary";
  }

  // Children

  handleChildrenNames(e: Event): ChildPage | undefined {
    const [firstNameOk] = this._childFormController.validate(e, "firstName", [
      requiredValidator(),
    ]);
    const [lastNameOk] = this._childFormController.validate(e, "lastName", [
      requiredValidator(),
    ]);
    const [middleNameOk] = this._childFormController.validate(e, "middleName", [
      lengthValidator({min: 2})
    ]);
    if (!firstNameOk || !lastNameOk || !middleNameOk) return;

    return "alternate-name";
  }
  handleChildrenAlternateName(e: Event): ChildPage | undefined {
    const [ok] = this._childFormController.validate(e, "alternate-name", [
      lengthValidator({ min: 2 }),
    ]);
    if (!ok) return;

    return "dob";
  }

  handleChildDateOfBirth(e: Event): ChildPage | undefined {
    const adult = new Date();
    adult.setFullYear(adult.getFullYear() - 18);
    const [ok] = this._childFormController.validate(e, "dob", [
      dateValidator({ min: adult, minMsg: "Child must be less that 18 years old" }),
    ]);

    if (!ok) return;

    return "complete";
  }

  // ====================
  // LocalStorage Methods
  // ====================

  /**
   * Load form state from localStorage
   * @returns Parsed state object or null if not found/invalid
   */
  private loadFromLocalStorage() {
    try {
      const saved = localStorage.getItem("support-order-details");
      if (saved) {
        console.log("Loading form state from localStorage");
        return JSON.parse(saved);
      }
      return null;
    } catch (error) {
      console.warn("Failed to load form state from localStorage:", error);
      return null;
    }
  }

  /**
   * Save current form state to localStorage
   */
  private saveToLocalStorage() {
    try {
      const stateToSave = {
        mainForm: this._mainFormController.state,
        childForm: this._childFormController.state,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(
        "support-order-details",
        JSON.stringify(stateToSave)
      );
      console.log("Form state saved to localStorage");
    } catch (error) {
      console.error("Failed to save form state to localStorage:", error);
    }
  }

  /**
   * Clear form state from localStorage
   */
  private clearLocalStorage() {
    try {
      localStorage.removeItem("support-order-details");
      console.log("Form state cleared from localStorage");
    } catch (error) {
      console.error("Failed to clear form state from localStorage:", error);
    }
  }

  /**
   * Check if there's saved state in localStorage
   * @returns boolean indicating if saved state exists
   */
  hasSavedState(): boolean {
    try {
      const saved = localStorage.getItem("support-order-details");
      return saved !== null;
    } catch (error) {
      return false;
    }
  }
}

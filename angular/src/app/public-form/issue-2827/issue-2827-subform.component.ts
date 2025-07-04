import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  GoabFormState,
  PublicFormController,
  requiredValidator,
} from "@abgov/ui-components-common";
import {
  GoabButton,
  GoabFieldset,
  GoabFormItem,
  GoabInput,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabRadioGroup,
  GoabRadioItem,
  GoabTable,
  GoabText,
  GoabTextArea,
} from "@abgov/angular-components";

type Page = "2B.1" | "2B.2" | "2B.3" | "2B.4" | "2B.5" | "2B.Review";
type DependentPage = "dependent-name" | "2B.3.Review";

@Component({
  selector: "abgov-issue-2827-subform",
  standalone: true,
  templateUrl: "./issue-2827-subform.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    GoabButton,
    GoabFieldset,
    GoabFormItem,
    GoabInput,
    GoabPublicForm,
    GoabPublicFormPage,
    GoabPublicFormSummary,
    GoabRadioGroup,
    GoabRadioItem,
    GoabTable,
    GoabText,
    GoabTextArea,
  ],
})
export class Issue2827SubformComponent implements OnInit {
  // Main form controller for Section2B pages
  _mainFormController: PublicFormController<Page>;

  // Dependents list controller (separate controller for subform)
  _childFormController: PublicFormController<DependentPage>;

  // State to track form completion
  formStatus: "initializing" | "complete" = "initializing";

  // State to track the dependents list
  dependentsList: Record<string, string>[] = [];

  // Visibility for continue button on multistep page
  continueButtonVisibility: "visible" | "hidden" = "hidden";

  // Display form state on completion
  formStateDisplay: string | null = null;

  completed = false;

  constructor() {
    this._mainFormController = new PublicFormController("details");
    this._childFormController = new PublicFormController("list");
    this.dependentsList = [];
  }

  // Main form initialization
  ngOnInit() {
    // Delay initialization to ensure SubForm is ready
    setTimeout(() => {
      // const raw = `{"uuid":"1d56d799-5241-4a82-9309-e948d9dd0221","form":{"what-is-your-role":{"heading":"What is your role in the court order?","data":{"type":"details","fieldsets":{"role":{"name":"role","value":"Recipient","label":"Role","order":1}}}},"children-subform":{"data":{"type":"list","items":[{"uuid":"e22c3c10-4dab-433e-9cb8-e33ec1585f6c","form":{"name":{"heading":"Name","data":{"type":"details","fieldsets":{"firstName":{"name":"firstName","value":"Wes","label":"First name","order":1},"lastName":{"name":"lastName","value":"Olsen","label":"Last name","order":2}}}},"alternate-name":{"heading":"Does your child go by a different name?"},"dob":{"heading":"Your child's birthdate","data":{"type":"details","fieldsets":{"d":{"name":"d","value":"2019-08-04","label":"Date of birth","order":1}}}},"complete":{"heading":"Summary"}},"history":["name","alternate-name","dob","complete"],"editting":"dob","lastModified":"2025-02-11T17:18:58.038Z","status":"not-started"},{"uuid":"18aee25d-db52-4cd9-bffd-927a804aaeb2","form":{"name":{"heading":"Name","data":{"type":"details","fieldsets":{"firstName":{"name":"firstName","value":"Colton","label":"First name","order":1},"lastName":{"name":"lastName","value":"Olsen","label":"Last name","order":2}}}},"dob":{"heading":"Your child's birthdate","data":{"type":"details","fieldsets":{"d":{"name":"d","value":"2012-03-01","label":"Date of birth","order":1}}}}},"history":["name","alternate-name","dob","complete"],"editting":"","lastModified":"2025-02-11T17:18:33.298Z","status":"not-started"}]}},"address":{"heading":"Your current address","data":{"type":"details","fieldsets":{"city":{"name":"city","value":"Edmonton","label":"City","order":1},"address":{"name":"address","value":"1012-9ave","label":"Address","order":2},"postal-code":{"name":"postal-code","value":"T6W2M3","label":"Postal Code","order":3}}}},"summary":{"heading":"Summary"},"index":{"heading":"Child(ren)'s profile"}},"history":["what-is-your-role","children-subform","address","summary"],"editting":"","status":"not-started"}`;
      const raw = `{}`;
      const data = JSON.parse(raw);
      this._mainFormController.initState(data, () => {
        console.log("Main form initialized");
        this.formStatus = "complete";
      });
    }, 1000);

    this.continueButtonVisibility = this.dependentsList.length > 0 ? "visible" : "hidden";
  }

  // Main form state change handler
  onMainFormStateChange(e: Event) {
    console.log("Main form state change:", e);
    this._mainFormController.updateObjectState(e);

    // Removed localStorage saving - following SupportOrderDetails pattern
    // localStorage.setItem(
    //   "issue-2827-subform",
    //   JSON.stringify(this._mainFormController.state)
    // );
  }

  onCompleteSection2B(e: Event) {
    console.log("Complete section2B", e);
    // Handle form completion and display the form state
    const formState = (e as CustomEvent).detail;
    this.formStateDisplay = JSON.stringify(formState, null, 2);
    this.completed = true;
  }

  onContinue(e: Event, from: Page) {
    console.log("onContinue", e, from);
    if ((e as CustomEvent).detail?.cancelled) return;

    let nextPage: Page | undefined;

    switch (from) {
      case "2B.1":
        nextPage = this.validate2B1(e);
        break;
      case "2B.2":
        nextPage = this.validate2B2(e);
        break;
      case "2B.3":
        nextPage = this.validate2B3(e);
        break;
      case "2B.4":
        nextPage = this.validate2B4(e);
        break;
      case "2B.5":
        nextPage = this.validate2B5(e);
        break;
      default:
        break;
    }

    if (nextPage) {
      this._mainFormController.continueTo(nextPage);
    }
  }

  validate2B1(e: Event): Page | undefined {
    const [isRequiredOk] = this._mainFormController.validate(e, "household-people", [
      requiredValidator("Please enter the number of people in your household."),
    ]);
    if (!isRequiredOk) return undefined;

    return "2B.2";
  }

  validate2B2(e: Event): Page | undefined {
    const [isRequiredOk, dependentsValue] = this._mainFormController.validate(e, "dependents", [
      requiredValidator("Please select an option."),
    ]);
    if (!isRequiredOk) return undefined;

    if (dependentsValue === "yes") {
      return "2B.3";
    } else {
      // If "No", go to review page
      return "2B.Review";
    }
  }

  validate2B3(e: Event): Page | undefined {
    console.log("validate2B3", e);

    // Check if we have at least one dependent
    const currentDependents = this._childFormController.getStateList();
    if (currentDependents.length === 0) {
      console.warn("No dependents added");
      return undefined;
    }

    // Continue to the next page
    return "2B.4";
  }

  validate2B4(e: Event): Page | undefined {
    const [isRequiredOk, healthValue] = this._mainFormController.validate(e, "dependents-health", [
      requiredValidator("Please select an option."),
    ]);
    if (!isRequiredOk) return undefined;

    if (healthValue === "yes") {
      return "2B.5";
    } else {
      // If "No", go to review page
      return "2B.Review";
    }
  }

  validate2B5(e: Event): Page | undefined {
    const [isRequiredOk] = this._mainFormController.validate(e, "health-details", [
      requiredValidator("Please provide details about health conditions or accommodations."),
    ]);
    if (!isRequiredOk) return undefined;

    // After entering health details, go to review page
    return "2B.Review";
  }

  // Subform event handlers
  onSubformInit(e: Event) {
    console.log("Subform init:", e);
    this._childFormController.initList(e);
    // Don't set dependentsList here - wait for the state to be properly initialized
    // The onSubformStateChange will be called with the correct state
  }

  onSubformStateChange(e: Event) {
    console.log("Subform state change:", e);
    this._childFormController.updateListState(e);
    this.dependentsList = [...this._childFormController.getStateList()];
    this.continueButtonVisibility = this.dependentsList.length > 0 ? "visible" : "hidden";
  }

  // Dependent list management
  handleEditDependent(index: number) {
    this._childFormController.edit(index);
  }

  handleDeleteDependent(index: number) {
    this._childFormController.remove(index);
    this.dependentsList = [...this._childFormController.getStateList()];
    this.continueButtonVisibility = this.dependentsList.length > 0 ? "visible" : "hidden";
  }

  // Subform validation
  onDependentContinue(e: Event, from: DependentPage) {
    if ((e as CustomEvent).detail?.cancelled) return;

    switch (from) {
      case "dependent-name":
        this.validateDependant(e);
        break;
    }
  }

  validateDependant(e: Event) {
    const [isValid] = this._childFormController.validate(e, "fullName", [
      requiredValidator("Please enter the dependent's full name."),
    ]);
    if (isValid) {
      this._childFormController.completeSubform();
      // this._childFormController.continueTo("2B.3.Review");
    }
  }
}

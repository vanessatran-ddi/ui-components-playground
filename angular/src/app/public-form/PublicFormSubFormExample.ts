import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabPublicSubform,
  GoabPublicSubformIndex,
  GoabFieldset,
  GoabFormItem,
  GoabInput,
  GoabRadioGroup,
  GoabRadioItem,
  GoabButton,
  GoabButtonGroup,
  GoabTable,
  GoabText,
  GoabTextArea,
  GoabModal,
  GoabCircularProgress,
} from "@abgov/angular-components";

import { PublicFormController } from "@abgov/ui-components-common";

type Page = "household-size" | "has-dependents" | "dependents-subform" | "health-conditions" | "health-details" | "summary";
type DependentPage = "dependent-info" | "dependent-summary";

@Component({
  selector: "abgov-public-form-subform-example",
  templateUrl: "./PublicFormSubFormExample.html",
  standalone: true,
  imports: [
    GoabPublicForm,
    GoabPublicFormPage,
    GoabPublicFormSummary,
    GoabPublicSubform,
    GoabPublicSubformIndex,
    GoabFieldset,
    GoabFormItem,
    GoabInput,
    GoabRadioGroup,
    GoabRadioItem,
    GoabButton,
    GoabButtonGroup,
    GoabTable,
    GoabText,
    GoabTextArea,
    GoabModal,
    GoabCircularProgress
]
})
export class PublicFormSubFormExampleComponent implements OnInit {
  _mainFormController: PublicFormController<Page>;
  _dependentsFormController: PublicFormController<DependentPage>;

  continueButtonVisibility: "visible" | "hidden" = "hidden";
  showDeleteModal = false;
  formStatus: "initializing" | "complete" = "initializing";
  deleteIndex = -1;
  showSpinner = "true";
  
  // Cache the dependents list to prevent change detection issues
  dependentsList: Record<string, string>[] = [];

  dependents(): Record<string, string>[] {
    return this.dependentsList;
  }

  private updateDependentsList() {
    this.dependentsList = this._dependentsFormController.getStateList();
  }

  private updateButtonVisibility() {
    this.continueButtonVisibility = this.dependents().length > 0 ? "visible" : "hidden";
  }

  constructor(private router: Router) {
    this._mainFormController = new PublicFormController("details");
    this._dependentsFormController = new PublicFormController("list");
  }

  ngOnInit(): void {
    setTimeout(() => {
      // Initialize with empty state
      const raw = `{}`;
      const data = JSON.parse(raw);
      this._mainFormController.initState(data, () => {
        this.formStatus = "complete";
        this.showSpinner = "false";
      });
    }, 1000);

    this.updateDependentsList();
    this.updateButtonVisibility();
  }

  init(e: Event) {
    this._mainFormController.init(e);
  }

  initDependentsSubform(e: Event) {
    this._dependentsFormController.initList(e);
  }

  editDependent(index: number) {
    this._dependentsFormController.edit(index);
  }

  updateState(state: any) {
    console.log("sub form state changed triggered", state);
    // For Angular components, the state change event passes the state directly
    // No need to call updateObjectState as the state is already updated
    
    // Use setTimeout to ensure state updates happen in next change detection cycle
    setTimeout(() => {
      this.updateDependentsList();
      this.updateButtonVisibility();
    });
  }

  updateDependentsState(e: Event) {
    console.log("SubForm _stateChanged triggered", e);
    this._dependentsFormController.updateListState(e);
    
    // Use setTimeout to ensure state updates happen in next change detection cycle
    setTimeout(() => {
      this.updateDependentsList();
      this.updateButtonVisibility();
    });
  }

  onComplete() {
    console.log("Form completed");
    alert("Form submitted successfully!");
  }

  showModal(index: number) {
    this.showDeleteModal = true;
    this.deleteIndex = index;
  }

  onDeleteCancel() {
    this.showDeleteModal = false;
  }

  onDeleteConfirm() {
    this.showDeleteModal = false;
    this._dependentsFormController.remove(this.deleteIndex);
    
    // Use setTimeout to ensure state updates happen in next change detection cycle
    setTimeout(() => {
      this.updateDependentsList();
      this.updateButtonVisibility();
    });
  }

  onPageChange(e: Event, from: Page) {
    if ((e as CustomEvent).detail?.cancelled) return;

    let dest: Page | undefined = undefined;
    switch (from) {
      case "household-size":
        dest = "has-dependents";
        break;
      case "has-dependents":
        dest = "dependents-subform";
        break;
      case "dependents-subform":
        dest = "health-conditions";
        break;
      case "health-conditions":
        dest = "health-details";
        break;
      case "health-details":
        dest = "summary";
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

  onDependentPageChange(e: Event, from: DependentPage) {
    let dest: DependentPage | undefined = undefined;
    switch (from) {
      case "dependent-info":
        dest = "dependent-summary";
        break;
      default:
        console.warn("Unhandled page", from);
        break;
    }

    if (dest) {
      this._dependentsFormController.continueTo(dest);
    }
  }

  // ===========
  // Validations
  // ===========

}

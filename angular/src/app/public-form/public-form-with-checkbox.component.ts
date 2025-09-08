/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from "@angular/core";
import { CommonModule, JsonPipe } from "@angular/common";
import { GoabCheckboxListOnChangeDetail, GoabFormState, PublicFormController } from "@abgov/ui-components-common";
import {
  GoabButton,
  GoabButtonGroup,
  GoabCheckbox,
  GoabCheckboxList,
  GoabInput,
  GoabFormItem,
  GoabFieldset,
  GoabModal,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabRadioGroup,
  GoabRadioItem,
} from "@abgov/angular-components";
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from "@angular/forms";

type Page = "communication" | "interests" | "summary";

@Component({
  selector: "abgov-checkbox-list",
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    GoabCheckboxList,
    GoabCheckbox,
    JsonPipe,
    GoabButton,
    GoabButtonGroup,
    GoabInput,
    GoabFormItem,
    GoabFieldset,
    GoabModal,
    GoabPublicForm,
    GoabPublicFormPage,
    GoabPublicFormSummary,
    GoabRadioGroup,
    GoabRadioItem
  ],
  templateUrl: "./public-form-with-checkbox.component.html",
  styles: [
    `
      .playground {
        padding: 20px;
        max-width: 800px;
      }

      section {
        margin-bottom: 40px;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
      }

      h2 {
        margin-top: 0;
        margin-bottom: 16px;
        color: #333;
      }

      p {
        margin-top: 16px;
        font-size: 14px;
        color: #666;
      }
    `,
  ],
})
export class PublicFormWithCheckboxComponent extends PublicFormController<Page> {
  // Component state
  contactPreferences: string[] = ["email"];
  preferredDays: string[] = [];
  requiredSelection: string[] = [];
  hasRequiredError: boolean = false;
  disabledSelection: string[] = ["disabled1"];
  customWidthSelection: string[] = [];

  selectAllBasic: string[] = [];

  manualContactPreferences: string[] = [];
  private readonly manualContactOptions = ["email", "phone", "sms"];

  // Reactive forms example
  rf!: FormGroup;
  // New combined reactive example form
  form!: FormGroup;
  // Template-driven example state
  ngModelSelection: string[] = ["template2"];



  // Public form state
  _showConfirmationModal = false;

  // Track checkbox list values for public form
  contactMethodsValue: string[] = [];
  newsletterSubscriptionsValue: string[] = [];
  topicsOfInterestValue: string[] = [];

  constructor(private fb: FormBuilder) {
    super("details");
    this.rf = this.fb.group({
      fruits: this.fb.control<string[] | null>(["apple", "banana"]),
    });

    // Combined reactive form with two checkbox lists
    this.form = this.fb.group({
      contactPreferences: this.fb.control<string[] | null>(["email", "sms"]),
      interests: this.fb.control<string[] | null>([]),
    });

    // Optional: subscribe for demo logging
    this.form.get("contactPreferences")?.valueChanges.subscribe((value) => {
      console.log("Contact preferences changed:", value);
    });
  }

  onContactPreferencesChange(event: GoabCheckboxListOnChangeDetail) {
    console.log("Contact preferences changed:", event);
    this.contactPreferences = event.value;
  }

  onRequiredSelectionChange(event: GoabCheckboxListOnChangeDetail) {
    console.log("Required selection changed:", event);
    this.requiredSelection = event.value;
    this.hasRequiredError = event.value.length === 0;
  }

  onDisabledSelectionChange(event: GoabCheckboxListOnChangeDetail) {
    console.log("Disabled selection changed:", event);
    this.disabledSelection = event.value;
  }

  onManualContactPreferencesChange(event: GoabCheckboxListOnChangeDetail) {
    this.manualContactPreferences = event.value;
  }

  get manualAllChecked(): boolean {
    return this.manualContactPreferences.length === this.manualContactOptions.length;
  }

  get manualAllIndeterminate(): boolean {
    const len = this.manualContactPreferences.length;
    return len > 0 && len < this.manualContactOptions.length;
  }

  toggleManualAll() {
    if (this.manualAllChecked) {
      this.manualContactPreferences = [];
    } else {
      this.manualContactPreferences = [...this.manualContactOptions];
    }
  }

  // Reactive example helpers
  clearReactive() {
    this.rf.get("fruits")?.setValue([]);
    this.rf.markAsPristine();
    this.rf.markAsUntouched();
  }

  setReactive() {
    this.rf.get("fruits")?.setValue(["apple", "banana"]);
  }

  // --- New combined example handlers ---
  resetForm() {
    // Use reset with explicit empty arrays to avoid nulls and ensure UI updates
    this.form.reset({ contactPreferences: [], interests: [] });
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }

  setFormValues() {
    this.form.setValue({
      contactPreferences: ["email", "sms"],
      interests: ["sports", "music"],
    });
  }

  // --- Template-driven (ngModel) helpers ---
  setNgModelValue() {
    this.ngModelSelection = ["template1", "template3"];
  }

  clearNgModelValue() {
    this.ngModelSelection = [];
  }

  // Public form methods
  showConfirmation(state: GoabFormState) {
    console.log("Checkbox List Public Form completed with state:", state);
    this._showConfirmationModal = true;
  }

  hideConfirmationModal() {
    this._showConfirmationModal = false;
  }

  submitPublicForm() {
    console.log("Checkbox List Public Form submitted");
    this._showConfirmationModal = false;
  }

  onPageChange(e: Event, from: string) {
    let dest: Page | undefined = undefined;
    console.log("onPageChange ", e);
    switch (from) {
      case "communication":
        dest = this.validateCommunication(e);
        break;
      case "interests":
        dest = this.validateInterests(e);
        break;
      case "summary":
        break;
    }
    if (dest) {
      this.continueTo(dest);
    }
  }

  validateCommunication(e: Event): Page | undefined {
    return "interests";
  }

  validateInterests(e: Event): Page | undefined {
    return "summary";
  }

  // Public form checkbox list change handlers
  onContactMethodsChange(event: GoabCheckboxListOnChangeDetail) {
    console.log("Contact methods changed:", event);
    this.contactMethodsValue = event.value;
  }

  onNewsletterSubscriptionsChange(event: GoabCheckboxListOnChangeDetail) {
    console.log("Newsletter subscriptions changed:", event);
    this.newsletterSubscriptionsValue = event.value;
  }

  onTopicsOfInterestChange(event: GoabCheckboxListOnChangeDetail) {
    console.log("Topics of interest changed:", event);
    this.topicsOfInterestValue = event.value;
  }

}


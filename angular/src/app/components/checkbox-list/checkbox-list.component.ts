import { GoabCheckboxList, GoabCheckbox, GoabFormItem, GoabButton } from "@abgov/angular-components";
import { GoabCheckboxListOnChangeDetail } from "@abgov/ui-components-common";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { JsonPipe, CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "abgov-checkbox-list",
  templateUrl: "./checkbox-list.component.html",
  imports: [
    GoabCheckboxList,
    GoabCheckbox,
    GoabFormItem,
    ReactiveFormsModule,
    FormsModule,
    JsonPipe,
    CommonModule,
    GoabButton,
  ],
})
export class CheckboxListComponent {
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

  // FormControl and ngModel examples
  checkboxListFormControl = new FormControl<string[]>(['react1']);
  ngModelSelection: string[] = ['template2'];

  // Reactive form
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      interests: [['music']]
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

  // FormControl methods
  setFormControlValue() {
    this.checkboxListFormControl.setValue(['react1', 'react3']);
  }

  resetFormControl() {
    this.checkboxListFormControl.setValue([]);
  }

  // ngModel methods
  setNgModelValue() {
    this.ngModelSelection = ['template1', 'template3'];
  }

  clearNgModelValue() {
    this.ngModelSelection = [];
  }

  // Reactive form methods
  onReactiveFormSubmit() {
    console.log('Reactive form submitted:', this.reactiveForm.value);
  }

  resetReactiveForm() {
    this.reactiveForm.reset();
  }
}

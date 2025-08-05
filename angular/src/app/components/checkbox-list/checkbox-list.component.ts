import { GoabCheckboxList, GoabCheckboxListItem, GoabFormItem } from "@abgov/angular-components";
import { GoabCheckboxListOnChangeDetail } from "@abgov/ui-components-common";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";

@Component({
  standalone: true,
  selector: "abgov-checkbox-list",
  templateUrl: "./checkbox-list.component.html",
  imports: [
    GoabCheckboxList,
    GoabCheckboxListItem,
    GoabFormItem,
    ReactiveFormsModule,
    FormsModule,
    JsonPipe,
  ]
})
export class CheckboxListComponent {
  selectedValues: string[] = [];
  selectedValues2: string[] = ['email', 'phone'];
  selectedValues3: string[] = [];
  selectedValues4: string[] = ['option1'];

  // ngModel examples
  ngModelValues: string[] = ['phone', 'sms'];
  templateDrivenFormData = {
    notifications: ['email'] as string[],
    permissions: [] as string[]
  };

  // Reactive form
  form: FormGroup;
  checkboxListControl = new FormControl(['email']);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      contactPreferences: [['email', 'sms']],
      interests: [[]]
    });

    // Subscribe to form changes
    this.form.get('contactPreferences')?.valueChanges.subscribe(value => {
      console.log('Contact preferences changed:', value);
    });

    this.checkboxListControl.valueChanges.subscribe(value => {
      console.log('Checkbox list control changed:', value);
    });
  }

  onChange(event: GoabCheckboxListOnChangeDetail) {
    console.log("CheckboxList onChange triggered:", event);
    this.selectedValues = event.values || [];
  }

  onChange2(event: GoabCheckboxListOnChangeDetail) {
    console.log("CheckboxList onChange2 triggered:", event);
    this.selectedValues2 = event.values || [];
  }

  onChange3(event: GoabCheckboxListOnChangeDetail) {
    console.log("CheckboxList onChange3 triggered:", event);
    this.selectedValues3 = event.values || [];
  }

  onChange4(event: GoabCheckboxListOnChangeDetail) {
    console.log("CheckboxList onChange4 triggered:", event);
    this.selectedValues4 = event.values || [];
  }

  onFormSubmit() {
    console.log('Form submitted with values:', this.form.value);
  }

  resetForm() {
    this.form.reset();
    this.selectedValues = [];
    this.selectedValues2 = [];
    this.selectedValues3 = [];
    this.selectedValues4 = [];
  }

  setFormValues() {
    this.form.patchValue({
      contactPreferences: ['email', 'phone', 'mail'],
      interests: ['sports', 'music']
    });
  }

  onTemplateFormSubmit(formValue: any) {
    console.log('Template form submitted with values:', formValue);
  }
}
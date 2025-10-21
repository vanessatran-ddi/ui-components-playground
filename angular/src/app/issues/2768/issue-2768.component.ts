import { GoabButton, GoabFormItem, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  standalone: true,
  selector: "abgov-issue-2768",
  templateUrl: "./issue-2768.component.html",
  imports: [
    GoabRadioGroup,
    GoabRadioItem,
    GoabFormItem,
    GoabButton,
    ReactiveFormsModule
  ]
})
export class Issue2768Component {
  // Method 1: Property binding approach
  radioDisabled = true;
  selectedValue = '';

  // Method 2: FormControl approach
  radioFormControl = new FormControl({ value: '', disabled: true });

  toggleDisabled() {
    this.radioDisabled = !this.radioDisabled;
  }

  toggleFormControlDisabled() {
    if (this.radioFormControl.disabled) {
      this.radioFormControl.enable();
    } else {
      this.radioFormControl.disable();
    }
  }

  handleRadioChange(event: GoabRadioGroupOnChangeDetail) {
    this.selectedValue = event.value as string;
  }
}

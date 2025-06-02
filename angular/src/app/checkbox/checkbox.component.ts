import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormControl, ReactiveFormsModule, FormsModule } from "@angular/forms";
@Component({
  selector: "abgov-checkbox",
  templateUrl: "./checkbox.component.html",
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheckboxComponent {
  checkbox1Checked = false;
  checkbox2Checked = true;
  checkbox3Checked = false;
  reactiveFormCtrl = new FormControl();
  testFormCtrl = new FormControl({
    value: null,
    disabled: true,
  });
  test1FormCtrl = new FormControl();
  bindingVal = "";
  bindingNoVal = "";



  constructor() {
    // this.testFormCtrl.disable();
  }

  onChange() {
    this.checkbox1Checked = !this.checkbox1Checked;
  }

  onChange2() {
    this.checkbox2Checked = !this.checkbox2Checked;
  }

  onChange3() {
    this.checkbox3Checked = !this.checkbox3Checked;
  }

  phoneNumber = "";
  emailAddress = "";
  optionOneChecked = false;
  optionTwoChecked = false;
  optionThreeChecked = false;

  updateContactMethod(event: any) {
    const value = (event as CustomEvent).detail.value;
    if (value === "email") {
      this.optionOneChecked = true;
    }
    if (value === "phone") {
      this.optionTwoChecked = true;
    }
  }
  updatePhoneNumber(event: any) {
    this.phoneNumber = (event as CustomEvent).detail.value;
  }
  updateEmailAddress(event: any) {
    this.emailAddress = (event as CustomEvent).detail.value;
  }
}

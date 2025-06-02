import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { GoabCheckbox, GoabFormItem, GoabInput } from "@abgov/angular-components";
@Component({
  selector: "abgov-doc-checkbox-reveal-example",
  standalone: true,
  templateUrl: "./doc-checkbox-reveal-example.component.html",
  imports: [ReactiveFormsModule, GoabFormItem, GoabCheckbox, GoabInput],
})
export class DocCheckboxRevealExampleComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      emailContactMethod: [false],
      phoneContactMethod: [false],
      textContactMethod: [false],
      emailAddress: [""],
      phoneNumber: [""],
    });
  }
}

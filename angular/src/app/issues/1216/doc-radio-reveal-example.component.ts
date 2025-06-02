import { Component } from "@angular/core";
import { GoabFormItem, GoabInput, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: "abgov-doc-radio-reveal-example",
  templateUrl: "./doc-radio-reveal-example.component.html",
  imports: [GoabFormItem, GoabRadioGroup, ReactiveFormsModule, GoabRadioItem, GoabInput],
  standalone: true,
})
export class DocRadioRevealExampleComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      contactMethod: [""],
      phoneNumber: [""],
      emailAddress: [""],
    });
  }
}

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { GoabCheckbox, GoabCheckboxOnChangeDetail, GoabFormItem } from "@abgov/angular-components";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "abgov-issue3001",
  standalone: true,
  templateUrl: "./issue3001.component.html",
  imports: [ReactiveFormsModule, GoabCheckbox, GoabFormItem, FormsModule, JsonPipe],
})
export class Issue3001Component {
  toppings!: FormGroup;
  testForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.toppings = this.fb.group({
      pepperoni: "",
      extracheese: "",
      mushroom: "",
    });
    this.testForm = this.fb.group({
      pepperoni: "",
    });
  }

  item = "";
  checkboxOnChange(event: GoabCheckboxOnChangeDetail) {
    console.log(event);
    console.log(event);
    this.item = event.value as string;
  }
}

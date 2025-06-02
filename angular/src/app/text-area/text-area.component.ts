import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "abgov-text-area",
  templateUrl: "./text-area.component.html",
  standalone: true,
  imports: [JsonPipe, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TextAreaComponent {
  boundVal = "";
  reactiveFormCtrl = new FormControl();
  form = new FormGroup({
    textarea: new FormControl(),
    input: new FormControl(),
  });

  constructor() {}

  onChange(e: any) {
    console.log("changed", e.detail.name, e.detail.value);
  }

  onKeyPress(e: any) {
    console.log("changed", e.detail.name, e.detail.value, e.detail.key);
  }
}

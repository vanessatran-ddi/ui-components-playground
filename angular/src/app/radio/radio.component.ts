import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";

@Component({
  selector: "abgov-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.css"],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NgForOf, ReactiveFormsModule, FormsModule],
  standalone: true,
})
export class RadioComponent {
  constructor() {}

  boundVal = "";

  reactiveFormCtrl = new FormControl();

  contactMethodFormCtrl = new FormControl();
  phoneNumberFormCtrl = new FormControl();
  emailFormCtrl = new FormControl();

  dynamicItems = [
    {
      name: "Fruits",
      value: "banana",
      options: [{ value: "apple" }, { value: "orange" }, { value: "banana" }],
    },
    {
      name: "Vegetables",
      value: "carrot",
      options: [{ value: "brocolli" }, { value: "carrot" }, { value: "spinach" }],
    },
  ];

  onChange(e: any) {
    console.log("onChange", e.detail.name, e.detail.value);
  }
}

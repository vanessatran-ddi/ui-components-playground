import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-button-component",
  templateUrl: "./button.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
  constructor() {}

  onClick() {
    console.log("clicked");
  }
}

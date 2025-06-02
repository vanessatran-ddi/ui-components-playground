import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-button-group",
  templateUrl: "./button-group.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonGroupComponent {
  constructor() {}

  onClick() {
    console.log("clicked");
  }
}

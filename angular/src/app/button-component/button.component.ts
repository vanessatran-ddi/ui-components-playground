import { Component } from "@angular/core";

@Component({
  selector: "abgov-button-component",
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  constructor() {}

  onClick() {
    console.log("clicked");
  }
}

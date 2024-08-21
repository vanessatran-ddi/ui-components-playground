import { Component } from "@angular/core";

@Component({
  selector: "abgov-button-group",
  templateUrl: "./button-group.component.html",
})
export class ButtonGroupComponent {
  constructor() {}

  onClick() {
    console.log("clicked");
  }
}

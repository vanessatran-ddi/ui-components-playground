import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-icon",
  templateUrl: "./icon.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconComponent {
  iconTheme = "outline";
  iconType = "accessibility";
  constructor() {}

  changeTheme() {
    this.iconTheme = this.iconTheme === "filled" ? "outline" : "filled";
  }
}

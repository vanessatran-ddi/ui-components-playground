import { Component } from "@angular/core";

@Component({
  selector: "abgov-icon",
  templateUrl: "./icon.component.html"
})
export class IconComponent {
  iconTheme = "outline";
  iconType = "accessibility";
  constructor() {}

  changeTheme() {
    this.iconTheme = this.iconTheme === "filled" ? "outline" : "filled";
  }
}

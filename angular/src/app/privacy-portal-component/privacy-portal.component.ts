import { Component } from "@angular/core";

@Component({
  selector: "abgov-privacy-portal",
  templateUrl: "./privacy-portal.component.html",
})
export class PrivacyPortalComponent {
  showDrawer = false;
  toggleDrawer() {
    this.showDrawer=!this.showDrawer;
  }
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-privacy-portal",
  templateUrl: "./privacy-portal.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrivacyPortalComponent {
  showDrawer = false;
  toggleDrawer() {
    this.showDrawer=!this.showDrawer;
  }
}

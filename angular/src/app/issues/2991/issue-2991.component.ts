import { Component } from '@angular/core';
import { GoabFormItem, GoabInput } from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2991",
  standalone: true,
  imports: [GoabFormItem, GoabInput],
  templateUrl: "./issue-2991.component.html",
})
export class Issue2991Component {
  // Form values for data binding
  streetAddress = "";
  email = "";
  phone = "";
  username = "";
  password = "";
  searchTerm = "";
  city = "";
  noLabelValue = "";

  // Error state control
  showPasswordError = false;

  /**
   * Handle input change events
   * @param event - The change event from goab-input
   */
  handleInputChange(event: any): void {
    const target = event.target || event.detail;
    const name = target.name;
    const value = target.value;

    // Update the corresponding property based on input name
    switch (name) {
      case "street-address-basic":
        this.streetAddress = value;
        break;
      case "email-required":
        this.email = value;
        break;
      case "phone-optional":
        this.phone = value;
        break;
      case "username-help":
        this.username = value;
        break;
      case "password-error":
        this.password = value;
        break;
      case "search-aria-label":
        this.searchTerm = value;
        break;
      case "city-aria-labelledby":
        this.city = value;
        break;
      case "no-label":
        this.noLabelValue = value;
        break;
    }

    console.log(`Input changed: ${name} = ${value}`);
  }

  /**
   * Toggle the password error state for testing error message announcements
   */
  togglePasswordError(): void {
    this.showPasswordError = !this.showPasswordError;
    console.log(`Password error state: ${this.showPasswordError}`);
  }
}

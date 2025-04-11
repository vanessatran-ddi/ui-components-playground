import { GoabNotification } from "@abgov/angular-components";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "abgov-notification-banner",
  templateUrl: "./notification-banner.component.html",
  imports: [
    GoabNotification,
  ]
})
export class NotificationBannerComponent {
  constructor() { }

  onDismiss() {
    console.log("dismissed");
  }
}

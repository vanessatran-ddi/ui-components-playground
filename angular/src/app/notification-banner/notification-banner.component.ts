import { Component } from "@angular/core";

@Component({
  selector: "abgov-notification-banner",
  templateUrl: "./notification-banner.component.html"
})
export class NotificationBannerComponent {
  constructor() {}

  onDismiss() {
    console.log("dismissed");
  }
}

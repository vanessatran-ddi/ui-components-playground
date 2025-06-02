import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "abgov-notification-banner",
  templateUrl: "./notification-banner.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotificationBannerComponent {
  constructor() {}

  onDismiss() {
    console.log("dismissed");
  }
}

import { GoabTemporaryNotification, GoabTemporaryNotificationCtrl, TemporaryNotification, TemporaryNotificationShortDuration, TemporaryNotificationMediumDuration, TemporaryNotificationLongDuration } from "@abgov/angular-components";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "abgov-temporary-notification",
  templateUrl: "./temporary-notification.component.html",
  imports: [
    GoabTemporaryNotification,
    GoabTemporaryNotificationCtrl,
  ]
})
export class TemporaryNotificationComponent {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  showBasicNotification() {
    TemporaryNotification.show("This is a basic notification message", {
      type: "basic",
      duration: 1000
    });
  }

  showSuccessNotification() {
    TemporaryNotification.show("Item saved successfully!", {
      type: "success",
      duration: TemporaryNotificationMediumDuration
    });
  }

  showFailureNotification() {
    TemporaryNotification.show("Failed to save item. Please try again.", {
      type: "failure",
      duration: TemporaryNotificationLongDuration
    });
  }

  showNotificationWithAction() {
    console.log("Showing notification with action button");
    TemporaryNotification.show("Item deleted", {
      type: "basic",
      duration: TemporaryNotificationLongDuration,
      actionText: "Undo",
      action: () => {
        console.log("🔥 Action button clicked! Undo action triggered");
        TemporaryNotification.show("Action undone", { 
          type: "success",
          duration: 2000
        });
      }
    });
  }

  showMultipleNotifications() {
    TemporaryNotification.show("First notification", { 
      type: "basic",
      duration: 2000
    });

    setTimeout(() => {
      TemporaryNotification.show("Second notification", { 
        type: "success",
        duration: 2000
      });
    }, 2500);

    setTimeout(() => {
      TemporaryNotification.show("Third notification", { 
        type: "failure",
        duration: 2000
      });
    }, 5000);
  }

  showProgressNotification() {
    const uuid = TemporaryNotification.show("Processing...", {
      type: "indeterminate",
      duration: 0 // Don't auto-dismiss
    });

    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      TemporaryNotification.setProgress(uuid, progress);

      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 300);
  }

  showTopPositionedNotification() {
    TemporaryNotification.show("This would appear at the top with a separate controller", {
      type: "basic",
      duration: TemporaryNotificationMediumDuration
    });
  }

  onStaticActionClick() {
    console.log("🎯 Static notification action button clicked!");
  }
}

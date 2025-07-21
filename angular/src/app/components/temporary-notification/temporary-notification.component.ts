import { GoabTemporaryNotificationCtrl, TemporaryNotification } from "@abgov/angular-components";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "abgov-temporary-notification",
  templateUrl: "./temporary-notification.component.html",
  imports: [
    GoabTemporaryNotificationCtrl,
  ]
})
export class TemporaryNotificationComponent {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  showBasicNotification() {
    TemporaryNotification.show("This is a basic notification message", {
      type: "basic",
      duration: "short"
    });
  }

  showSuccessNotification() {
    TemporaryNotification.show("Item saved successfully!", {
      type: "success",
      duration: "medium"
    });
  }

  showFailureNotification() {
    TemporaryNotification.show("Failed to save item. Please try again.", {
      type: "failure",
      duration: "long"
    });
  }

  showNotificationWithAction() {
    console.log("Showing notification with action button");
    TemporaryNotification.show("Item deleted", {
      type: "basic",
      duration: "long",
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
    console.log("Demo: Showing indeterminate first, then progress type");

    // Step 1: Show indeterminate type (no specific progress value)
    const uuid = TemporaryNotification.show("Initializing...", {
      type: "indeterminate",
      duration: 0 // Don't auto-dismiss
    });

    // Step 2: After 2 seconds, switch to progress type with actual progress
    setTimeout(() => {
      // Now use progress type with a specific progress value
      const progressUuid = TemporaryNotification.show("Uploading file...", {
        type: "progress",
        duration: 0,
        cancelUUID: uuid // Replace the indeterminate notification
      });

      // Start at 0% progress
      TemporaryNotification.setProgress(progressUuid, 0);

      // Simulate progress updates
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        TemporaryNotification.setProgress(progressUuid, progress);

        if (progress >= 100) {
          clearInterval(interval);
          // Show completion after reaching 100%
          setTimeout(() => {
            TemporaryNotification.show("Upload complete!", {
              type: "success",
              duration: 3000,
              cancelUUID: progressUuid
            });
          }, 500);
        }
      }, 400);
    }, 2000);
  }

  showTopPositionedNotification() {
    TemporaryNotification.show("This would appear at the top with a separate controller", {
      type: "basic",
      duration: "medium"
    });
  }

  onStaticActionClick() {
    console.log("🎯 Static notification action button clicked!");
  }

  showDirectProgressNotification() {
    console.log("Demo: Using progress type directly");

    // Directly show progress type with initial value
    const uuid = TemporaryNotification.show("Downloading...", {
      type: "progress", // This is the progress type!
      duration: 0 // Don't auto-dismiss
    });

    // Set initial progress
    TemporaryNotification.setProgress(uuid, 0);

    // Simulate download progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      // Just update the progress bar, don't create new notifications
      TemporaryNotification.setProgress(uuid, progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          TemporaryNotification.show("Download complete!", {
            type: "success",
            duration: 2000,
            cancelUUID: uuid
          });
        }, 300);
      }
    }, 200);
  }
}

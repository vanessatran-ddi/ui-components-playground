import { GoabTemporaryNotificationCtrl } from "@abgov/react-components";
import { TemporaryNotification, TemporaryNotificationLongDuration, TemporaryNotificationMediumDuration } from "@abgov/ui-components-common";

export const TemporaryNotificationPage = () => {
  const showBasicNotification = () => {
    TemporaryNotification.show("This is a basic notification message", {
      type: "basic",
      duration: 1000
    });
  };

  const showSuccessNotification = () => {
    TemporaryNotification.show("Item saved successfully!", {
      type: "success",
      duration: TemporaryNotificationMediumDuration
    });
  };

  const showFailureNotification = () => {
    TemporaryNotification.show("Failed to save item. Please try again.", {
      type: "failure",
      duration: TemporaryNotificationLongDuration
    });
  };

  const showNotificationWithAction = () => {
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
  };

  const showMultipleNotifications = () => {
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
  };

  const showProgressNotification = () => {
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
  };

  const showDirectProgressNotification = () => {
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
  };

  const showTopNotification = () => {
    TemporaryNotification.show("This would appear at the top with a separate controller", {
      type: "basic",
      duration: TemporaryNotificationMediumDuration
    });
  };

  const onStaticActionClick = () => {
    console.log("🎯 Static notification action button clicked!");
  };

  return (
    <>
      <h1>Temporary Notification</h1>

      <p>The Temporary Notification component provides a centralized way to display temporary messages across your application.</p>

      {/* Controller positioned at bottom-center */}
      <GoabTemporaryNotificationCtrl testId="temp-notification-ctrl" />

      <h2>Basic Examples</h2>

      <div style={{ marginBottom: '16px' }}>
        <button type="button" onClick={showBasicNotification} style={{ marginRight: '8px' }}>
          Show Basic Notification
        </button>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <button type="button" onClick={showSuccessNotification} style={{ marginRight: '8px' }}>
          Show Success Notification
        </button>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <button type="button" onClick={showFailureNotification} style={{ marginRight: '8px' }}>
          Show Failure Notification
        </button>
      </div>

      <h2>Advanced Examples</h2>

      <div style={{ marginBottom: '16px' }}>
        <button type="button" onClick={showNotificationWithAction} style={{ marginRight: '8px' }}>
          Show Notification with Action
        </button>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <button type="button" onClick={showMultipleNotifications} style={{ marginRight: '8px' }}>
          Show Multiple Notifications (Queue)
        </button>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <button type="button" onClick={showProgressNotification} style={{ marginRight: '8px' }}>
          Show Progress Notification (Indeterminate → Progress)
        </button>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <button type="button" onClick={showDirectProgressNotification} style={{ marginRight: '8px' }}>
          Show Direct Progress Notification
        </button>
      </div>

      <h2>Positioning Examples</h2>

      <p>The notification controller can be positioned at different locations. The examples above use bottom-center positioning.</p>

      {/* Additional controllers for positioning examples */}
      <h3>Alternative Positioning</h3>
      <p><strong>Note:</strong> To prevent duplicate notifications, only one controller is active. To test different positions, uncomment the controller below and comment out the main controller above.</p>

      <div style={{ marginBottom: '16px' }}>
        <button type="button" onClick={showTopNotification}>
          Show Notification (Currently goes to bottom - see note above)
        </button>
      </div>

      {/* Uncomment this controller and comment out the main one above to test top positioning */}
      {/* <GoabTemporaryNotificationCtrl verticalPosition="top" horizontalPosition="center" testId="top-ctrl" /> */}

      <h2>API Usage</h2>

      <pre><code>{`
// Basic usage
TemporaryNotification.show("Your message here");

// With options
TemporaryNotification.show("Message", {
  type: "success",                    // basic, success, failure, indeterminate, progress
  duration: TemporaryNotificationMediumDuration,  // LONG, MEDIUM, SHORT or custom ms
  actionText: "Undo",
  action: () => console.log("Action clicked")
});

// Progress notifications
const uuid = TemporaryNotification.show("Processing...", { type: "indeterminate" });
TemporaryNotification.setProgress(uuid, 50); // Set progress to 50%
      `}</code></pre>
    </>
  );
};

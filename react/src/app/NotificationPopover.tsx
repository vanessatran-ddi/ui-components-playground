import { useEffect, useRef, useState } from "react";
import {
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabContainer,
  GoabIcon,
  GoabLink,
  GoabPopover,
  GoabText,
  GoabTabs,
  GoabTab,
  GoabButtonGroup,
} from "@abgov/react-components";
import {
  GoaxWorkSideMenuItem,
  GoaxWorkSideNotificationCard,
  WorkSideNotificationType,
} from "@abgov/react-components/experimental";
import { createPortal } from "react-dom";
import "./notification-popover.css";

export const NotificationPopover = () => {
  const [notifications] = useState([
    {
      id: "1",
      type: "default",
      title: "Comments",
      description: "Harvey Don commented on your assigned case.",
      timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
    },
    {
      id: "2",
      type: "default",
      title: "Assignment",
      description: "Rita Lee assigned you a new case.",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      badge: <GoabBadge type={"success"} content={"New"} />,
    },
    {
      id: "3",
      type: "warning" as const,
      title: "Incoming outage",
      description:
        "Income and Employment Support (IES) service will be under maintenance from Thursday, September 15, 2024 at 10pm to Friday, September 16,2024 at 10am.",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      badge: <GoabBadge type={"warning"} content={"Outage"} />,
    },
  ]);

  const [yesterdayNotifications] = useState([
    {
      id: "4",
      type: "info",
      title: "Application update",
      description: "Gilbert Barton's application for income support was approved.",
      timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000), // 26 hours ago (yesterday morning),
      badge: <GoabBadge type={"success"} content={"Approved"} />,
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ left: 0, top: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutsideButton = buttonRef.current && !buttonRef.current.contains(event.target as Node);
      const clickedOutsidePopover = popoverRef.current && !popoverRef.current.contains(event.target as Node);
      if (clickedOutsideButton && clickedOutsidePopover) {
        setIsOpen(false);
      }
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const button = (
    <div ref={buttonRef}>
      <GoaxWorkSideMenuItem
        icon="notifications"
        label="Notifications"
        type="success"
        badge="1"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
  const calculatePopoverPosition = () => {
    if (!buttonRef.current) return { left: 300, top: 100};
    const buttonRect = buttonRef.current.getBoundingClientRect();

    // Use offsetHeight for actual visible height (respects maxHeight)
    // scrollHeight is the full content height without constraints
    const actualHeight = popoverRef.current?.offsetHeight || 600;
    console.log("Popover dimensions - offsetHeight:", popoverRef.current?.offsetHeight, "scrollHeight:", popoverRef.current?.scrollHeight);
    console.log("Using height for positioning:", actualHeight);

    const padding = 20;
    const left = buttonRect.right + 40;

    // Position popover so its bottom is at button bottom + 160px
    const desiredPopoverBottom = buttonRect.bottom + 160;
    let top = desiredPopoverBottom - actualHeight;

    const screenHeight = window.innerHeight;

    // Check if popover would go beyond bottom of screen
    if (desiredPopoverBottom > screenHeight - padding) {
      // Adjust to fit within screen with padding
      top = screenHeight - actualHeight - padding;
    }

    // Ensure it doesn't go above the top of the screen
    if (top < padding) {
      top = padding;
    }

    console.log("Button bottom:", buttonRect.bottom, "Desired popover bottom:", desiredPopoverBottom, "Final top:", top);

    return { left, top };
  };

  // Recalculate position when popover opens or after it renders
  useEffect(() => {
    if (isOpen) {
      // Initial position calculation
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        setPopoverPosition({
          left: buttonRect.right + 40,
          top: buttonRect.top
        });
      }

      // Use ResizeObserver to detect when popover has fully rendered
      let resizeObserver: ResizeObserver | null = null;
      let hasPositioned = false;

      const observePopover = () => {
        if (popoverRef.current && !hasPositioned) {
          resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
              // Use borderBoxSize for most accurate height including padding/border
              const height = entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height;
              console.log("ResizeObserver detected height:", height);
              // Wait for stable height (content has loaded)
              if (height >= 400) { // More reliable threshold for tab content
                hasPositioned = true;
                setPopoverPosition(calculatePopoverPosition());
                resizeObserver?.disconnect();
              }
            }
          });
          resizeObserver.observe(popoverRef.current);
        }
      };

      // Start observing after a brief delay to ensure DOM is ready
      const timer = setTimeout(observePopover, 10);

      // Handle window resize
      const handleResize = () => {
        setPopoverPosition(calculatePopoverPosition());
      };

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleResize);

      return () => {
        clearTimeout(timer);
        resizeObserver?.disconnect();
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleResize);
      };
    }
  }, [isOpen]);
  const popover =
    isOpen &&
    createPortal(
      <div
        ref={popoverRef}
        style={{
          position: "fixed",
          left: `${popoverPosition.left}px`,
          top: `${popoverPosition.top}px`,
          zIndex: 9999,
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 8px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
          height: "678px",
          display: "flex",
          width: "500px",
          flexDirection: "column",
          overflow: "auto", // Add scrolling if content overflows
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <GoabText tag={"h1"} size={"heading-m"}>
            Notifications
          </GoabText>
          <GoabButton type={"tertiary"} mt={"l"}>Mark all as read</GoabButton>
        </div>
        <GoabTabs>
          <GoabTab heading={"All"}>
            <GoabText tag={"h4"} size={"heading-s"} color={"secondary"}>Today</GoabText>
            {notifications.map((notif) => (
              <GoaxWorkSideNotificationCard
                maxWidth={"px"}
                id={notif.id}
                key={notif.id}
                type={notif.type as WorkSideNotificationType}
                title={notif.title}
                description={notif.description}
                timestamp={notif.timestamp}
                badge={notif.badge}
                onClick={() => console.log("Notification clicked", notif.id)}
              />
            ))}
            <GoabText tag={"h4"} size={"heading-s"} color={"secondary"}>Yesterday</GoabText>
            {yesterdayNotifications.map((notif) => (
              <GoaxWorkSideNotificationCard
                maxWidth={"468px"}
                id={notif.id}
                key={notif.id}
                type={notif.type as WorkSideNotificationType}
                title={notif.title}
                description={notif.description}
                timestamp={notif.timestamp}
                badge={notif.badge}
                onClick={() => console.log("Notification clicked", notif.id)}
              />
            ))}
            <GoabButtonGroup alignment={"center"} mb={"xl"} mt={"l"}>
              <GoabButton type={"tertiary"}>See all notifications</GoabButton>
            </GoabButtonGroup>
          </GoabTab>
          <GoabTab heading={"Unread"}>

          </GoabTab>
          <GoabTab heading={"Urgent"}>

          </GoabTab>
        </GoabTabs>
      </div>,
      document.body,
    );

  return (
    <>
      {button}
      {popover}
    </>
  );
};

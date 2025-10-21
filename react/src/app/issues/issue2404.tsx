import { useState } from "react";
import { GoabInput } from "@abgov/react-components";

export default function Issue2404() {
  const [clickEvents, setClickEvents] = useState<string[]>([]);

  const addClickEvent = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const newEvent = `[${timestamp}] ${message}`;

    setClickEvents(prev => {
      const updated = [newEvent, ...prev];
      // Keep only the last 10 events
      return updated.slice(0, 10);
    });
  };

  const onSearchClick = () => {
    addClickEvent("Search icon clicked!");
  };

  const onCalendarClick = () => {
    addClickEvent("Calendar icon clicked!");
  };

  const onEyeClick = () => {
    addClickEvent("Eye icon clicked!");
  };

  const onCloseClick = () => {
    addClickEvent("Close icon clicked!");
  };

  return (
    <div className="component-content">
      <h1>Issue #2404: React Input TrailingIcon Reference</h1>

      <div className="goab-section">
        <h2>React Implementation (Correct Reference)</h2>
        <p>The React implementation correctly handles trailingIcon click detection and serves as the reference for the Angular fix.</p>
      </div>

      <div className="goab-section">
        <h2>Examples</h2>

        <h3>1. TrailingIcon WITHOUT click handler (should render simple icon)</h3>
        <p>This should show a simple magnifying glass icon that is not clickable:</p>
        <GoabInput
          name="search-input"
          placeholder="Search without click handler"
          trailingIcon="search"
          width="300px"
        />

        <h3>2. TrailingIcon WITH click handler (should render icon button)</h3>
        <p>This should show a clickable magnifying glass icon button:</p>
        <GoabInput
          name="search-input-clickable"
          placeholder="Search with click handler"
          trailingIcon="search"
          onTrailingIconClick={onSearchClick}
          width="300px"
        />

        <h3>3. Different trailing icons without click handlers</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <GoabInput
            name="calendar-input"
            placeholder="Date input"
            trailingIcon="calendar"
            width="250px"
          />

          <GoabInput
            name="eye-input"
            placeholder="Password visibility"
            trailingIcon="eye"
            width="250px"
          />

          <GoabInput
            name="close-input"
            placeholder="Clear input"
            trailingIcon="close"
            width="250px"
          />
        </div>

        <h3>4. Same icons WITH click handlers (should be clickable buttons)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <GoabInput
            name="calendar-input-clickable"
            placeholder="Date input (clickable)"
            trailingIcon="calendar"
            onTrailingIconClick={onCalendarClick}
            width="250px"
          />

          <GoabInput
            name="eye-input-clickable"
            placeholder="Password visibility (clickable)"
            trailingIcon="eye"
            onTrailingIconClick={onEyeClick}
            width="250px"
          />

          <GoabInput
            name="close-input-clickable"
            placeholder="Clear input (clickable)"
            trailingIcon="close"
            onTrailingIconClick={onCloseClick}
            width="250px"
          />
        </div>
      </div>

      <div className="goab-section">
        <h2>Click Events Log</h2>
        <p>When you click on the icons with handlers, they should appear here:</p>
        <div className="event-log">
          {clickEvents.map((event, index) => (
            <div key={index} className="event-item">
              {event}
            </div>
          ))}
          {clickEvents.length === 0 && (
            <div className="no-events">
              No click events yet. Try clicking the icons with handlers above.
            </div>
          )}
        </div>
      </div>

      <div className="goab-section">
        <h2>React Implementation Details</h2>
        <p><strong>Correct Logic:</strong> The React wrapper uses <code>{`onTrailingIconClick ? "true" : "false"`}</code> to properly detect if a handler is provided.</p>
        <p><strong>Key Difference:</strong> React checks for the presence of the callback function, not the method reference itself.</p>
        <p><strong>Angular Fix:</strong> Angular now uses <code>EventEmitter.observed</code> to achieve the same behavior as React.</p>
      </div>

    </div>
  );
}

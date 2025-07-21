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

      <style jsx>{`
        .component-content {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .goab-section {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e0e0e0;
        }

        .goab-section:last-child {
          border-bottom: none;
        }

        .goab-section h2 {
          color: #0070f3;
          margin-bottom: 1rem;
        }

        .goab-section h3 {
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .event-log {
          background-color: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 4px;
          padding: 1rem;
          min-height: 100px;
          max-height: 200px;
          overflow-y: auto;
        }

        .event-item {
          padding: 0.25rem 0;
          border-bottom: 1px solid #e9ecef;
          font-family: monospace;
          font-size: 0.9rem;
        }

        .event-item:last-child {
          border-bottom: none;
        }

        .no-events {
          color: #6c757d;
          font-style: italic;
          text-align: center;
          padding: 2rem 0;
        }

        code {
          background-color: #f1f3f4;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.9em;
        }
      `}</style>
    </div>
  );
}

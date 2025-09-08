import React, { useState } from "react";
import { GoabButton, GoabButtonGroup, GoabModal } from "@abgov/react-components";

export function Issue2948Component() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const actions = (
    <GoabButtonGroup alignment="end">
      <GoabButton type="secondary" onClick={() => setIsOpen2(false)}>
        Cancel
      </GoabButton>
      <GoabButton type="primary" onClick={() => setIsOpen2(false)}>
        Confirm
      </GoabButton>
    </GoabButtonGroup>
  );

  const actions3 = (
    <GoabButtonGroup alignment="end">
      <GoabButton type="secondary" onClick={() => setIsOpen3(false)}>
        Cancel
      </GoabButton>
      <GoabButton type="primary" onClick={() => setIsOpen3(false)}>
        Save
      </GoabButton>
    </GoabButtonGroup>
  );

  const templateHeading = (
    <span style={{ color: "#0070f3" }}>Template Heading with Styling</span>
  );

  return (
    <div>
      <h1>Issue #2948: Modal Spacing Test (React)</h1>
      <p>Test different combinations of Modal with heading and actions to verify proper spacing.</p>

      <h2>Modal with string heading only (no actions)</h2>
      <GoabButton onClick={() => setIsOpen1(true)}>
        Open Modal - String Heading Only
      </GoabButton>
      <GoabModal 
        open={isOpen1} 
        onClose={() => setIsOpen1(false)} 
        closable={true} 
        heading="String Heading"
      >
        <p>This modal has a string heading but no actions. The spacing below the heading should be consistent.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </GoabModal>

      <h2>Modal with React node heading and actions</h2>
      <GoabButton onClick={() => setIsOpen2(true)}>
        Open Modal - React Node Heading + Actions
      </GoabButton>
      <GoabModal 
        open={isOpen2} 
        onClose={() => setIsOpen2(false)} 
        closable={true} 
        heading={templateHeading}
        actions={actions}
      >
        <p>This modal has a React node heading and actions. Check spacing below heading and above actions.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </GoabModal>

      <h2>Modal with string heading and actions</h2>
      <GoabButton onClick={() => setIsOpen3(true)}>
        Open Modal - String Heading + Actions
      </GoabButton>
      <GoabModal 
        open={isOpen3}
        heading="String Heading with Actions"
        actions={actions3}
      >
        <p>This modal has both a string heading and actions. Spacing should be consistent.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </GoabModal>

      <div style={{ marginTop: "2rem" }}>
        <h3>Expected Behavior:</h3>
        <ul>
          <li>Consistent spacing below headings (both string and React node)</li>
          <li>Proper spacing above action buttons</li>
          <li>No visual inconsistencies between different heading types</li>
        </ul>
      </div>
    </div>
  );
}
import { useState } from "react";
import { GoabCheckbox, GoabRadioGroup, GoabRadioItem } from "@abgov/react-components";
import type { GoabCheckboxOnChangeDetail, GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";
import "./issue2361.css";

export const Issue2361 = () => {
  // Checkbox states
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(true);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);

  // Radio states
  const [selectedRadio, setSelectedRadio] = useState("option1");

  const handleCheckbox1Change = (event: GoabCheckboxOnChangeDetail) => {
    console.log("Checkbox 1 changed:", event.checked);
    setCheckbox1Checked(event.checked);
  };

  const handleCheckbox2Change = (event: GoabCheckboxOnChangeDetail) => {
    console.log("Checkbox 2 changed:", event.checked);
    setCheckbox2Checked(event.checked);
  };

  const handleCheckbox3Change = (event: GoabCheckboxOnChangeDetail) => {
    console.log("Checkbox 3 changed:", event.checked);
    setCheckbox3Checked(event.checked);
  };

  const handleRadioChange = (event: GoabRadioGroupOnChangeDetail) => {
    console.log("Radio changed:", event.value);
    setSelectedRadio(event.value as string);
  };

  return (
    <div className="container-2361">
      <h1>Issue #2361: Increased Clickable Area for Radio and Checkbox</h1>

      <section className="description">
        <h2>Overview</h2>
        <p>
          This issue addresses accessibility improvements by increasing the clickable/touch target area
          for radio buttons and checkboxes to 44px x 44px (WCAG AAA standard), while maintaining the
          current visual size of 24px x 24px.
        </p>
        <p>
          <strong>Acceptance Criteria:</strong> The clickable area around each radio button and checkbox
          should be 44px x 44px to meet accessibility standards.
        </p>
      </section>

      <section className="test-section">
        <h2>Manual QA Test Cases</h2>

        <div className="test-case">
          <h3>Test 1: Checkbox Click Target Area</h3>
          <p className="instructions">
            <strong>Instructions:</strong> Try clicking around the edges of each checkbox (not on the checkbox itself,
            but in the area surrounding it within ~10px). The checkbox should still toggle.
          </p>

          <div className="component-group">
            <GoabCheckbox
              name="checkbox1"
              text="Checkbox 1 - Click around the edges"
              checked={checkbox1Checked}
              onChange={handleCheckbox1Change}
            />

            <GoabCheckbox
              name="checkbox2"
              text="Checkbox 2 - Try clicking above and below"
              checked={checkbox2Checked}
              onChange={handleCheckbox2Change}
            />

            <GoabCheckbox
              name="checkbox3"
              text="Checkbox 3 - Test left and right sides"
              checked={checkbox3Checked}
              onChange={handleCheckbox3Change}
            />
          </div>

          <div className="status">
            <strong>Current States:</strong>
            <ul>
              <li>Checkbox 1: {checkbox1Checked ? 'Checked' : 'Unchecked'}</li>
              <li>Checkbox 2: {checkbox2Checked ? 'Checked' : 'Unchecked'}</li>
              <li>Checkbox 3: {checkbox3Checked ? 'Checked' : 'Unchecked'}</li>
            </ul>
          </div>
        </div>

        <div className="test-case">
          <h3>Test 2: Radio Button Click Target Area</h3>
          <p className="instructions">
            <strong>Instructions:</strong> Try clicking around the edges of each radio button (not directly on it,
            but in the surrounding area within ~10px). The radio should still select.
          </p>

          <div className="component-group">
            <GoabRadioGroup
              name="testRadio"
              value={selectedRadio}
              onChange={handleRadioChange}
            >
              <GoabRadioItem
                name="testRadio"
                value="option1"
                label="Option 1 - Click around the edges"
              />

              <GoabRadioItem
                name="testRadio"
                value="option2"
                label="Option 2 - Try clicking above and below"
              />

              <GoabRadioItem
                name="testRadio"
                value="option3"
                label="Option 3 - Test left and right sides"
              />
            </GoabRadioGroup>
          </div>

          <div className="status">
            <strong>Selected Option:</strong> {selectedRadio}
          </div>
        </div>

        <div className="test-case">
          <h3>Test 3: Visual Verification</h3>
          <p className="instructions">
            <strong>Instructions:</strong> Use browser DevTools to inspect the checkbox/radio elements.
            Verify that:
          </p>
          <ul className="checklist">
            <li>The visual size remains 24px x 24px</li>
            <li>The ::before pseudo-element has dimensions of 44px x 44px</li>
            <li>The ::before pseudo-element is positioned absolutely and centered on the visual element</li>
            <li>The transform property is set to translate(-50%, -50%)</li>
          </ul>
        </div>

        <div className="test-case">
          <h3>Test 4: Accessibility Testing</h3>
          <p className="instructions">
            <strong>Instructions:</strong> Test with assistive technologies:
          </p>
          <ul className="checklist">
            <li>Use keyboard navigation (Tab/Space) - should work as expected</li>
            <li>Use screen reader - should announce checkbox/radio states correctly</li>
            <li>Use touch device (if available) - 44px target should be easier to tap</li>
            <li>Test with different zoom levels (100%, 150%, 200%)</li>
          </ul>
        </div>

        <div className="test-case">
          <h3>Test 5: Disabled State</h3>
          <p className="instructions">
            <strong>Instructions:</strong> Verify that disabled controls still have the correct click target size
            but don't respond to clicks.
          </p>

          <div className="component-group">
            <GoabCheckbox
              name="disabledCheckbox"
              text="Disabled checkbox"
              checked={false}
              disabled={true}
            />

            <GoabRadioGroup name="disabledRadio" value="disabled1">
              <GoabRadioItem
                name="disabledRadio"
                value="disabled1"
                label="Disabled radio option"
                disabled={true}
              />
            </GoabRadioGroup>
          </div>
        </div>
      </section>

      <section className="implementation-notes">
        <h2>Implementation Details</h2>
        <p>The solution uses a ::before pseudo-element to create an invisible 44px x 44px click target:</p>
        <ul>
          <li><strong>Container:</strong> position: relative</li>
          <li><strong>::before pseudo-element:</strong> position: absolute, 44px x 44px</li>
          <li><strong>Centering:</strong> top: 50%, left: 50%, transform: translate(-50%, -50%)</li>
          <li><strong>Visual element:</strong> Remains 24px x 24px (unchanged)</li>
        </ul>
        <p>
          This approach maintains backward compatibility while meeting WCAG AAA accessibility standards
          for touch target size.
        </p>
      </section>
    </div>
  );
};

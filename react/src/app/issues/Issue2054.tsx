import React, { useState } from "react";
import {
  GoabDropdown,
  GoabDropdownItem,
  GoabTextArea,
  GoabTooltip,
  GoabFormItem,
  GoabDivider,
  GoabButton,
} from "@abgov/react-components";

export function Issue2054() {
  // Dropdown test values
  const [dropdownValue1, setDropdownValue1] = useState("");
  const [dropdownValue2, setDropdownValue2] = useState("");
  const [dropdownValue3, setDropdownValue3] = useState("");
  const [dropdownValue4, setDropdownValue4] = useState("");

  // TextArea test values
  const [textAreaValue1, setTextAreaValue1] = useState(
    "This is a test for maxWidth prop on TextArea component with 300px limit"
  );
  const [textAreaValue2, setTextAreaValue2] = useState(
    "This TextArea has a maxWidth of 500px to demonstrate the constraint"
  );
  const [textAreaValue3, setTextAreaValue3] = useState(
    "This TextArea has both width and maxWidth set - the smaller value should win"
  );
  const [textAreaValue4, setTextAreaValue4] = useState(
    "Default TextArea with 60ch maxWidth"
  );

  const onDropdownChange = (e: any, dropdownName: string) => {
    console.log(`${dropdownName} changed:`, e.value);
  };

  const onTextAreaChange = (e: any, textAreaName: string) => {
    console.log(`${textAreaName} changed:`, e.target.value);
  };

  return (
    <div>
      <h1>Issue #2054: MaxWidth Property Testing</h1>
      <p>Testing maxWidth support for Dropdown, TextArea, and Tooltip components</p>

      <GoabDivider />

      <section>
        <h2>Dropdown Component - MaxWidth Tests</h2>

        <GoabFormItem label="Dropdown with maxWidth: 200px" mb="3">
          <GoabDropdown
            name="dropdown1"
            value={dropdownValue1}
            placeholder="Select an option"
            maxWidth="200px"
            onChange={(e) => {
              setDropdownValue1(e.value);
              onDropdownChange(e, "Dropdown 1");
            }}
          >
            <GoabDropdownItem value="option1">Short</GoabDropdownItem>
            <GoabDropdownItem value="option2">Medium Option</GoabDropdownItem>
            <GoabDropdownItem value="option3">
              This is a very long option that should be constrained
            </GoabDropdownItem>
            <GoabDropdownItem value="option4">
              Another long option to test maxWidth constraint
            </GoabDropdownItem>
          </GoabDropdown>
        </GoabFormItem>

        <GoabFormItem label="Dropdown with maxWidth: 400px" mb="3">
          <GoabDropdown
            name="dropdown2"
            value={dropdownValue2}
            placeholder="Select an option"
            maxWidth="400px"
            onChange={(e) => {
              setDropdownValue2(e.value);
              onDropdownChange(e, "Dropdown 2");
            }}
          >
            <GoabDropdownItem value="option1">Short</GoabDropdownItem>
            <GoabDropdownItem value="option2">Medium Option</GoabDropdownItem>
            <GoabDropdownItem value="option3">
              This is a very long option that should have more room
            </GoabDropdownItem>
            <GoabDropdownItem value="option4">
              Another long option with 400px maxWidth
            </GoabDropdownItem>
          </GoabDropdown>
        </GoabFormItem>

        <GoabFormItem label="Dropdown with width: 100% and maxWidth: 300px" mb="3">
          <GoabDropdown
            name="dropdown3"
            value={dropdownValue3}
            placeholder="Select an option"
            width="100%"
            maxWidth="300px"
            onChange={(e) => {
              setDropdownValue3(e.value);
              onDropdownChange(e, "Dropdown 3");
            }}
          >
            <GoabDropdownItem value="option1">Short</GoabDropdownItem>
            <GoabDropdownItem value="option2">Medium Option</GoabDropdownItem>
            <GoabDropdownItem value="option3">
              Testing width and maxWidth together
            </GoabDropdownItem>
            <GoabDropdownItem value="option4">
              The smaller constraint should win
            </GoabDropdownItem>
          </GoabDropdown>
        </GoabFormItem>

        <GoabFormItem label="Dropdown without maxWidth (default behavior)" mb="3">
          <GoabDropdown
            name="dropdown4"
            value={dropdownValue4}
            placeholder="Select an option"
            onChange={(e) => {
              setDropdownValue4(e.value);
              onDropdownChange(e, "Dropdown 4");
            }}
          >
            <GoabDropdownItem value="option1">Short</GoabDropdownItem>
            <GoabDropdownItem value="option2">Medium Option</GoabDropdownItem>
            <GoabDropdownItem value="option3">
              This dropdown has no maxWidth constraint for comparison
            </GoabDropdownItem>
            <GoabDropdownItem value="option4">
              Default behavior reference
            </GoabDropdownItem>
          </GoabDropdown>
        </GoabFormItem>
      </section>

      <GoabDivider />

      <section>
        <h2>TextArea Component - MaxWidth Tests</h2>

        <GoabFormItem label="TextArea with maxWidth: 300px" mb="3">
          <GoabTextArea
            name="textarea1"
            value={textAreaValue1}
            maxWidth="300px"
            rows={3}
            onChange={(e) => {
              setTextAreaValue1(e.target.value);
              onTextAreaChange(e, "TextArea 1");
            }}
          />
        </GoabFormItem>

        <GoabFormItem label="TextArea with maxWidth: 500px" mb="3">
          <GoabTextArea
            name="textarea2"
            value={textAreaValue2}
            maxWidth="500px"
            rows={3}
            onChange={(e) => {
              setTextAreaValue2(e.target.value);
              onTextAreaChange(e, "TextArea 2");
            }}
          />
        </GoabFormItem>

        <GoabFormItem label="TextArea with width: 100% and maxWidth: 400px" mb="3">
          <GoabTextArea
            name="textarea3"
            value={textAreaValue3}
            width="100%"
            maxWidth="400px"
            rows={3}
            onChange={(e) => {
              setTextAreaValue3(e.target.value);
              onTextAreaChange(e, "TextArea 3");
            }}
          />
        </GoabFormItem>

        <GoabFormItem label="TextArea with default maxWidth: 60ch" mb="3">
          <GoabTextArea
            name="textarea4"
            value={textAreaValue4}
            rows={3}
            onChange={(e) => {
              setTextAreaValue4(e.target.value);
              onTextAreaChange(e, "TextArea 4");
            }}
          />
        </GoabFormItem>
      </section>

      <GoabDivider />

      <section>
        <h2>Tooltip Component - MaxWidth Tests</h2>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginTop: "2rem" }}>
          <GoabTooltip
            content="This is a tooltip with maxWidth set to 200px. The text should wrap within this constraint."
            maxWidth="200px"
          >
            <GoabButton type="secondary">Hover for 200px maxWidth tooltip</GoabButton>
          </GoabTooltip>

          <GoabTooltip
            content="This tooltip has maxWidth set to 400px, allowing for longer content display."
            maxWidth="400px"
          >
            <GoabButton type="secondary">Hover for 400px maxWidth tooltip</GoabButton>
          </GoabTooltip>

          <GoabTooltip content="Default tooltip without maxWidth constraint for comparison.">
            <GoabButton type="secondary">Hover for default tooltip (no maxWidth)</GoabButton>
          </GoabTooltip>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <h3>Note on Tooltip maxWidth:</h3>
          <p>
            According to the implementation, tooltip maxWidth only accepts 'px' values. Any non-px
            values will be ignored and default behavior will be used.
          </p>
        </div>
      </section>

      <GoabDivider />

      <section>
        <h2>Test Results Summary</h2>
        <ul>
          <li>
            <strong>Dropdown:</strong> MaxWidth property constrains the dropdown width as expected
          </li>
          <li>
            <strong>TextArea:</strong> MaxWidth property limits the maximum width, with the smaller
            value winning between width and maxWidth
          </li>
          <li>
            <strong>Tooltip:</strong> MaxWidth property only accepts px values and controls the
            tooltip's maximum width
          </li>
        </ul>
      </section>
    </div>
  );
}
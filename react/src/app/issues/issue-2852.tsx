import React, { useState } from "react";
import {
  GoabOneColumnLayout,
  GoabMicrositeHeader,
  GoabAppHeader,
  GoabSideMenu,
  GoabSideMenuGroup,
  GoabAppFooter,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabBlock,
  GoabDivider,
  GoabCallout,
} from "@abgov/react-components";

import {
  GoabDropdownOnChangeDetail,
} from "@abgov/ui-components-common";

export function Issue2852() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  function onChange(detail: GoabDropdownOnChangeDetail) {
    console.log("Dropdown changed:", detail);
    setSelectedValue(detail.value as string);
  }

  return (
    <GoabOneColumnLayout>
      <section slot="header">
        <GoabMicrositeHeader type="alpha" version="UAT" />
        <GoabAppHeader url="/" heading="Issue #2852: Filterable Dropdown Space Test">
        </GoabAppHeader>
      </section>

      <div style={{ display: "flex" }}>
        <section style={{ flex: "0 0 250px" }}>
          <GoabSideMenu>
            <GoabSideMenuGroup heading="Issues">
              <a href="/issue-2852">Issue #2852</a>
            </GoabSideMenuGroup>
          </GoabSideMenu>
        </section>

        <main style={{ flex: 1, padding: "2rem" }}>
          <h1>Issue #2852: Can't use space in a filterable Dropdown</h1>
          
          <GoabBlock direction="column" gap="l">
            
            {/* Test Case 1: Basic filterable dropdown */}
            <div>
              <h2>Test Case 1: Basic Filterable Dropdown</h2>
              <p>Try typing a value with spaces in this filterable dropdown. The space key should work for typing.</p>
              
              <GoabFormItem label="Choose a city with spaces">
                <GoabDropdown
                  name="city-basic"
                  placeholder="Type a city name..."
                  filterable={true}
                  onChange={(name, value, detail) => onChange(detail)}>
                  <GoabDropdownItem value="New York">New York</GoabDropdownItem>
                  <GoabDropdownItem value="Los Angeles">Los Angeles</GoabDropdownItem>
                  <GoabDropdownItem value="San Francisco">San Francisco</GoabDropdownItem>
                  <GoabDropdownItem value="Las Vegas">Las Vegas</GoabDropdownItem>
                  <GoabDropdownItem value="Salt Lake City">Salt Lake City</GoabDropdownItem>
                </GoabDropdown>
              </GoabFormItem>
              
              <div>Selected value: {selectedValue}</div>
            </div>

            <GoabDivider />

            {/* Test Case 2: Filterable dropdown with longer options */}
            <div>
              <h2>Test Case 2: Filterable Dropdown with Multi-word Options</h2>
              <p>Test typing multi-word province/territory names with spaces.</p>
              
              <GoabFormItem label="Choose a Canadian Province/Territory">
                <GoabDropdown
                  name="province"
                  placeholder="Type a province or territory..."
                  filterable={true}
                  onChange={(name, value, detail) => onChange(detail)}>
                  <GoabDropdownItem value="British Columbia">British Columbia</GoabDropdownItem>
                  <GoabDropdownItem value="New Brunswick">New Brunswick</GoabDropdownItem>
                  <GoabDropdownItem value="Newfoundland and Labrador">Newfoundland and Labrador</GoabDropdownItem>
                  <GoabDropdownItem value="Northwest Territories">Northwest Territories</GoabDropdownItem>
                  <GoabDropdownItem value="Nova Scotia">Nova Scotia</GoabDropdownItem>
                  <GoabDropdownItem value="Prince Edward Island">Prince Edward Island</GoabDropdownItem>
                </GoabDropdown>
              </GoabFormItem>
            </div>

            <GoabDivider />

            {/* Test Case 3: Regular dropdown (non-filterable) for comparison */}
            <div>
              <h2>Test Case 3: Regular Dropdown (Non-filterable)</h2>
              <p>This dropdown is NOT filterable. Space key should open/close the dropdown.</p>
              
              <GoabFormItem label="Choose an option (non-filterable)">
                <GoabDropdown
                  name="regular"
                  placeholder="Select an option..."
                  filterable={false}
                  onChange={(name, value, detail) => onChange(detail)}>
                  <GoabDropdownItem value="Option One">Option One</GoabDropdownItem>
                  <GoabDropdownItem value="Option Two">Option Two</GoabDropdownItem>
                  <GoabDropdownItem value="Option Three">Option Three</GoabDropdownItem>
                </GoabDropdown>
              </GoabFormItem>
            </div>

            <GoabDivider />

            {/* Test Case 4: Testing instructions */}
            <div>
              <h2>Testing Instructions</h2>
              <GoabCallout type="information" heading="How to test this fix">
                <ul>
                  <li><strong>Filterable dropdowns (Test Cases 1 & 2):</strong> Click to focus, then type text with spaces. The space key should add spaces to your input, not open/close the dropdown menu.</li>
                  <li><strong>Regular dropdown (Test Case 3):</strong> Focus the dropdown and press the space key. It should open the dropdown menu.</li>
                  <li><strong>Expected behavior:</strong> Space key should behave differently based on whether the dropdown is filterable or not.</li>
                </ul>
              </GoabCallout>
            </div>

          </GoabBlock>
        </main>
      </div>

      <section slot="footer">
        <GoabAppFooter />
      </section>
    </GoabOneColumnLayout>
  );
}
import {
  GoabInput,
  GoabTextarea,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
} from "@abgov/react-components";
import { useState } from "react";

export const Issue1769 = () => {
  const [emailValue, setEmailValue] = useState("");
  const [batchIdValue, setBatchIdValue] = useState("");
  const [orgNameValue, setOrgNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [notesValue, setNotesValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [locationValue, setLocationValue] = useState("");

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h2>Issue #1769: Autocomplete Property for Input and TextArea Components</h2>

      <div style={{ marginBottom: "40px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h3>Input Component with Autocomplete</h3>

        <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          <h4 style={{ marginTop: 0, color: "#333" }}>Autocomplete disabled</h4>
          <GoabFormItem label="User Email">
            <GoabInput
              name="email-default"
              value={emailValue}
              placeholder="Enter your email"
              type="email"
              autoComplete="new-email"
              onChange={(e) => setEmailValue(e.value)}
            />
          </GoabFormItem>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666", fontStyle: "italic" }}>
            This input disables browser autocomplete - useful for sensitive email fields.
          </p>
        </div>

        <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          <h4 style={{ marginTop: 0, color: "#333" }}>Autocomplete disabled</h4>
          <GoabFormItem label="Batch ID">
            <GoabInput
              name="batch-id"
              value={batchIdValue}
              placeholder="Enter unique batch ID"
              autoComplete="batch-id"
              onChange={(e) => setBatchIdValue(e.value)}
            />
          </GoabFormItem>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666", fontStyle: "italic" }}>
            This input disables browser autocomplete - useful for fields requiring unique values.
          </p>
        </div>

        <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          <h4 style={{ marginTop: 0, color: "#333" }}>Specific autocomplete value</h4>
          <GoabFormItem label="Organization Name">
            <GoabInput
              name="org-name"
              value={orgNameValue}
              placeholder="Enter organization name"
              autoComplete="organization"
              onChange={(e) => setOrgNameValue(e.value)}
            />
          </GoabFormItem>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666", fontStyle: "italic" }}>
            This input uses the 'organization' autocomplete value for better suggestions.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "40px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h3>TextArea Component with Autocomplete</h3>

        <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          <h4 style={{ marginTop: 0, color: "#333" }}>Default (autocomplete enabled)</h4>
          <GoabFormItem label="Description">
            <GoabTextarea
              name="description-default"
              value={descriptionValue}
              placeholder="Enter description"
              rows={3}
              onChange={(e) => setDescriptionValue(e.value)}
            />
          </GoabFormItem>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666", fontStyle: "italic" }}>
            This textarea allows browser autocomplete suggestions.
          </p>
        </div>

        <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          <h4 style={{ marginTop: 0, color: "#333" }}>Autocomplete disabled</h4>
          <GoabFormItem label="Unique Notes">
            <GoabTextarea
              name="unique-notes"
              value={notesValue}
              placeholder="Enter unique notes for this record"
              autoComplete="off"
              rows={3}
              onChange={(e) => setNotesValue(e.value)}
            />
          </GoabFormItem>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666", fontStyle: "italic" }}>
            This textarea disables browser autocomplete - useful for fields requiring unique content.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "40px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h3>Dropdown Component with Autocomplete</h3>

        <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          <h4 style={{ marginTop: 0, color: "#333" }}>Default dropdown</h4>
          <GoabFormItem label="Country">
            <GoabDropdown
              name="country-default"
              value={countryValue}
              placeholder="Select a country"
              filterable={true}
              onChange={(e) => setCountryValue(e.value  as string)}
            >
              <GoabDropdownItem value="ca" label="Canada" />
              <GoabDropdownItem value="us" label="United States" />
              <GoabDropdownItem value="uk" label="United Kingdom" />
            </GoabDropdown>
          </GoabFormItem>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666", fontStyle: "italic" }}>
            This dropdown allows browser autocomplete suggestions.
          </p>
        </div>

        <div style={{ marginBottom: "30px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
          <h4 style={{ marginTop: 0, color: "#333" }}>Autocomplete disabled</h4>
          <GoabFormItem label="Processing Location">
            <GoabDropdown
              name="processing-location"
              value={locationValue}
              placeholder="Select processing location"
              filterable={true}
              autoComplete="off"
              onChange={(e) => setLocationValue(e.value  as string)}
            >
              <GoabDropdownItem value="loc1" label="Location A" />
              <GoabDropdownItem value="loc2" label="Location B" />
              <GoabDropdownItem value="loc3" label="Location C" />
            </GoabDropdown>
          </GoabFormItem>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666", fontStyle: "italic" }}>
            This dropdown disables browser autocomplete.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: "#e8f4f8", padding: "20px", borderRadius: "8px", marginTop: "30px" }}>
        <h3>Manual Testing Instructions</h3>
        <div style={{ lineHeight: 1.6 }}>
          <h4 style={{ marginTop: 0, color: "#2c5282" }}>How to test the autocomplete functionality:</h4>
          <ol style={{ paddingLeft: "20px" }}>
            <li style={{ marginBottom: "8px" }}>
              <strong>Fill out the form fields above</strong> - Enter values in the email, batch ID, and description fields
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Submit or navigate away</strong> - This allows the browser to save the values
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Refresh the page</strong> - Return to this form
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Test autocomplete behavior:</strong>
              <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
                <li style={{ marginBottom: "8px" }}>
                  Click on the "User Email" field - should show autocomplete suggestions
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Click on the "Batch ID" field - should NOT show autocomplete suggestions (autocomplete="off")
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Click on the "Description" textarea - should show autocomplete suggestions
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Click on the "Unique Notes" textarea - should NOT show autocomplete suggestions (autocomplete="off")
                </li>
              </ul>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <strong>Verify dropdown behavior:</strong>
              <ul style={{ marginTop: "10px", paddingLeft: "20px" }}>
                <li style={{ marginBottom: "8px" }}>
                  Country dropdown should allow browser autocomplete
                </li>
                <li style={{ marginBottom: "8px" }}>
                  Processing Location dropdown should not show browser autocomplete
                </li>
              </ul>
            </li>
          </ol>
          <p style={{ marginTop: "15px", fontWeight: "bold", color: "#2c5282" }}>
            <strong>Expected Result:</strong> Fields with autocomplete="off" should not show browser autocomplete suggestions,
            while fields without this attribute should show suggestions when available.
          </p>
        </div>
      </div>
    </div>
  );
};

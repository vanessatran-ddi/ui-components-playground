import { GoabCheckboxList, GoabCheckboxListItem, GoabFormItem } from "@abgov/react-components";
import { GoabCheckboxListOnChangeDetail } from "@abgov/ui-components-common";
import { useState } from "react";

export const CheckboxListPage = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedValues2, setSelectedValues2] = useState<string[]>(['email', 'phone']);
  const [selectedValues3, setSelectedValues3] = useState<string[]>([]);
  const [selectedValues4, setSelectedValues4] = useState<string[]>(['option1']);
  const [formValues, setFormValues] = useState({
    contactPreferences: ['email', 'sms'],
    interests: []
  });

  const handleChange = (event: GoabCheckboxListOnChangeDetail) => {
    console.log("CheckboxList onChange triggered:", event);
    setSelectedValues(event.values || []);
  };

  const handleChange2 = (event: GoabCheckboxListOnChangeDetail) => {
    console.log("CheckboxList onChange2 triggered:", event);
    setSelectedValues2(event.values || []);
  };

  const handleChange3 = (event: GoabCheckboxListOnChangeDetail) => {
    console.log("CheckboxList onChange3 triggered:", event);
    setSelectedValues3(event.values || []);
  };

  const handleChange4 = (event: GoabCheckboxListOnChangeDetail) => {
    console.log("CheckboxList onChange4 triggered:", event);
    setSelectedValues4(event.values || []);
  };

  const handleFormContactPreferencesChange = (event: GoabCheckboxListOnChangeDetail) => {
    console.log("Form contact preferences changed:", event);
    setFormValues(prev => ({
      ...prev,
      contactPreferences: event.values || []
    }));
  };

  const handleFormInterestsChange = (event: GoabCheckboxListOnChangeDetail) => {
    console.log("Form interests changed:", event);
    setFormValues(prev => ({
      ...prev,
      interests: event.values || []
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with values:', formValues);
    alert(`Form submitted with values: ${JSON.stringify(formValues, null, 2)}`);
  };

  const resetForm = () => {
    setFormValues({
      contactPreferences: [],
      interests: []
    });
    setSelectedValues([]);
    setSelectedValues2([]);
    setSelectedValues3([]);
    setSelectedValues4([]);
  };

  const setFormSampleValues = () => {
    setFormValues({
      contactPreferences: ['email', 'phone', 'mail'],
      interests: ['sports', 'music']
    });
  };

  return (
    <>
      <h1>Checkbox List</h1>

      <h2>Basic Usage</h2>
      <GoabFormItem label="Contact Preferences" helpText="Select how you'd like to be contacted">
        <GoabCheckboxList
          name="contactPrefs"
          value={selectedValues}
          onChange={handleChange}>
          <GoabCheckboxListItem value="email" text="Email" />
          <GoabCheckboxListItem value="phone" text="Phone" />
          <GoabCheckboxListItem value="sms" text="SMS" />
          <GoabCheckboxListItem value="mail" text="Mail" />
        </GoabCheckboxList>
      </GoabFormItem>
      <p><strong>Selected values:</strong> {JSON.stringify(selectedValues)}</p>

      <hr />

      <h2>With Initial Values</h2>
      <GoabFormItem label="Communication Methods" helpText="Choose your preferred communication methods">
        <GoabCheckboxList
          name="commMethods"
          value={selectedValues2}
          onChange={handleChange2}>
          <GoabCheckboxListItem value="email" text="Email" />
          <GoabCheckboxListItem value="phone" text="Phone Call" />
          <GoabCheckboxListItem value="sms" text="Text Message" />
          <GoabCheckboxListItem value="mail" text="Physical Mail" />
          <GoabCheckboxListItem value="fax" text="Fax" />
        </GoabCheckboxList>
      </GoabFormItem>
      <p><strong>Selected values:</strong> {JSON.stringify(selectedValues2)}</p>

      <hr />

      <h2>Horizontal Orientation</h2>
      <GoabFormItem label="Yes/No Questions" helpText="Select all that apply">
        <GoabCheckboxList
          name="yesNoQuestions"
          orientation="horizontal"
          value={selectedValues3}
          onChange={handleChange3}>
          <GoabCheckboxListItem value="option1" text="Option 1" />
          <GoabCheckboxListItem value="option2" text="Option 2" />
        </GoabCheckboxList>
      </GoabFormItem>
      <p><strong>Selected values:</strong> {JSON.stringify(selectedValues3)}</p>

      <hr />

      <h2>With Disabled State</h2>
      <GoabFormItem label="Disabled Options" helpText="This checkbox list is disabled">
        <GoabCheckboxList
          name="disabledOptions"
          disabled={true}
          value={selectedValues4}
          onChange={handleChange4}>
          <GoabCheckboxListItem value="option1" text="Option 1" />
          <GoabCheckboxListItem value="option2" text="Option 2" />
          <GoabCheckboxListItem value="option3" text="Option 3" />
        </GoabCheckboxList>
      </GoabFormItem>
      <p><strong>Selected values:</strong> {JSON.stringify(selectedValues4)}</p>

      <hr />

      <h2>With Error State</h2>
      <GoabFormItem label="Required Selection" helpText="You must select at least one option" error="Please select at least one option">
        <GoabCheckboxList
          name="requiredSelection"
          error={true}
          value={selectedValues3}
          onChange={handleChange3}>
          <GoabCheckboxListItem value="option1" text="Option 1" />
          <GoabCheckboxListItem value="option2" text="Option 2" />
          <GoabCheckboxListItem value="option3" text="Option 3" />
        </GoabCheckboxList>
      </GoabFormItem>

      <hr />

      <h2>Individual Disabled Items</h2>
      <GoabFormItem label="Mixed Availability" helpText="Some options may not be available">
        <GoabCheckboxList
          name="mixedAvailability"
          value={selectedValues3}
          onChange={handleChange3}>
          <GoabCheckboxListItem value="available1" text="Available Option 1" />
          <GoabCheckboxListItem value="available2" text="Available Option 2" />
          <GoabCheckboxListItem value="unavailable1" text="Unavailable Option 1" disabled={true} />
          <GoabCheckboxListItem value="unavailable2" text="Unavailable Option 2" disabled={true} />
        </GoabCheckboxList>
      </GoabFormItem>

      <hr />

      <h2>Form Example</h2>
      <form onSubmit={handleFormSubmit}>
        <GoabFormItem label="Contact Preferences" helpText="Select how you'd like to be contacted">
          <GoabCheckboxList
            name="contactPreferences"
            value={formValues.contactPreferences}
            onChange={handleFormContactPreferencesChange}>
            <GoabCheckboxListItem value="email" text="Email" />
            <GoabCheckboxListItem value="phone" text="Phone" />
            <GoabCheckboxListItem value="sms" text="SMS" />
            <GoabCheckboxListItem value="mail" text="Mail" />
          </GoabCheckboxList>
        </GoabFormItem>

        <GoabFormItem label="Interests" helpText="Select your interests">
          <GoabCheckboxList
            name="interests"
            value={formValues.interests}
            onChange={handleFormInterestsChange}>
            <GoabCheckboxListItem value="sports" text="Sports" />
            <GoabCheckboxListItem value="music" text="Music" />
            <GoabCheckboxListItem value="movies" text="Movies" />
            <GoabCheckboxListItem value="books" text="Books" />
            <GoabCheckboxListItem value="travel" text="Travel" />
          </GoabCheckboxList>
        </GoabFormItem>

        <div style={{ marginTop: '1rem', gap: '1rem', display: 'flex' }}>
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>Submit Form</button>
          <button type="button" onClick={resetForm} style={{ padding: '0.5rem 1rem' }}>Reset Form</button>
          <button type="button" onClick={setFormSampleValues} style={{ padding: '0.5rem 1rem' }}>Set Sample Values</button>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <p><strong>Form Values:</strong> {JSON.stringify(formValues, null, 2)}</p>
        </div>
      </form>

      <hr />

      <h2>With Max Width</h2>
      <GoabFormItem label="Constrained Width" helpText="This checkbox list has a maximum width">
        <GoabCheckboxList
          name="constrainedWidth"
          maxWidth="400px"
          value={selectedValues3}
          onChange={handleChange3}>
          <GoabCheckboxListItem value="option1" text="This is a very long option text that might wrap" />
          <GoabCheckboxListItem value="option2" text="Another long option to demonstrate wrapping behavior" />
          <GoabCheckboxListItem value="option3" text="Short option" />
        </GoabCheckboxList>
      </GoabFormItem>

      <hr />

      <h2>With Margins</h2>
      <GoabFormItem label="Margin Spacing" helpText="Testing margin properties">
        <GoabCheckboxList
          name="marginTest"
          mt="l"
          mb="xl"
          ml="m"
          mr="s"
          value={selectedValues3}
          onChange={handleChange3}>
          <GoabCheckboxListItem value="option1" text="Option 1" />
          <GoabCheckboxListItem value="option2" text="Option 2" />
        </GoabCheckboxList>
      </GoabFormItem>

      <hr />

      <h2>ARIA Label Test</h2>
      <GoabFormItem label="Custom ARIA Label" helpText="Testing custom aria-label">
        <GoabCheckboxList
          name="ariaLabelTest"
          ariaLabel="Custom accessibility label for screen readers"
          value={selectedValues3}
          onChange={handleChange3}>
          <GoabCheckboxListItem value="option1" text="Option 1" />
          <GoabCheckboxListItem value="option2" text="Option 2" />
        </GoabCheckboxList>
      </GoabFormItem>

      <hr />

      <h2>Test ID Example</h2>
      <GoabFormItem label="Test ID" helpText="Component with test ID for testing">
        <GoabCheckboxList
          name="testIdExample"
          testId="checkbox-list-test"
          value={selectedValues3}
          onChange={handleChange3}>
          <GoabCheckboxListItem value="option1" text="Option 1" testId="option1-test" />
          <GoabCheckboxListItem value="option2" text="Option 2" testId="option2-test" />
        </GoabCheckboxList>
      </GoabFormItem>
    </>
  );
};
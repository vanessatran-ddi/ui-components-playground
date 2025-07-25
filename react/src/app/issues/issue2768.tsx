import {
  GoabButton,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem,
} from "@abgov/react-components";
import { GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";
import { useState } from "react";

export const Issue2768 = () => {
  const [radioDisabled, setRadioDisabled] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDisabled = () => {
    setRadioDisabled(!radioDisabled);
  };

  const handleRadioChange = (event: GoabRadioGroupOnChangeDetail) => {
    setSelectedValue(event.value);
  };

  return (
    <>
      <h1>Issue-2768: Dynamic Disabled State for Radio Group</h1>

      <p>This example demonstrates the ability to dynamically enable/disable a radio group after page load.</p>

      <GoabButton type="primary" onClick={toggleDisabled}>
        {radioDisabled ? 'Enable' : 'Disable'} Radio Group
      </GoabButton>

      <br /><br />

      <GoabFormItem label="Select your preference">
        <GoabRadioGroup
          name="preference"
          disabled={radioDisabled}
          value={selectedValue}
          onChange={handleRadioChange}
        >
          <GoabRadioItem value="option1" label="Option 1" />
          <GoabRadioItem value="option2" label="Option 2" />
          <GoabRadioItem value="option3" label="Option 3" />
        </GoabRadioGroup>
      </GoabFormItem>

      <p>Disabled State: {radioDisabled ? 'Disabled' : 'Enabled'}</p>
      <p>Selected Value: {selectedValue || 'None selected'}</p>
    </>
  );
};

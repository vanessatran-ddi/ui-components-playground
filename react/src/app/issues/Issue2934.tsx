import { 
  GoabDropdown, 
  GoabDropdownItem, 
  GoabRadioGroup, 
  GoabRadioItem, 
  GoabFormItem,
  GoabCallout 
} from "@abgov/react-components";
import { useState } from "react";
import { 
  GoabDropdownOnChangeDetail, 
  GoabRadioGroupOnChangeDetail 
} from "@abgov/ui-components-common";

export const Issue2934 = () => {
  // String values
  const [stringDropdownValue, setStringDropdownValue] = useState<string>("");
  const [stringRadioValue, setStringRadioValue] = useState<string>("");
  
  // Number values
  const [numberDropdownValue, setNumberDropdownValue] = useState<number | undefined>(undefined);
  const [numberRadioValue, setNumberRadioValue] = useState<number | undefined>(undefined);
  
  // Boolean values (radio only)
  const [booleanRadioValue, setBooleanRadioValue] = useState<boolean | undefined>(undefined);

  const handleStringDropdownChange = (detail: GoabDropdownOnChangeDetail) => {
    console.log('String Dropdown Change:', detail);
    setStringDropdownValue(detail.value as string || "");
  };

  const handleNumberDropdownChange = (detail: GoabDropdownOnChangeDetail) => {
    console.log('Number Dropdown Change:', detail);
    setNumberDropdownValue(detail.value as number);
  };

  const handleStringRadioChange = (detail: GoabRadioGroupOnChangeDetail) => {
    console.log('String Radio Change:', detail);
    setStringRadioValue(detail.value as string);
  };

  const handleNumberRadioChange = (detail: GoabRadioGroupOnChangeDetail) => {
    console.log('Number Radio Change:', detail);
    setNumberRadioValue(detail.value as number);
  };

  const handleBooleanRadioChange = (detail: GoabRadioGroupOnChangeDetail) => {
    console.log('Boolean Radio Change:', detail);
    setBooleanRadioValue(detail.value as boolean);
  };

  return (
    <>
      <h1>Issue #2934 - Dropdown and Radio Support for Number|String|Boolean Values</h1>
      
      <GoabCallout type="information" mb="l">
        This example demonstrates that dropdown and radio components properly support different value types (number, string, boolean for radio).
      </GoabCallout>

      <h2>Dropdown Examples</h2>

      <GoabFormItem label="Dropdown with String Values" mb="m">
        <GoabDropdown 
          name="stringDropdown" 
          value={stringDropdownValue} 
          onChange={handleStringDropdownChange}
        >
          <GoabDropdownItem value="option1" label="Option 1" />
          <GoabDropdownItem value="option2" label="Option 2" />
          <GoabDropdownItem value="option3" label="Option 3" />
        </GoabDropdown>
      </GoabFormItem>

      <GoabFormItem label="Dropdown with Number Values" mb="m">
        <GoabDropdown 
          name="numberDropdown" 
          value={numberDropdownValue} 
          onChange={handleNumberDropdownChange}
        >
          <GoabDropdownItem value={1} label="One" />
          <GoabDropdownItem value={2} label="Two" />
          <GoabDropdownItem value={3} label="Three" />
        </GoabDropdown>
      </GoabFormItem>

      <h2>Radio Group Examples</h2>

      <GoabFormItem label="Radio Group with String Values" mb="m">
        <GoabRadioGroup 
          name="stringRadio" 
          value={stringRadioValue} 
          onChange={handleStringRadioChange}
        >
          <GoabRadioItem name="stringRadio" value="red" label="Red" />
          <GoabRadioItem name="stringRadio" value="green" label="Green" />
          <GoabRadioItem name="stringRadio" value="blue" label="Blue" />
        </GoabRadioGroup>
      </GoabFormItem>

      <GoabFormItem label="Radio Group with Number Values" mb="m">
        <GoabRadioGroup 
          name="numberRadio" 
          value={numberRadioValue} 
          onChange={handleNumberRadioChange}
        >
          <GoabRadioItem name="numberRadio" value={10} label="Ten" />
          <GoabRadioItem name="numberRadio" value={20} label="Twenty" />
          <GoabRadioItem name="numberRadio" value={30} label="Thirty" />
        </GoabRadioGroup>
      </GoabFormItem>

      <GoabFormItem label="Radio Group with Boolean Values" mb="m">
        <GoabRadioGroup 
          name="booleanRadio" 
          value={booleanRadioValue} 
          onChange={handleBooleanRadioChange}
        >
          <GoabRadioItem name="booleanRadio" value={true} label="Yes (True)" />
          <GoabRadioItem name="booleanRadio" value={false} label="No (False)" />
        </GoabRadioGroup>
      </GoabFormItem>

      <div style={{ margin: "2rem 0", padding: "1rem", background: "#f7fafc", borderLeft: "4px solid #4299e1" }}>
        <h3>Testing Instructions</h3>
        <ul>
          <li>All dropdowns should display and select their respective value types</li>
          <li>All radio groups should work with their respective value types</li>
          <li>Check browser console for change event details</li>
          <li>Values should be properly typed (string, number, boolean)</li>
        </ul>

        <p><strong>Current Values:</strong></p>
        <p>String Dropdown: {stringDropdownValue || "Not selected"}</p>
        <p>Number Dropdown: {numberDropdownValue ?? "Not selected"}</p>
        <p>String Radio: {stringRadioValue || "Not selected"}</p>
        <p>Number Radio: {numberRadioValue ?? "Not selected"}</p>
        <p>Boolean Radio: {booleanRadioValue != null ? booleanRadioValue.toString() : "Not selected"}</p>
      </div>
    </>
  );
};
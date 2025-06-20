import { GoabFormItem, GoabInput, GoabDropdown, GoabDropdownItem, GoabCallout } from "@abgov/react-components";
import { useState } from "react";
import { GoabInputOnChangeDetail, GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";

export const Issue2789 = () => {
  const [dropdownValue1, setDropdownValue1] = useState("");
  const [dropdownValue2, setDropdownValue2] = useState("");
  const [dropdownValue3, setDropdownValue3] = useState("");
  const [dropdownValue4, setDropdownValue4] = useState("");
  
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  
  const [dropdownContainerValue, setDropdownContainerValue] = useState("");
  const [inputContainerValue, setInputContainerValue] = useState("");

  return (
    <>
      <h1>Issue #2789 - Width rem and percentage for Dropdown and Input</h1>
      
      <GoabCallout type="information" mb="l">
        This example demonstrates that dropdown and input components properly support width values in rem and percentage units.
      </GoabCallout>

      <h2>Dropdown Examples</h2>

      <GoabFormItem label="Dropdown with 20rem width" mb="m">
        <GoabDropdown 
          name="dropdown1" 
          value={dropdownValue1} 
          onChange={(detail: GoabDropdownOnChangeDetail) => setDropdownValue1(detail.value || "")}
          width="20rem"
        >
          <GoabDropdownItem value="option1" label="Option 1"></GoabDropdownItem>
          <GoabDropdownItem value="option2" label="Option 2"></GoabDropdownItem>
          <GoabDropdownItem value="option3" label="Option 3"></GoabDropdownItem>
        </GoabDropdown>
      </GoabFormItem>

      <GoabFormItem label="Dropdown with 30rem width" mb="m">
        <GoabDropdown 
          name="dropdown2" 
          value={dropdownValue2} 
          onChange={(detail: GoabDropdownOnChangeDetail) => setDropdownValue2(detail.value || "")}
          width="30rem"
        >
          <GoabDropdownItem value="option1" label="Option 1"></GoabDropdownItem>
          <GoabDropdownItem value="option2" label="Option 2"></GoabDropdownItem>
          <GoabDropdownItem value="option3" label="Option 3"></GoabDropdownItem>
        </GoabDropdown>
      </GoabFormItem>

      <GoabFormItem label="Dropdown with 50% width" mb="m">
        <GoabDropdown 
          name="dropdown3" 
          value={dropdownValue3} 
          onChange={(detail: GoabDropdownOnChangeDetail) => setDropdownValue3(detail.value || "")}
          width="50%"
        >
          <GoabDropdownItem value="option1" label="Option 1"></GoabDropdownItem>
          <GoabDropdownItem value="option2" label="Option 2"></GoabDropdownItem>
          <GoabDropdownItem value="option3" label="Option 3"></GoabDropdownItem>
        </GoabDropdown>
      </GoabFormItem>

      <GoabFormItem label="Dropdown with 100% width" mb="m">
        <GoabDropdown 
          name="dropdown4" 
          value={dropdownValue4} 
          onChange={(detail: GoabDropdownOnChangeDetail) => setDropdownValue4(detail.value || "")}
          width="100%"
        >
          <GoabDropdownItem value="option1" label="Option 1"></GoabDropdownItem>
          <GoabDropdownItem value="option2" label="Option 2"></GoabDropdownItem>
          <GoabDropdownItem value="option3" label="Option 3"></GoabDropdownItem>
        </GoabDropdown>
      </GoabFormItem>

      <h2>Input Examples</h2>

      <GoabFormItem label="Input with 15rem width" mb="m">
        <GoabInput 
          name="input1" 
          type="text" 
          value={inputValue1} 
          onChange={(detail: GoabInputOnChangeDetail) => setInputValue1(detail.value || "")}
          width="15rem"
        />
      </GoabFormItem>

      <GoabFormItem label="Input with 25rem width" mb="m">
        <GoabInput 
          name="input2" 
          type="text" 
          value={inputValue2} 
          onChange={(detail: GoabInputOnChangeDetail) => setInputValue2(detail.value || "")}
          width="25rem"
        />
      </GoabFormItem>

      <GoabFormItem label="Input with 50% width" mb="m">
        <GoabInput 
          name="input3" 
          type="text" 
          value={inputValue3} 
          onChange={(detail: GoabInputOnChangeDetail) => setInputValue3(detail.value || "")}
          width="50%"
        />
      </GoabFormItem>

      <GoabFormItem label="Input with 75% width" mb="m">
        <GoabInput 
          name="input4" 
          type="text" 
          value={inputValue4} 
          onChange={(detail: GoabInputOnChangeDetail) => setInputValue4(detail.value || "")}
          width="75%"
        />
      </GoabFormItem>

      <h2>Mixed Examples in a Container</h2>

      <div style={{ border: "1px solid #ccc", padding: "20px", marginTop: "20px" }}>
        <p>Container with border to show percentage widths relative to parent</p>
        
        <GoabFormItem label="25% width dropdown" mb="m">
          <GoabDropdown 
            name="dropdownContainer" 
            width="25%"
            value={dropdownContainerValue}
            onChange={(detail: GoabDropdownOnChangeDetail) => setDropdownContainerValue(detail.value || "")}
          >
            <GoabDropdownItem value="a" label="Option A"></GoabDropdownItem>
            <GoabDropdownItem value="b" label="Option B"></GoabDropdownItem>
          </GoabDropdown>
        </GoabFormItem>
        
        <GoabFormItem label="25% width input" mb="m">
          <GoabInput 
            name="inputContainer" 
            type="text" 
            width="25%" 
            value={inputContainerValue}
            onChange={(detail: GoabInputOnChangeDetail) => setInputContainerValue(detail.value || "")}
          />
        </GoabFormItem>
      </div>
    </>
  );
};
import { GoAButton, GoADatePicker, GoAFormItem } from "@abgov/react-components";
import { useState } from "react";

export function Datepicker() {
  const [value, setValue] = useState<Date>(new Date(2024, 3, 26));
  const [disabled, setDisabled] = useState<boolean>(false);

  function onChange(name: string, value: Date) {
    console.log("onChange is triggered ", name, value);
    setValue(value);
  }

  function toggleDisabled() {
    setDisabled(!disabled);
  }

  return (
    <>
      <GoAButton mb="xl" onClick={toggleDisabled}>
        Toggle Disabled State
      </GoAButton>
      <GoAFormItem label="Item">
        <GoADatePicker
          onChange={onChange}
          name="item"
          value={value}
          disabled={disabled}
        ></GoADatePicker>
      </GoAFormItem>
    </>
  );
}

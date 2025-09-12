import { GoabCheckbox, GoabFormItem } from "@abgov/react-components";
import { GoabCheckboxOnChangeDetail } from "@abgov/ui-components-common";
import { useState } from "react";

export const Issue3001 = () => {
  const [checkboxValue, setCheckboxValue] = useState<string>("");
  function checkboxOnChange(event: GoabCheckboxOnChangeDetail) {
    console.log(event.value);
    setCheckboxValue(event.value as string)
  }
  return (
    <GoabFormItem label="Basic" helpText={`Value selected is ${checkboxValue}`}>
      <GoabCheckbox name="item" text="Item" value="testValue" onChange={checkboxOnChange}></GoabCheckbox>
    </GoabFormItem>
  )
}

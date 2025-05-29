import {
  GoabCheckbox,
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem,
  GoabText,
} from "@abgov/react-components";
import {
  GoabCheckboxOnChangeDetail,
  GoabRadioGroupOnChangeDetail,
} from "@abgov/ui-components-common";
import { useState } from "react";

export const Issue1216 = () => {
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState("");

  function checkboxOnChange(event: GoabCheckboxOnChangeDetail) {
    console.log(event.value);
    setCheckbox(event.checked);
  }

  function radioGroupOnChange(event: GoabRadioGroupOnChangeDetail) {
    console.log("onChange", event.name, event.value);
    setRadio(event.value);
  }

  return (
    <>
      Checkbox value: {checkbox}
      <GoabCheckbox
        name="item"
        checked={checkbox}
        text="Social Insurance Number (SIN)"
        onChange={checkboxOnChange}
        revealAriaLabel="Hello world, I am a text content inside a reveal slot"
        reveal={
          <GoabText size="heading-m" tag="h1" mt="none" mb="none">
            Hello world, I am a text content inside a reveal slot.
          </GoabText>
        }
      ></GoabCheckbox>
      Radio value: {radio}
      <GoabFormItem label="Social Insurance Number (SIN)">
        <GoabRadioGroup name="item" value={radio} onChange={radioGroupOnChange} testId="test-radio-group">
          <GoabRadioItem
            value="1"
            label="Label 1"
            reveal={
              <GoabText size="heading-m" tag="h1" mt="none" mb="none">
                Hello world, I am a text content inside a reveal slot.
              </GoabText>
            }
            revealAriaLabel="Hello world, I am a text content inside a reveal slot"
          ></GoabRadioItem>
          <GoabRadioItem value="2" label="Label 2"></GoabRadioItem>
          <GoabRadioItem value="3" label="Label 3"></GoabRadioItem>
        </GoabRadioGroup>
      </GoabFormItem>
    </>
  );
};

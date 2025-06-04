import { GoabFormItem, GoabInput } from "@abgov/react-components";
import { useState } from "react";
import { GoabInputOnChangeDetail } from "@abgov/ui-components-common";

export const Issue2772 = () => {
  const [value, setValue] = useState<string>("");

  function inputOnChange(event: GoabInputOnChangeDetail) {
    setValue(event.value);
  }
  return (
    <>
      <form>
      <GoabFormItem label="With placeholder text align right">
        <GoabInput name="item" value={value} width="20ch" placeholder={"Example placeholder"} textAlign="right" onChange={inputOnChange}></GoabInput>
      </GoabFormItem>
        <GoabFormItem label="leading icon">
          <GoabInput name="item" value={value} textAlign="right" onChange={inputOnChange} leadingIcon={"arrow-back"}></GoabInput>
        </GoabFormItem>
        <GoabFormItem label="trailing icon">
          <GoabInput name="item" value={value} textAlign="right" onChange={inputOnChange} trailingIcon={"arrow-up"}></GoabInput>
        </GoabFormItem>
        <GoabFormItem label="Both icons">
          <GoabInput name="item" value={value} textAlign="right" onChange={inputOnChange} leadingIcon={"arrow-up"} trailingIcon={"text"}></GoabInput>
        </GoabFormItem>
        <GoabFormItem label="Leading content">
          <GoabInput name="item" value={value} textAlign="right" onChange={inputOnChange} leadingContent={<strong>A test</strong>}></GoabInput>
        </GoabFormItem>
        <GoabFormItem label="Trailing content">
          <GoabInput name="item" value={value} textAlign="right" onChange={inputOnChange} trailingContent={<strong>A test</strong>}></GoabInput>
        </GoabFormItem>
        <GoabFormItem label="Both trailing and leading content">
          <GoabInput name="item" value={value} textAlign="right" onChange={inputOnChange} trailingContent={<strong>A test</strong>} leadingContent={<strong>A test</strong>}></GoabInput>
        </GoabFormItem>
    </form>

    </>
  )
}

import { GoabDatePicker, GoabFormItem, GoabInput } from "@abgov/react-components";
import { GoabDatePickerOnChangeDetail, GoabInputOnChangeDetail } from "@abgov/ui-components-common";

export const Issue1813 = () => {
  function onChange(event: GoabDatePickerOnChangeDetail) {
    console.log(event.value);
  }
  function inputOnChange(event: GoabInputOnChangeDetail) {
    console.log(event.value);
  }
  return (
    <>
      <GoabFormItem label="100% Input">
        <GoabInput name="item" value="" width="20ch" onChange={inputOnChange}></GoabInput>
      </GoabFormItem>
      <GoabFormItem label="100%">
        <GoabDatePicker onChange={onChange} width="100%" name="item" value={new Date(2025,5,4)}></GoabDatePicker>
      </GoabFormItem>

      <GoabFormItem label="50ch Input">
        <GoabInput name="item" value="" width="50ch" onChange={inputOnChange}></GoabInput>
      </GoabFormItem>
      <GoabFormItem label="50ch">
        <GoabDatePicker onChange={onChange} width="50ch" name="item" value={new Date(2025,5,4)}></GoabDatePicker>
      </GoabFormItem>


      <GoabFormItem label="200px Input">
        <GoabInput name="item" value="" width="200px" onChange={inputOnChange}></GoabInput>
      </GoabFormItem>
      <GoabFormItem label="200px">
        <GoabDatePicker onChange={onChange} width="200px" name="item" value={new Date(2025,5,4)}></GoabDatePicker>
      </GoabFormItem>
    </>

  )
}

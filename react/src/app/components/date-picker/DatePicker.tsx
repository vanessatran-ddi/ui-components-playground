import { useState } from "react";
import {
  GoabBlock,
  GoabButton,
  GoabDatePicker,
  GoabFormItem,
} from "@abgov/react-components";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";

export const DatePicker = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [dateString, setDateString] = useState<string>();
  const [dateInput, setDateInput] = useState<Date | undefined>();
  const [dateInputString, setDateInputString] = useState<string>();

  const setNewDate = (value: Date | undefined) => {
    setDate(value);
  };

  function setToday() {
    const d = new Date();
    d.setDate(d.getDate());

    setDate(d);
  }
  return (
    <>
      <GoabBlock gap="s" alignment="end">
        <GoabFormItem label="Select a date(using Date object for value)" helpText={date?.toDateString()}>
          <GoabDatePicker
            name="item"
            value={date}
            onChange={(e: GoabDatePickerOnChangeDetail) => setNewDate(e.value as Date)}
          ></GoabDatePicker>
        </GoabFormItem>
        <GoabButton type="tertiary" onClick={setToday} mr="l">
          Today
        </GoabButton>
      </GoabBlock>
      <GoabBlock gap="s" alignment="end" mt={"xl"}>
        <GoabFormItem label="Select a date(using string for value)" helpText={dateString}>
          <GoabDatePicker
            name="item"
            value={dateString}
            onChange={(e: GoabDatePickerOnChangeDetail) => {
              console.log("under string I have e", e.valueStr)
              setDateString(e.valueStr);
            }}
          ></GoabDatePicker>
        </GoabFormItem>
      </GoabBlock>


      <GoabBlock gap="s" alignment="end" mt={"xl"}>
        <GoabFormItem label="Select a date(type input)" helpText={`${dateInputString}`}>
          <GoabDatePicker
            name="item"
            type={"input"}
            value={dateInputString}
            onChange={(e: GoabDatePickerOnChangeDetail) => {
              setDateInputString(e.valueStr);
              console.log(e.valueStr);
            }}
          ></GoabDatePicker>
        </GoabFormItem>
      </GoabBlock>

      <GoabBlock gap="s" alignment="end" mt={"xl"}>
        <GoabFormItem label="Select a date(type input)" helpText={`${dateInput}`}>
          <GoabDatePicker
            name="item"
            type={"input"}
            value={dateInput}
            onChange={(e: GoabDatePickerOnChangeDetail) => {
              setDateInput(e.value);
              console.log(e.value);
            }}
          ></GoabDatePicker>
        </GoabFormItem>
      </GoabBlock>
    </>
  );
};

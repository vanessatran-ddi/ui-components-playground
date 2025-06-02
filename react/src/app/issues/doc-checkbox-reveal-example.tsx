import { GoabCheckbox, GoabFormItem, GoabInput } from "@abgov/react-components";

export const DocCheckboxRevealExample = () => {
  return (
    <>
      <GoabFormItem label="How would you like to be contacted?">
        <GoabCheckbox
          checked={false}
          name="optionOne"
          text="Email"
          reveal={
            <GoabFormItem label="Phone number">
              <GoabInput name="phoneNumber" onChange={(e) => {/** do nothing */}} value="" />
            </GoabFormItem>
          }
        />
        <GoabCheckbox
          checked={false}
          name="optionTwo"
          text="Phone"
          reveal={
            <GoabFormItem label="Email address">
              <GoabInput name="email" onChange={(e) =>  {/** do nothing */}} value="" />
            </GoabFormItem>
          }
        />
        <GoabCheckbox
          checked={false}
          name="optionThree"
          text="Text message"
          reveal={
            <GoabFormItem label="Mobile phone number">
              <GoabInput name="mobilePhoneNumber" onChange={(e) =>  {/** do nothing */}} value="" />
            </GoabFormItem>
          }
        />
      </GoabFormItem>
    </>
  )
}

import { GoabButton, GoabModal, GoabButtonGroup, GoabBlock, GoabFormItem, GoabDropdown, GoabDropdownItem, GoabInput, GoabDatePicker } from "@abgov/react-components";
import { useState } from "react";

export const Issue2446 = () => {
  const [open, setOpen] = useState(false);

  function onClick() {
    setOpen(!open);
  }

  return (
    <>
      <GoabButton onClick={onClick}>Show Modal</GoabButton>
      <GoabModal
        heading="Are you sure you want to exit your application?"
        role="alertdialog"
        open={open}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          obcaecati id molestiae, natus dicta, eaque qui iusto similique, libero
          explicabo eligendi eius laboriosam! Repellendus ducimus officia
          asperiores. Eos, eius numquam.
        </p>
        <GoabBlock gap="xl" direction="column">
    <form>
      <GoabFormItem  label="Provice/territory">
        <GoabDropdown name="province" value="alberta" onChange={() => {/** do nothing */}}>
          <GoabDropdownItem label="Alberta" value="alberta"></GoabDropdownItem>
          <GoabDropdownItem label="BC" value="bc"></GoabDropdownItem>
          <GoabDropdownItem label="Manitoba" value="manitoba"></GoabDropdownItem>
          <GoabDropdownItem label="New Brunswick" value="new-brunswick"></GoabDropdownItem>
          <GoabDropdownItem label="Newfoundland and Labrador" value="newfoundland"></GoabDropdownItem>
          <GoabDropdownItem label="Nova Scotia" value="nova-scotia"></GoabDropdownItem>
          <GoabDropdownItem label="Ontario" value="ontario"></GoabDropdownItem>
          <GoabDropdownItem label="Prince Edward Island" value="prince-edward-island"></GoabDropdownItem>
          <GoabDropdownItem label="Quebec" value="quebec"></GoabDropdownItem>
          <GoabDropdownItem label="Saskatchewan" value="saskatchewan"></GoabDropdownItem>
        </GoabDropdown>
      </GoabFormItem>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
</p>
<GoabFormItem label="Provice/territory">
  <GoabDropdown name="province" value="alberta" onChange={() => {/** do nothing */}}>
    <GoabDropdownItem label="Alberta" value="alberta"></GoabDropdownItem>
    <GoabDropdownItem label="BC" value="bc"></GoabDropdownItem>
    <GoabDropdownItem label="Manitoba" value="manitoba"></GoabDropdownItem>
    <GoabDropdownItem label="New Brunswick" value="new-brunswick"></GoabDropdownItem>
    <GoabDropdownItem label="Newfoundland and Labrador" value="newfoundland"></GoabDropdownItem>
    <GoabDropdownItem label="Nova Scotia" value="nova-scotia"></GoabDropdownItem>
    <GoabDropdownItem label="Ontario" value="ontario"></GoabDropdownItem>
    <GoabDropdownItem label="Prince Edward Island" value="prince-edward-island"></GoabDropdownItem>
    <GoabDropdownItem label="Quebec" value="quebec"></GoabDropdownItem>
    <GoabDropdownItem label="Saskatchewan" value="saskatchewan"></GoabDropdownItem>
  </GoabDropdown>
</GoabFormItem>
<p>        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

      </p>
      <GoabFormItem label="Street Address">
        <GoabInput name="address" type="text" width="100%" onChange={() => {/** do nothing */}}></GoabInput>
      </GoabFormItem>
      <GoabFormItem label="Suite or unit #">
        <GoabInput name="suite" type="text" width="100%" onChange={() => {/** do nothing */}}></GoabInput>
      </GoabFormItem>
      <GoabFormItem label="City/town">
        <GoabInput name="city" type="text" width="100%" onChange={() => {/** do nothing */}}></GoabInput>
      </GoabFormItem>
      <GoabBlock direction="row">
        <GoabFormItem label="Provice/territory">
          <GoabDropdown name="province" value="alberta" onChange={() => {/** do nothing */}}>
            <GoabDropdownItem label="Alberta" value="alberta"></GoabDropdownItem>
            <GoabDropdownItem label="BC" value="bc"></GoabDropdownItem>
            <GoabDropdownItem label="Manitoba" value="manitoba"></GoabDropdownItem>
            <GoabDropdownItem label="New Brunswick" value="new-brunswick"></GoabDropdownItem>
            <GoabDropdownItem label="Newfoundland and Labrador" value="newfoundland"></GoabDropdownItem>
            <GoabDropdownItem label="Nova Scotia" value="nova-scotia"></GoabDropdownItem>
            <GoabDropdownItem label="Ontario" value="ontario"></GoabDropdownItem>
            <GoabDropdownItem label="Prince Edward Island" value="prince-edward-island"></GoabDropdownItem>
            <GoabDropdownItem label="Quebec" value="quebec"></GoabDropdownItem>
            <GoabDropdownItem label="Saskatchewan" value="saskatchewan"></GoabDropdownItem>
          </GoabDropdown>
        </GoabFormItem>
        <GoabFormItem label="Postal Code">
          <GoabInput name="postalCode" type="text" width="100%" onChange={() => {/** do nothing */}}></GoabInput>
        </GoabFormItem>
      </GoabBlock>
      <GoabFormItem label="Item to up and down">
        <GoabDatePicker name="item" value={new Date()} onChange={(e) => console.log("Change here with new value ", e)}></GoabDatePicker>
      </GoabFormItem>

    </form>
  </GoabBlock>


        <GoabButtonGroup alignment="end" mt="xl">
          <GoabButton type="tertiary" onClick={onClick}>
            Cancel
          </GoabButton>
          <GoabButton type="primary" onClick={onClick}>
            Exit
          </GoabButton>
        </GoabButtonGroup>
      </GoabModal>
    </>
  );
};

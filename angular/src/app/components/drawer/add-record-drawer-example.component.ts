import { GoabBlock, GoabCheckbox, GoabDatePicker, GoabDatePickerOnChangeDetail, GoabDropdown, GoabDropdownItem, GoabDropdownOnChangeDetail, GoabFormItem, GoabInputOnChangeDetail, GoabRadioGroupOnChangeDetail } from "@abgov/angular-components";
import { GoabInput, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { GoabDrawer } from "@abgov/angular-components";
import { GoabButton } from "@abgov/angular-components";
import { Component } from "@angular/core";

@Component({
  selector: 'abgov-add-record-drawer-example',
  templateUrl: './add-record-drawer-example.component.html',
  standalone: true,
  imports: [GoabDrawer, GoabFormItem, GoabInput, GoabButton, GoabRadioGroup, GoabRadioItem, GoabDatePicker, GoabCheckbox, GoabBlock, GoabDropdown, GoabDropdownItem],
})
export class AddRecordDrawerExampleComponent {
  open = false;

  onClick() {
    this.open = true;
  }

  onClose() {
    this.open = false;
  }

  dropdownOnChange(event: GoabDropdownOnChangeDetail) {
    console.log(event);
  }

  inputOnChange(event: GoabInputOnChangeDetail) {
    console.log(event);
  }

  radioOnChange(event: GoabRadioGroupOnChangeDetail) {
    console.log(event);
  }

  dateOnChange(event: GoabDatePickerOnChangeDetail) {
    console.log(event);
  }

  closeDrawer() {
    this.open = false;
  }
}

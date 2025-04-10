import { GoabDatePicker, GoabDatePickerOnChangeDetail, GoabDropdown, GoabDropdownItem, GoabDropdownOnChangeDetail, GoabFormItem } from "@abgov/angular-components";
import { Component } from "@angular/core";

@Component({
  selector: 'abgov-issue-2003',
  templateUrl: './issue-2003.component.html',
  imports: [
    GoabDropdown,
    GoabDropdownItem,
    GoabFormItem,
    GoabDatePicker,
  ],
  standalone: true,
})
export class Issue2003Component {
  dropdownOnChange(event: GoabDropdownOnChangeDetail) {
    console.log(event.value);
  }
  item = new Date();
  dateOnChange(event: GoabDatePickerOnChangeDetail) {
  // handle change
    console.log(event.value);
  }
}
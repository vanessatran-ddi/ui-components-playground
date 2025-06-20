import { Component } from "@angular/core";
import { GoabFormItem, GoabInput, GoabDropdown, GoabDropdownItem, GoabCallout } from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2789",
  templateUrl: "./issue-2789.component.html",
  imports: [GoabFormItem, GoabInput, GoabDropdown, GoabDropdownItem, GoabCallout],
  standalone: true,
})
export class Issue2789Component {
  dropdownValue1 = "";
  dropdownValue2 = "";
  dropdownValue3 = "";
  dropdownValue4 = "";
  
  inputValue1 = "";
  inputValue2 = "";
  inputValue3 = "";
  inputValue4 = "";
}
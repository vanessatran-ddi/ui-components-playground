import { Component } from "@angular/core";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";
import { 
  GoabFormItem, 
  GoabDropdown, 
  GoabDropdownItem, 
  GoabDivider, 
  GoabCallout 
} from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2852",
  standalone: true,
  templateUrl: "./issue-2852.component.html",
  imports: [
    GoabFormItem,
    GoabDropdown,
    GoabDropdownItem,
    GoabDivider,
    GoabCallout
  ],
})
export class Issue2852Component {
  selectedValue = "";

  onChange(event: GoabDropdownOnChangeDetail) {
    console.log("Dropdown changed:", event);
    this.selectedValue = event.value || "";
  }
}
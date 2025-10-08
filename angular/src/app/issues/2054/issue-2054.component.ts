import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  GoabDropdown,
  GoabDropdownItem,
  GoabTooltip,
  GoabFormItem,
  GoabDivider,
  GoabButton, GoabTextArea,
} from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2054",
  templateUrl: "./issue-2054.component.html",
  standalone: true,
  imports: [
    GoabDropdown,
    GoabDropdownItem,
    GoabTooltip,
    GoabFormItem,
    GoabDivider,
    GoabButton,
    FormsModule,
    GoabTextArea,
  ],
})
export class Issue2054Component {
  // Dropdown test values
  dropdownValue1 = "";
  dropdownValue2 = "";
  dropdownValue3 = "";
  dropdownValue4 = "";

  // TextArea test values
  textAreaValue1 =
    "This is a test for maxWidth prop on TextArea component with 300px limit";
  textAreaValue2 = "This TextArea has a maxWidth of 500px to demonstrate the constraint";
  textAreaValue3 =
    "This TextArea has both width and maxWidth set - the smaller value should win";
  textAreaValue4 = "Default TextArea with 60ch maxWidth";

  // Tooltip test values
  tooltipText1 =
    "This is a tooltip with maxWidth set to 200px. The text should wrap within this constraint.";
  tooltipText2 =
    "This tooltip has maxWidth set to 400px, allowing for longer content display.";
  tooltipText3 = "Default tooltip without maxWidth constraint for comparison.";

  onDropdownChange(event: any, dropdownName: string) {
    console.log(`${dropdownName} changed:`, event.value);
  }

  onTextAreaChange(event: any, textAreaName: string) {
    console.log(`${textAreaName} changed:`, event.target.value);
  }
}

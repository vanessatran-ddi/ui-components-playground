import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  GoabDropdown,
  GoabDropdownItem,
  GoabTextArea,
  GoabTooltip,
  GoabContainer,
  GoabFormItem,
  GoabButton,
  GoabButtonGroup,
  GoabIconButton,
  GoabDivider,
  GoabBlock,
  GoabText
} from "@abgov/angular-components";

@Component({
  selector: "abgov-2054",
  templateUrl: "./2054.component.html",
  standalone: true,
  imports: [
    CommonModule,
    GoabDropdown,
    GoabDropdownItem,
    GoabTextArea,
    GoabTooltip,
    GoabContainer,
    GoabFormItem,
    GoabButton,
    GoabButtonGroup,
    GoabIconButton,
    GoabDivider,
    GoabBlock,
    GoabText
  ],
})
export class Issue2054Component {
  // Dropdown test properties
  selectedValue: string = "";
  multiSelectValues: string[] = [];

  // TextArea test properties
  textValue1: string = "This is a test text for textarea with maxwidth property. It should respect the maxwidth constraint.";
  textValue2: string = "";
  textValue3: string = "";

  // Dropdown options
  provinces = [
    { value: "ab", label: "Alberta" },
    { value: "bc", label: "British Columbia" },
    { value: "mb", label: "Manitoba" },
    { value: "nb", label: "New Brunswick" },
    { value: "nl", label: "Newfoundland and Labrador" },
    { value: "ns", label: "Nova Scotia" },
    { value: "nt", label: "Northwest Territories" },
    { value: "nu", label: "Nunavut" },
    { value: "on", label: "Ontario" },
    { value: "pe", label: "Prince Edward Island" },
    { value: "qc", label: "Quebec" },
    { value: "sk", label: "Saskatchewan" },
    { value: "yt", label: "Yukon" }
  ];

  longOptions = [
    { value: "1", label: "This is a very long option text that should demonstrate how the dropdown handles long content with maxwidth property" },
    { value: "2", label: "Another long option with extended text to test the width constraints" },
    { value: "3", label: "Short option" },
    { value: "4", label: "Medium length option text here" },
    { value: "5", label: "Yet another very long option text that goes on and on to test the maxwidth property behavior in dropdown components" }
  ];

  onDropdownChange(event: any) {
    console.log("Dropdown selection changed:", event.detail?.value);
    this.selectedValue = event.detail?.value || "";
  }

  onMultiSelectChange(event: any) {
    console.log("Multi-select changed:", event.detail?.value);
    this.multiSelectValues = event.detail?.value || [];
  }

  onTextAreaChange(event: any) {
    console.log("TextArea value changed:", event.detail?.value);
  }
}
import { Component } from "@angular/core";
import { GoabCheckbox, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { GoabCheckboxOnChangeDetail, GoabRadioGroupOnChangeDetail } from "@abgov/ui-components-common";

@Component({
  selector: "abgov-issue-2361",
  templateUrl: "./issue-2361.component.html",
  imports: [GoabCheckbox, GoabRadioGroup, GoabRadioItem],
  standalone: true,
})
export class Issue2361Component {
  // Checkbox states
  checkbox1Checked = false;
  checkbox2Checked = true;
  checkbox3Checked = false;

  // Radio states
  selectedRadio = "option1";

  onCheckbox1Change(event: GoabCheckboxOnChangeDetail) {
    console.log("Checkbox 1 changed:", event);
    this.checkbox1Checked = event.checked;
  }

  onCheckbox2Change(event: GoabCheckboxOnChangeDetail) {
    console.log("Checkbox 2 changed:", event);
    this.checkbox2Checked = event.checked;
  }

  onCheckbox3Change(event: GoabCheckboxOnChangeDetail) {
    console.log("Checkbox 3 changed:", event);
    this.checkbox3Checked = event.checked;
  }

  onRadioChange(event: GoabRadioGroupOnChangeDetail) {
    console.log("Radio changed:", event);
    this.selectedRadio = event.value as string;
  }
}
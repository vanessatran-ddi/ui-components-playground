import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  GoabButton,
  GoabButtonGroup,
  GoabCheckbox, GoabDropdown, GoabDropdownItem,
  GoabDropdownOnChangeDetail,
  GoabFormItem, GoabRadioGroup, GoabRadioGroupOnChangeDetail, GoabRadioItem,
} from "@abgov/angular-components";

@Component({
  selector: "abgov-drawer",
  templateUrl: "./drawer.component.html",
  standalone: true,
  imports: [GoabButton, GoabButtonGroup, GoabFormItem, GoabCheckbox, GoabDropdown, GoabDropdownItem, GoabRadioGroup, GoabRadioItem],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DrawerComponent {
  open = false;
  position = "right";
  assignedTo = "";
  dateTaken = "24";
  openDrawer(position: string) {
    this.open = true;
    this.position = position;
  }
  closeDrawer() {
    this.open = false;
  }
  onChangeAssignedTo(e: GoabDropdownOnChangeDetail) {
    this.assignedTo = e.value as string;
  }
  changeDateTaken(e: GoabRadioGroupOnChangeDetail) {
    this.dateTaken = e.value;
  }

}

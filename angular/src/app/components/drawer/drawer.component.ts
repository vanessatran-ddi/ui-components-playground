import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  GoabBadge, GoabBlock,
  GoabButton,
  GoabButtonGroup,
  GoabCheckbox, GoabDrawer,
  GoabDropdown,
  GoabDropdownItem,
  GoabDropdownOnChangeDetail,
  GoabFormItem, GoabIcon,
  GoabRadioGroup,
  GoabRadioGroupOnChangeDetail,
  GoabRadioItem,
} from "@abgov/angular-components";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";



@Component({
  selector: "abgov-drawer",
  templateUrl: "./drawer.component.html",
  standalone: true,
  imports: [
    GoabButton,
    GoabButtonGroup,
    GoabFormItem,
    GoabCheckbox,
    GoabDropdown,
    GoabDropdownItem,
    GoabRadioGroup,
    GoabRadioItem,
    ReactiveFormsModule,
    GoabBadge,
    GoabIcon,
    GoabBlock,
    GoabDrawer
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DrawerComponent {
  open = false;
  position = "right";
  assignedTo = "";
  dateTaken = "24";
  form!: FormGroup;
  openNoActions = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      hasAction: ["1"],
      position: ["left"],
    });
  }

  openDrawer() {
    if (this.form.get("hasAction")?.value === "1") {
      this.open = true;
    } else {
      this.openNoActions = true;
    }
  }

  closeDrawer() {
    this.open = false;
    this.openNoActions = false;
  }

  onChangeAssignedTo(e: GoabDropdownOnChangeDetail) {
    this.assignedTo = e.value as string;
  }

  changeDateTaken(e: GoabRadioGroupOnChangeDetail) {
    this.dateTaken = e.value;
  }
}

import { GoabBlock, GoabButtonGroup, GoabDatePicker, GoabDatePickerOnChangeDetail, GoabDropdown, GoabDropdownItem, GoabFormItem, GoabInput, GoabModal } from "@abgov/angular-components";
import { GoabButton } from "@abgov/angular-components";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'abgov-issue-2466',
  templateUrl: './issue-2466.component.html',
  standalone: true,
  imports: [
    GoabButton,
    GoabModal,
    GoabButtonGroup,
    ReactiveFormsModule,
    GoabFormItem,
    GoabInput,
    GoabDropdown,
    GoabDropdownItem,
    GoabBlock,
    GoabDatePicker,
  ],
})
export class Issue2466Component {
  open = false;
  form = new FormGroup({
    address: new FormControl(''),
    suite: new FormControl(''),
    city: new FormControl(''),
    province: new FormControl(''),
    postalCode: new FormControl(''),
    item: new FormControl(''),
  });

  item = new Date();
  dateOnChange(event: GoabDatePickerOnChangeDetail) {
  // handle change
    console.log(event.value);
  }

  onClick() {
    this.open = !this.open;
  }
}
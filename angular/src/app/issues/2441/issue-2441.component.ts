import { Component } from "@angular/core";
import { GoabDropdown, GoabDropdownItem, GoabFormItem } from "@abgov/angular-components";
import { Countries } from "../../countries.data";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "abgov-issue-2441",
  templateUrl: "./issue-2441.component.html",
  standalone: true,
  imports: [GoabFormItem, GoabDropdown, GoabDropdownItem, ReactiveFormsModule],
})
export class Issue2441Component {
  countries = Countries;
  fb!: FormGroup;
  constructor() {
    this.fb = new FormGroup({
      countryDropdown: new FormControl(null),
    });
  }
}

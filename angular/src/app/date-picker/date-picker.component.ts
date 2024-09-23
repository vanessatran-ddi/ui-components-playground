import { Component } from "@angular/core";
import { GoabButton, GoabDatePicker } from "@abgov/angular-components";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";

@Component({
 standalone: true,
 selector: "abgov-date-picker",
 templateUrl: "./date-picker.component.html",
 imports: [
   GoabDatePicker,
   FormsModule,
   ReactiveFormsModule,
   GoabButton
 ]
})
export class DatePickerComponent {
  selectedDate: undefined|Date = new Date();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      datePicker: new FormControl()
    });
  }

  handleDateChange(event: GoabDatePickerOnChangeDetail) {
    console.log("selected date: ", event);
  }

  reset() {
    this.form.reset();
  }
}

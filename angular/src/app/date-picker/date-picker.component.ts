import { Component } from "@angular/core";
import { GoabButton, GoabDatePicker, GoabFormItem } from "@abgov/angular-components";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";

@Component({
 standalone: true,
 selector: "abgov-date-picker",
 templateUrl: "./date-picker.component.html",
 imports: [
   GoabDatePicker,
   GoabFormItem,
   FormsModule,
   ReactiveFormsModule,
   GoabButton
 ]
})
export class DatePickerComponent {

  item = new Date();
  dateOnChange(event: GoabDatePickerOnChangeDetail) {
    // handle change
    console.log(event.value);
  }



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

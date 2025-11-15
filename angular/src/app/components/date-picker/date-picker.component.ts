import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GoabButton, GoabDatePicker, GoabFormItem } from "@abgov/angular-components";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GoabDatePickerOnChangeDetail } from "@abgov/ui-components-common";
import { JsonPipe } from "@angular/common";

@Component({
 standalone: true,
 selector: "abgov-date-picker",
 templateUrl: "./date-picker.component.html",
 imports: [
   GoabDatePicker,
   GoabFormItem,
   FormsModule,
   ReactiveFormsModule,
   GoabButton,
   JsonPipe
 ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DatePickerComponent {

  item: Date|undefined = new Date();
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
    // this.form.reset();
    this.form.setValue({"datePicker": ""});
    this.item = undefined;
  }

  // Timezone demonstration examples
  birthdateAsDate: Date | undefined = undefined;
  birthdateAsDateJSON = '';

  birthdateAsString: string | undefined = undefined;
  birthdateAsStringJSON = '';

  onBirthdateWithDateChange(event: GoabDatePickerOnChangeDetail) {
    // When using Date objects (problematic)
    this.birthdateAsDate = event.value as Date;

    // Show what gets sent to API - this will have timezone info
    if (this.birthdateAsDate) {
      this.birthdateAsDateJSON = JSON.stringify(this.birthdateAsDate);
    } else {
      this.birthdateAsDateJSON = '';
    }

    console.log('Date object:', this.birthdateAsDate);
    console.log('JSON serialized:', this.birthdateAsDateJSON);
  }

  onBirthdateWithStringChange(event: GoabDatePickerOnChangeDetail) {
    // When using strings (recommended)
    this.birthdateAsString = event.valueStr;

    // Show what gets sent to API - clean date string with no timezone
    if (this.birthdateAsString) {
      this.birthdateAsStringJSON = JSON.stringify(this.birthdateAsString);
    } else {
      this.birthdateAsStringJSON = '';
    }

    console.log('String value:', this.birthdateAsString);
    console.log('JSON serialized:', this.birthdateAsStringJSON);
  }
}

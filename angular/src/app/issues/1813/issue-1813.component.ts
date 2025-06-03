import { Component } from "@angular/core";
import {
  GoabDatePicker,
  GoabDatePickerOnChangeDetail,
  GoabFormItem,
  GoabInput,
  GoabInputOnChangeDetail,
} from "@abgov/angular-components";
@Component({
  selector: "abgov-issue-1813",
  templateUrl: "./issue-1813.component.html",
  imports: [GoabFormItem, GoabDatePicker, GoabInput],
  standalone: true,
})
export class Issue1813Component {
  item: Date | undefined = new Date();
  dateOnChange(event: GoabDatePickerOnChangeDetail) {
    // handle change
    console.log(event.value);
    this.item = event.value as Date;
  }
  value = "";
  inputOnChange(event: GoabInputOnChangeDetail) {
    // handle change
    console.log(event.value);
    this.value = event.value;
  }
}

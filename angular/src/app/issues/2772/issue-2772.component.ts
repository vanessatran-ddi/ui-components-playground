import { GoabInputOnChangeDetail } from "@abgov/ui-components-common";
import { Component } from "@angular/core";
import { GoabFormItem, GoabInput } from "@abgov/angular-components";
@Component({
  selector: "abgov-issue-2772",
  standalone: true,
  templateUrl: "./issue-2772.component.html",
  imports: [GoabFormItem, GoabInput],
})
export class Issue2772Component {
  value = "";
  inputOnChange(event: GoabInputOnChangeDetail) {
    // handle change
    console.log(event.value);
    this.value = event.value;
  }
}

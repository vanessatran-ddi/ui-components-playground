import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { 
  GoabDropdown, 
  GoabDropdownItem, 
  GoabRadioGroup, 
  GoabRadioItem, 
  GoabFormItem 
} from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2934",
  templateUrl: "./issue-2934.component.html",
  standalone: true,
  imports: [
    GoabDropdown, 
    GoabDropdownItem, 
    GoabRadioGroup, 
    GoabRadioItem, 
    GoabFormItem,
    FormsModule
  ],
})
export class Issue2934Component {
  // String values
  stringDropdownValue: string = "";
  stringRadioValue: string = "";
  
  // Number values
  numberDropdownValue: number | undefined = undefined;
  numberRadioValue: number | undefined = undefined;
  
  // Boolean values (radio only)
  booleanRadioValue: boolean | undefined = undefined;

  onStringDropdownChange(event: any) {
    console.log('String Dropdown Change:', event);
    this.stringDropdownValue = event.value;
  }

  onNumberDropdownChange(event: any) {
    console.log('Number Dropdown Change:', event);
    this.numberDropdownValue = event.value;
  }

  onStringRadioChange(event: any) {
    console.log('String Radio Change:', event);
    this.stringRadioValue = event.value;
  }

  onNumberRadioChange(event: any) {
    console.log('Number Radio Change:', event);
    this.numberRadioValue = event.value;
  }

  onBooleanRadioChange(event: any) {
    console.log('Boolean Radio Change:', event);
    this.booleanRadioValue = event.value;
  }
}
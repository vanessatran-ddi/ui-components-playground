import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GoabInput, GoabInputNumber } from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2837",
  templateUrl: "./issue-2837.component.html",
  standalone: true,
  imports: [GoabInput, GoabInputNumber, FormsModule],
})
export class Issue2837Component {
  inputValue = "";
  inputNumberValue: number | null = null;
}
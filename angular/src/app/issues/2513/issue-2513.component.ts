import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GoabBadge, GoabContainer } from "@abgov/angular-components";
@Component({
  selector: "abgov-issue-2513",
  templateUrl: "./issue-2513.component.html",
  styleUrls: ["./issue-2513.component.css"],
  standalone: true,
  imports: [
    GoabContainer,
    GoabBadge
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Issue2513Component {
  constructor() {/** do nothing **/}
}

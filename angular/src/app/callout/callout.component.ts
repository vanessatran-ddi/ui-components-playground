import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-callout",
  templateUrl: "./callout.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true
})
export class CalloutComponent {
  constructor() {}
}

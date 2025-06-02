import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-divider",
  templateUrl: "./divider.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true
})
export class DividerComponent {
  constructor() {}
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-badge",
  templateUrl: "./badge.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true
})
export class BadgeComponent {
  constructor() {}
}

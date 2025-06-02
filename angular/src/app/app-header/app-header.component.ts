import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-app-header",
  templateUrl: "./app-header.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppHeaderComponent {
  constructor() {}
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-container",
  templateUrl: "./container.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContainerComponent {
  constructor() {}
}

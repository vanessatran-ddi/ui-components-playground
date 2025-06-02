import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-accordion",
  templateUrl: "./accordion.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class AccordionComponent {
  constructor() {}
  open = false;
  onClick() {
    this.open = !this.open;
  }
}

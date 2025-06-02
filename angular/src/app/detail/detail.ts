import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-detail",
  templateUrl: "./detail.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailComponent {
  isOpen1 = true;
  constructor() {}
  toggle() {
    this.isOpen1 = !this.isOpen1;
  }
}

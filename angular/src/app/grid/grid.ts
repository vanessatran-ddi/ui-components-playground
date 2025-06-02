import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-grid-page",
  templateUrl: "./grid.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class GridComponent {
  constructor() {}
}

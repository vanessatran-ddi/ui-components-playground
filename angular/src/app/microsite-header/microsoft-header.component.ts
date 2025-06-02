import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-microsite-header",
  templateUrl: "./microsite-header.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class MicrositeHeaderComponent {
  constructor() {}
}

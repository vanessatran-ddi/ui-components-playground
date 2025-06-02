import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-hero-banner",
  templateUrl: "./hero-banner.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroBannerComponent {
  constructor() {}
}

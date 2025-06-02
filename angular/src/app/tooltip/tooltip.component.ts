import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-tooltip",
  templateUrl: "./tooltip.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
})
export class TooltipComponent {
  randomValue = "Trying some more long form text here to see how it's rendered"
  constructor() {}
}

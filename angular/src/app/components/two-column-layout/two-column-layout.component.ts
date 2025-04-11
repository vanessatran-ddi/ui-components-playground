import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GoabAppFooter } from "@abgov/angular-components";

@Component({
  selector: "abgov-two-column-layout",
  templateUrl: "./two-column-layout.component.html",
  standalone: true,
  imports: [GoabAppFooter],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TwoColumnLayoutComponent {
  constructor() {}
}

import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { GoabAppFooter } from "@abgov/angular-components";

@Component({
  selector: "abgov-three-column-layout",
  templateUrl: "./three-column-layout.component.html",
  imports: [GoabAppFooter],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ThreeColumnLayoutComponent {}

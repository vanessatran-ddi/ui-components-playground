import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "abgov-nav-link",
  templateUrl: "./navigation-link.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterLink],
})
export class NavigationLinkComponent {
  @Input() label = "test?";
  @Input() path = "";

  constructor() {}
}

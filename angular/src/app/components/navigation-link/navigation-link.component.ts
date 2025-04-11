import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "abgov-nav-link",
  templateUrl: "./navigation-link.component.html",
  standalone: true,
  imports: [RouterLink, RouterLinkActive]
})
export class NavigationLinkComponent {
  @Input() label = "test?";
  @Input() path = "";

  constructor() {/** do nothing **/}
}

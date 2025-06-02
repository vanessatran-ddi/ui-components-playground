import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: "abgov-sidemenu",
  templateUrl: "./sidemenu.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SideMenuComponent {
  constructor() { }
}

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  selector: "abgov-popover",
  templateUrl: "./popover.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PopoverComponent {
  constructor() {}

  onClick() {
    console.log("clicked");
  }
}

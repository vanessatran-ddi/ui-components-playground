import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgForOf } from "@angular/common";

@Component({
  selector: "abgov-chip",
  templateUrl: "./chip.component.html",
  standalone: true,
  imports: [NgForOf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChipComponent {
  chips = ["Doritos", "Fritos", "Lays"];

  constructor() {}

  deleteChip(chip: string) {
    this.chips = this.chips.filter((c) => c !== chip);
  }

  onClick() {
    console.log("deleting clicked");
  }
}

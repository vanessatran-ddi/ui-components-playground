import { GoabChip } from "@abgov/angular-components";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "abgov-chip",
  templateUrl: "./chip.component.html",
  imports: [
    GoabChip,
    CommonModule
  ]
})
export class ChipComponent {
  chips = ["Doritos", "Fritos", "Lays"];

  constructor() { }

  deleteChip(chip: string) {
    this.chips = this.chips.filter((c) => c !== chip);
  }

  onClick() {
    console.log("deleting clicked");
  }
}

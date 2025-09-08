import { Component, TemplateRef, ViewChild } from "@angular/core";
import { GoabButton, GoabButtonGroup, GoabModal } from "@abgov/angular-components";

@Component({
  selector: "abgov-2948",
  templateUrl: "./2948.component.html",
  standalone: true,
  imports: [
    GoabButton,
    GoabButtonGroup,
    GoabModal,
  ],
})
export class Issue2948Component {
  @ViewChild("actions", { static: true }) actions!: TemplateRef<any>;
  @ViewChild("heading", { static: true }) heading!: TemplateRef<any>;

  isOpen = false;
  isOpen2 = false;
  isOpen3 = false;

  openModal1() {
    this.isOpen = true;
  }

  closeModal1() {
    this.isOpen = false;
  }

  openModal2() {
    this.isOpen2 = true;
  }

  closeModal2() {
    this.isOpen2 = false;
  }

  openModal3() {
    this.isOpen3 = true;
  }

  closeModal3() {
    this.isOpen3 = false;
  }
}

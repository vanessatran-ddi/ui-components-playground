import { Component } from "@angular/core";
import { GoabButton, GoabButtonGroup, GoabModal } from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2410",
  standalone: true,
  templateUrl: "./issue-2410.component.html",
  imports: [GoabButtonGroup, GoabButton, GoabModal],
})
export class Issue2410Component {
  open = false;

  openModal() {
    this.open = true;
  }
  closeModal() {
    this.open = false;
  }
}

import { GoabModal, GoabButton, GoabButtonGroup } from "@abgov/angular-components";
import { Component } from "@angular/core";
@Component({
  selector: "abgov-issue-2415",
  templateUrl: "./issue-2415.component.html",
  standalone: true,
  imports: [
    GoabModal,
    GoabButton,
    GoabButtonGroup
  ]
})
export class Issue2415Component {
  open = false;
  onClick() {
    this.open = true;
  }
  onClose() {
    this.open = false;
  }
}

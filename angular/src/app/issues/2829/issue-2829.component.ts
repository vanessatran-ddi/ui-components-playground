import { Component } from "@angular/core";
import { GoabButton, GoabIcon, GoabModal } from "@abgov/angular-components";
@Component({
  selector: "abgov-issue-2829",
  templateUrl: "./issue-2829.component.html",
  standalone: true,
  imports: [GoabIcon, GoabModal, GoabButton],
})
export class Issue2829Component {
  openAlertDialogModal = false;
  openDialogModal = false;

  openAlertDialog() {
    this.openAlertDialogModal = true;
  }

  closeAlertDialog() {
    this.openAlertDialogModal = false;
  }

  openDialog() {
    this.openDialogModal = true;
  }

  closeDialog() {
    this.openDialogModal = false;
  }
}

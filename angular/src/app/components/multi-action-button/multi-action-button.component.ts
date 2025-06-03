import { Component } from '@angular/core';
import { GoabButton, GoabMultiActionButton } from "@abgov/angular-components";
@Component({
  selector: "abgov-multi-action-button",
  standalone: true,
  templateUrl: "./multi-action-button.component.html",
  imports: [GoabMultiActionButton, GoabButton],
})
export class MultiActionButtonComponent {
  click() {
    console.log("clicked");
  }
}

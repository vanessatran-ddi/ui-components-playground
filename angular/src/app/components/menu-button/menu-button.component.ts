import { Component } from '@angular/core';
import { GoabMenuButton, GoabMenuAction, GoabButtonGroup } from "@abgov/angular-components";
import { GoabMenuButtonOnActionDetail } from "@abgov/ui-components-common";

@Component({
  selector: "abgov-menu-button",
  standalone: true,
  templateUrl: "./menu-button.component.html",
  imports: [GoabMenuButton, GoabMenuAction, GoabButtonGroup],
})
export class MenuButtonComponent {
  onMenuAction(detail: GoabMenuButtonOnActionDetail) {
    console.log("Menu action triggered:", detail);
    alert(`Action: ${detail.action}`);
  }
}

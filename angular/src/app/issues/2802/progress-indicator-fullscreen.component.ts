import { Component } from '@angular/core';
import { GoabButton, GoabCircularProgress } from "@abgov/angular-components";

@Component({
  selector: "abgov-progress-indicator-fullscreen",
  standalone: true,
  templateUrl: "./progress-indicator-fullscreen.component.html",
  imports: [GoabButton, GoabCircularProgress],
})
export class ProgressIndicatorFullscreenComponent {
  visible = false;

  onClick() {
    this.visible = true;
    setTimeout(() => {
      this.visible = false;
    }, 3000);
  }
}

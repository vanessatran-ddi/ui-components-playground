import { Component } from "@angular/core";
import {
  GoabxWorkSideMenu,
  GoabxWorkSideMenuItem,
} from "@abgov/angular-components";

@Component({
  standalone: true,
  selector: "abgov-workspace-side-menu",
  templateUrl: "./workspace-side-menu.component.html",
  imports: [GoabxWorkSideMenu, GoabxWorkSideMenuItem],
})
export class WorkspaceSideMenuComponent {
  public menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

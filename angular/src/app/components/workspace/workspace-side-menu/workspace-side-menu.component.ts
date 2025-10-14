import { Component } from "@angular/core";
import { GoaxWorkSideMenu, GoaxWorkSideMenuItem } from "@abgov/angular-components";

@Component({
  standalone: true,
  selector: "abgov-workspace-side-menu",
  templateUrl: "./workspace-side-menu.component.html",
  imports: [
    GoaxWorkSideMenu,
    GoaxWorkSideMenuItem
  ]
})
export class WorkspaceSideMenuComponent {
  constructor() { }
}

import { Component } from "@angular/core";
import { GoabAppHeader, GoabAppHeaderMenu, GoabIcon } from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2662",
  templateUrl: "./issue-2662.component.html",
  imports: [GoabAppHeader, GoabAppHeaderMenu, GoabIcon],
  standalone: true,
})
export class Issue2662Component {}

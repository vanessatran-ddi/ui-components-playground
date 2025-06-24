import { Component } from "@angular/core";
import { GoabTabs, GoabTab, GoabButton } from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2720",
  standalone: true,
  imports: [GoabTabs, GoabTab, GoabButton],
  templateUrl: "./issue-2720.component.html",
})
export class Issue2720Component {
  navigateToTab(tabId: string) {
    window.location.hash = tabId;
  }
}
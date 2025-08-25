import { Component } from "@angular/core";
import { GoabBadge, GoabButton, GoabTab, GoabTable, GoabTabs } from "@abgov/angular-components";


@Component({
  selector: "abgov-issue-2471",
  templateUrl: "./issue-2471.component.html",
  standalone: true,
  imports: [GoabTabs, GoabTab, GoabTable, GoabBadge, GoabButton],
})
export class Issue2471Component {
  refreshPageWithHash() {
    window.location.hash = "#tab-0"; // First tab is loaded
    window.location.reload();
  }
}

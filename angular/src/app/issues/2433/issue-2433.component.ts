import { Component } from "@angular/core";
import { GoabTab, GoabTabs, GoabTabsOnChangeDetail } from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2433",
  templateUrl: "./issue-2433.component.html",
  imports: [GoabTabs, GoabTab],
  standalone: true,
})
export class Issue2433Component {
  tabsOnChange(event: GoabTabsOnChangeDetail) {
    const tabIndex = event.tab;
    console.log('Tab changed to ', tabIndex);
  }
}

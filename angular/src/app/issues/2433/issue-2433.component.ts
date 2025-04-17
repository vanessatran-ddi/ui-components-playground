import { Component } from "@angular/core";
import { GoabButton, GoabTab, GoabTabs, GoabTabsOnChangeDetail } from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2433",
  templateUrl: "./issue-2433.component.html",
  imports: [GoabTabs, GoabTab, GoabButton],
  standalone: true,
})
export class Issue2433Component {
  tabsOnChange(event: GoabTabsOnChangeDetail) {
    const tabIndex = event.tab;
    console.log("Tab changed to ", tabIndex);
  }
  refreshPageWithQueryString() {
    const url = new URL(window.location.href);
    url.searchParams.set('someQueryString', 'abc def');
    window.location.href = url.toString();
  }
}

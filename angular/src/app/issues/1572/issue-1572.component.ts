import { Component } from "@angular/core";
import { GoabAppFooter, GoabAppFooterMetaSection, GoabAppFooterNavSection } from "@abgov/angular-components";
@Component({
  selector: "abgov-issue-1572",
  templateUrl: "./issue-1572.component.html",
  imports: [GoabAppFooter, GoabAppFooterNavSection, GoabAppFooterMetaSection],
  standalone: true,
})
export class Issue1572Component {}

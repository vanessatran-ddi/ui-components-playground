import { Component } from "@angular/core";
import { GoabInput } from "@abgov/angular-components";


@Component({
  standalone: true,
  selector: "abgov-issue-2404",
  templateUrl: "./issue-2404.component.html",
  styleUrl: "./issue-2404.component.css",
  imports: [GoabInput, GoabInput],
})
export class Issue2404Component {
  clickEvents: string[] = [];

  onSearchClick() {
    this.addClickEvent("Search icon clicked!");
  }

  onCalendarClick() {
    this.addClickEvent("Calendar icon clicked!");
  }

  onEyeClick() {
    this.addClickEvent("Eye icon clicked!");
  }

  onCloseClick() {
    this.addClickEvent("Close icon clicked!");
  }

  private addClickEvent(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this.clickEvents.unshift(`[${timestamp}] ${message}`);

    // Keep only the last 10 events
    if (this.clickEvents.length > 10) {
      this.clickEvents = this.clickEvents.slice(0, 10);
    }
  }
}

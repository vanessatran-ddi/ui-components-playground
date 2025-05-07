import { Component, HostListener } from "@angular/core";
import { GoabButton, GoabIconButton, GoabPopover } from "@abgov/angular-components";
@Component({
  selector: "abgov-issue-2693",
  standalone: true,
  imports: [GoabPopover, GoabButton, GoabIconButton],
  templateUrl: "./issue-2693.component.html",
})
export class Issue2693Component {
  // In your component .ts file
  args = { key1: 'value1', key2: 'value2' };
  @HostListener('window:delete-user', ['$event'])
  onDeleteUser(event: any) {
    console.log("event is ", event);
    const actionData = event.detail;
    this.handleDeleteUser(actionData);
  }

  private handleDeleteUser(data: any) {
    console.log("Delete is clicked" + JSON.stringify(data))
  }
}

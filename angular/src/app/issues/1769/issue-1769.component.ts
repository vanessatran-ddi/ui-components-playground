import { Component } from '@angular/core';
import { GoabInput, GoabTextArea, GoabDropdown, GoabDropdownItem, GoabFormItem } from '@abgov/angular-components';

@Component({
  selector: 'app-issue-1769',
  templateUrl: './issue-1769.component.html',
  styleUrls: ['./issue-1769.component.css'],
  imports: [GoabInput, GoabTextArea, GoabDropdown, GoabDropdownItem, GoabFormItem],
  standalone: true,
})
export class Issue1769Component {
  constructor() { }
}
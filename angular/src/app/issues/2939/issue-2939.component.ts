import { Component } from '@angular/core';
import { GoabMicrositeHeader } from "@abgov/angular-components";

@Component({
  selector: 'app-issue-2939',
  templateUrl: './issue-2939.component.html',
  styleUrls: ['./issue-2939.component.css'],
  standalone: true,
  imports: [GoabMicrositeHeader],
})
export class Issue2939Component {
  
  onFeedbackClick() {
    alert('Feedback clicked!');
  }

}
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import {
  GoabTextArea,
  GoabFormItem,
  GoabCallout
} from "@abgov/angular-components";

@Component({
  selector: "abgov-issue-2492",
  templateUrl: "./issue-2492.component.html",
  standalone: true,
  imports: [
    GoabTextArea,
    GoabFormItem,
    GoabCallout,
    FormsModule,
    DatePipe
  ],
})
export class Issue2492Component {
  // TextArea values
  basicTextAreaValue = "";
  blurTextAreaValue = "";

  // Event tracking
  blurEventCount = 0;
  lastBlurValue = "";
  lastBlurName = "";
  changeEventCount = 0;
  lastChangeValue = "";

  // Timestamps
  lastBlurTime: Date | null = null;
  lastChangeTime: Date | null = null;

  onTextAreaChange(event: any) {
    console.log('TextArea Change Event:', event);
    this.changeEventCount++;
    this.lastChangeValue = event.value;
    this.lastChangeTime = new Date();
  }

  onTextAreaBlur(event: any) {
    console.log('TextArea Blur Event:', event);
    this.blurEventCount++;
    this.lastBlurValue = event.value;
    this.lastBlurName = event.name;
    this.lastBlurTime = new Date();
  }

  resetCounters() {
    this.blurEventCount = 0;
    this.changeEventCount = 0;
    this.lastBlurValue = "";
    this.lastBlurName = "";
    this.lastChangeValue = "";
    this.lastBlurTime = null;
    this.lastChangeTime = null;
  }

  getTimeDiff(): string {
    if (this.lastBlurTime && this.lastChangeTime) {
      const diff = this.lastBlurTime.getTime() - this.lastChangeTime.getTime();
      return `${diff}ms`;
    }
    return 'N/A';
  }
}
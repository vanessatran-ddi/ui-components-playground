import { Component, OnInit } from "@angular/core";
import { format, parseISO } from "date-fns";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  GoabBadge,
  GoabDatePicker,
  GoabFormItem,
  GoabFormItemSlot,
  GoabInput, GoabInputNumber,
} from "@abgov/angular-components";
import { JsonPipe, NgTemplateOutlet } from "@angular/common";
import { GoabInputOnChangeDetail } from "@abgov/ui-components-common";
import { Issue2409Component } from "./issue-2409.component";

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  standalone: true,
  selector: "abgov-input-component",
  templateUrl: "./input-component.component.html",
  imports: [
    GoabInput,
    GoabDatePicker,
    GoabBadge,
    GoabFormItem,
    ReactiveFormsModule,
    FormsModule,
    GoabFormItemSlot,
    NgTemplateOutlet,
    Issue2409Component,
    GoabInputNumber,
  ],
})
export class InputComponentComponent implements OnInit {
  example1 = "";
  example3 = "Test";
  example2Form: FormGroup;
  percentageValue: number|null = null;

  onPercentageChange(details: GoabInputOnChangeDetail<string>) {
    console.log("Percentage changed:", details);
    this.percentageValue = details.value ? parseFloat(details.value) : null;
  }

  handleExample1(event: GoabInputOnChangeDetail<string>) {
    this.example1 = event.value;
  }

  constructor() {
    this.example2Form = new FormGroup({
      inputControl: new FormControl(""),
    });
  }

  date = new Date();
  boundDate = format(this.date, "yyyy-MM-dd");
  formatDate = format(this.date, "yyyy-MM-dd");
  time = format(this.date, "HH:mm:ss");
  dateTime = format(this.date, "yyyy-MM-dd HH:mm");
  minDate = format(this.date, "yyyy-MM-dd");
  maxDate = format(this.getDateWithMonthOffset(1), "yyyy-MM-dd");

  reactiveDate2FormCtrl = new FormControl(new Date());

  wcVal = "event bound";
  tempDrivenVal = "template bound";
  reactiveFormCtrl = new FormControl("reactive form");
  reactiveDateFormCtrl = new FormControl(format(this.date, "yyyy-MM-dd"));
  reactiveTimeFormCtrl = new FormControl(this.time);
  sliderVal = 50;
  dateVal = format(this.date, "yyyy-MM-dd");
  arrayVal = undefined;

  users: User[] = [];

  form = new FormGroup({
    first: new FormControl("reactive form"),
  });

  onSubmit(e: any) {
    console.log("onSubmit", this.form);
  }

  getUser() {
    console.log("getting user");
    return {
      firstName: this.getFirstName(),
      lastName: this.getLastName(),
      age: this.getAge(),
    };
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.users.push(this.getUser());
    }
  }

  updateInput(event: any) {
    this.wcVal = event.value;
  }

  getDateWithMonthOffset(offset: number) {
    const d = new Date();
    d.setMonth(d.getMonth() + offset);
    return d;
  }

  onInputChangeEvent(event: any) {
    console.log("onEvent", event.detail);
  }

  onFocusEvent(event: any) {
    console.log("on Focus Event: ", event.detail);
  }

  onBlurEvent(event: any) {
    console.log("on Blur Event: ", event.detail);
  }

  onKeyPressEvent(event: any) {
    console.log("on Key Press Event: ", event.detail);
  }

  setDate(event: any) {
    const raw = event.detail.value;
    if (!raw) {
      return;
    }
    const d = parseISO(raw);
    this.boundDate = format(d, "yyyy-MM-dd");
  }

  handleTrailingIconClick() {
    console.log("handleTrailingIconClick");
  }

  private getFirstName(): string {
    const index = Math.floor(Math.random() * (firstNames.length - 1));
    return firstNames[index];
  }

  private getLastName(): string {
    const index = Math.floor(Math.random() * (lastNames.length - 1));
    return lastNames[index];
  }

  private getAge(): number {
    return 18 + Math.floor(Math.random() * 60);
  }
}


const firstNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Charles",
  "Josep",
  "Thomas",
  "Christopher",
  "Daniel",
  "Paul",
  "Mark",
  "Donald",
  "Georg",
  "Kenneth",
  "Steve",
  "Edward",
  "Brian",
  "Ronald",
  "Anthon",
  "Kevin",
  "Jason",
  "Matthew",
  "Gary",
  "Timothy",
  "Jose",
  "Larry",
  "Jeffrey",
  "Frank",
  "Scot",
  "Eric",
  "Stephen",
  "Andrew",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Thompson",
  "White",
  "Harris",
];

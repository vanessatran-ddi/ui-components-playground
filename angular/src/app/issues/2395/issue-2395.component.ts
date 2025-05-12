import { GoabPaginationOnChangeDetail } from "@abgov/ui-components-common";
import { faker } from "@faker-js/faker";
import { Component } from "@angular/core";
import { NgForOf } from "@angular/common";
import { GoabButton, GoabPagination, GoabTable } from "@abgov/angular-components";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: "abgov-issue-2395",
  standalone: true,
  templateUrl: "./issue-2395.component.html",
  imports: [NgForOf, GoabPagination, GoabTable, GoabButton],
})
export class Issue2395Component {
  users: User[] = [];
  pageUsers: User[] = [];
  page = 1;
  perPage = 10;
  handlePageChangeTriggerCounter = 0;
  handlePageChange(event: GoabPaginationOnChangeDetail) {
    this.handlePageChangeTriggerCounter++;
    this.page = event.page;
    const offset = (this.page - 1) * this.perPage;
    this.pageUsers = this.users.slice(offset, offset + this.perPage);
  }
  constructor() {
    for (let i = 0; i < 100; i++) {
      this.users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
      });
    }
    this.pageUsers = this.users.slice(0, this.perPage);
  }
  emptyTable() {
    this.pageUsers = [];
    this.users = [];
    this.page = 1;
    this.perPage = 10;
    this.handlePageChangeTriggerCounter = 0;
  }
}

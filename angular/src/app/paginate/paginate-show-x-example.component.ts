import { Component } from "@angular/core";
import { faker } from "@faker-js/faker";
import { GoabDropdownOnChangeDetail, GoabPaginationOnChangeDetail } from "@abgov/ui-components-common";
import {
  GoabBlock,
  GoabDropdown,
  GoabDropdownItem,
  GoabPagination,
  GoabSpacer,
  GoabTable,
} from "@abgov/angular-components";
import { NgFor } from "@angular/common";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}
@Component({
  selector: "abgov-paginate-show-e-example",
  templateUrl: "./paginate-show-x-example.component.html",
  standalone: true,
  imports: [
    GoabTable,
    GoabBlock,
    GoabDropdown,
    GoabDropdownItem,
    GoabSpacer,
    GoabPagination,
    NgFor,
  ],
})
export class PaginateShowXExampleComponent {
  users: User[] = [];
  pageUsers: User[] = [];
  page = 1;
  perPage = 10;
  total = 100;

  handlePageChange(event: GoabPaginationOnChangeDetail) {
    this.page = event.page;

    const offset: number = (this.page - 1) * this.perPage;
    this.pageUsers = this.users.slice(offset, offset + this.perPage);
  }

  handlePerPageCountChangeEvent(event: GoabDropdownOnChangeDetail) {
    this.page = 1;
    this.perPage = Number(event.value);

    this.pageUsers = this.users.slice(0, this.perPage);
  }

  constructor() {
    this.pageUsers = this.prepareUsers().slice(0, this.perPage);
  }

  prepareUsers() {
    for (let i = 0; i < this.total; i++) {
      this.users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
      });
    }

    return this.users;
  }
}

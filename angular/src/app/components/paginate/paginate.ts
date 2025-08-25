import { GoabPagination, GoabTable } from "@abgov/angular-components";
import { GoabPaginationOnChangeDetail } from "@abgov/ui-components-common";

import { Component } from "@angular/core";
import { faker } from "@faker-js/faker";
import { PaginateShowXExampleComponent } from "./paginate-show-x-example.component";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  standalone: true,
  selector: "abgov-paginate",
  templateUrl: "./paginate.html",
  imports: [
    GoabPagination,
    GoabTable,
    PaginateShowXExampleComponent
]
})
export class PaginateComponent {
  users: User[] = [];
  pageUsers: User[] = [];
  page = 1;

  handlePageChange(e: GoabPaginationOnChangeDetail) {
    this.page = e.page;

    const offset = (this.page - 1) * 10;
    this.pageUsers = this.users.slice(offset, offset + 10);
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

    this.pageUsers = this.users.slice(0, 10);
  }
}

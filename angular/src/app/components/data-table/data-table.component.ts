import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
  GoabBadge,
  GoabBadgeType, GoabButton,
  GoabCheckbox,
  GoabCheckboxOnChangeDetail,
  GoabTable, GoabTableOnSortDetail, GoabTableSortHeader,
} from "@abgov/angular-components";

type User = {
  idNumber: string;
  nameOfChild: string;
  dataStarted: string;
  dateSubmitted: string;
  status: string;
};

@Component({
  selector: "abgov-data-table",
  standalone: true,
  templateUrl: "./data-table.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [GoabBadge, GoabTable, GoabCheckbox, GoabTableSortHeader, GoabButton],
})
export class DataTableComponent {
  users: User[] = [
    {
      idNumber: "ABC126",
      nameOfChild: "Jeanne Volkman",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "Submitted",
    },
    {
      idNumber: "ABC125",
      nameOfChild: "Ronnie Rolfson",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "In review",
    },
    {
      idNumber: "ABC123",
      nameOfChild: "Andrea Cassin",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "Awaiting documentation",
    },
    {
      idNumber: "ABC122",
      nameOfChild: "Casey Dickinson",
      dataStarted: "Feb 19, 2023",
      dateSubmitted: "Feb 24, 2023",
      status: "Denied",
    },
    {
      idNumber: "ABC122",
      nameOfChild: "Jeanette Kulas",
      dataStarted: "Feb 19, 2023",
      dateSubmitted: "Feb 24, 2023",
      status: "Approved",
    },
    {
      idNumber: "ABC121",
      nameOfChild: "Rosalie Willms",
      dataStarted: "Feb 18, 2023",
      dateSubmitted: "Feb 23, 2023",
      status: "Closed",
    },
  ];
  _selectedUsers: string[] = [];

  isSelectedAll = false;

  deleteSelected() {
    this.users = this.users.filter((u) => !this._selectedUsers.includes(u.idNumber));
    this._selectedUsers = [];
  }

  getStatusBadgeType(status: string): GoabBadgeType {
    switch (status) {
      case "Submitted":
        return "information";
      case "In review":
        return "information";
      case "Awaiting documentation":
        return "important";
      case "Denied":
        return "emergency";
      case "Approved":
        return "success";
      case "Closed":
        return "information";
      default:
        return "information";
    }
  }

  selectAll(event: GoabCheckboxOnChangeDetail) {
    this.isSelectedAll = event.checked;
    if (event.checked) {
      this._selectedUsers = this.users.map(u => u.idNumber);
    } else {
      this._selectedUsers = [];
    }
  }

  isSelected(userId: string): boolean {
    return this._selectedUsers.includes(userId);
  }

  toggleSelection(userId: string, event: GoabCheckboxOnChangeDetail) {
    if (event.checked) {
      this._selectedUsers.push(userId);
    } else {
      this._selectedUsers = this._selectedUsers.filter(id => id !== userId);
    }
    this.isSelectedAll = this._selectedUsers.length === this.users.length;
  }

  handleSort(event: GoabTableOnSortDetail) {
    const { sortBy, sortDir } = event;
    this.users.sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir);
  }

  onDelete(userId: string) {
    alert("Are you sure you want to delete this user " + userId);
  }

  onOpen(userId: string) {
    alert("We are going to open a profile of this user " + userId);
  }
}

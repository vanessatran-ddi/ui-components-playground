import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";
import { GoabDropdown, GoabDropdownItem, GoabFormItem } from "@abgov/angular-components";

@Component({
  selector: "abgov-dropdown-dynamic-add-item",
  templateUrl: "./dropdown-dynamic-add-item.component.html",
  imports: [
    ReactiveFormsModule,
    GoabFormItem,
    GoabDropdown,
    GoabDropdownItem,
  ],
  standalone: true,
})
export class DropdownDynamicAddItemComponent implements OnInit {
  changeForm = new FormGroup({
    parentDropdown: new FormControl(""),
    childDropdown: new FormControl(""),
  });
  parents = ["All", "Big", "Small"];
  children = [""];

  childrenAll = ["Bus", "Elephant", "Key", "Pen", "Watch", "Truck"];
  childrenBig = ["Elephant", "Truck", "Bus"];
  childrenSmall = ["Key", "Pen", "Watch"];

  ngOnInit() {
    this.onChange();
  }

  onChange() {
    this.changeForm.get("parentDropdown")?.valueChanges
      .subscribe((value: string | null) => {
        if (value === "All") this.children = this.childrenAll;
        else if (value === "Big") this.children = this.childrenBig;
        else this.children = this.childrenSmall;
      });

    this.changeForm.get("childDropdown")?.valueChanges.subscribe((value: string | null) => {
      console.log("Child is selected with ", value);
    })
  }

  generateUniqueKey(index: number, item: string): string {
    return `${item}_${index}_${Math.random()}`;
  }
}

import { GoabCheckbox, GoabFormItem, GoabRadioGroup, GoabRadioItem } from '@abgov/angular-components';
import { GoabButton } from '@abgov/angular-components';
import { GoabDrawer } from '@abgov/angular-components';
import { Component } from '@angular/core';
import { GoabRadioGroupOnChangeDetail } from '@abgov/ui-components-common';
@Component({
  selector: 'abgov-filter-drawer-example',
  templateUrl: './filter-drawer-example.component.html',
  standalone: true,
  imports: [
    GoabButton,
    GoabDrawer,
    GoabFormItem,
    GoabCheckbox,
    GoabRadioGroup,
    GoabRadioItem,
  ],
})
export class FilterDrawerExampleComponent {
  open = false;

  onClick() {
    this.open = true;
  }

  onClose() {
    this.open = false;
  }

  radioOnChange(event: GoabRadioGroupOnChangeDetail) {
    console.log(event);
  }

  closeDrawer() {
    this.open = false;
  }
}

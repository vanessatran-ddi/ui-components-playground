import { Component } from "@angular/core";
import { GoabAccordion, GoabAppFooter, GoabAppFooterMetaSection, GoabAppFooterNavSection, GoabButton, GoabButtonGroup, GoabCheckbox, GoabContainer, GoabFormItem, GoabFormItemSlot, GoabInput, GoabModal, GoabRadioGroup, GoabRadioItem } from "@abgov/angular-components";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { FormGroup } from "@angular/forms";
@Component({
  selector: "abgov-issue-2365",
  templateUrl: "./issue-2365.component.html",
  standalone: true,
  imports: [
    GoabFormItem,
    GoabCheckbox,
    GoabAccordion,
    GoabContainer,
    GoabButton,
    GoabAppFooter,
    GoabAppFooterMetaSection,
    GoabAppFooterNavSection,
    GoabFormItemSlot,
    GoabInput,
    ReactiveFormsModule,
    GoabButtonGroup,
    GoabModal,
    GoabRadioGroup,
    GoabRadioItem,
  ],
})
export class Issue2365Component {
  form!: FormGroup;
  open = false;

  constructor() {
    this.form = new FormGroup({
      item: new FormControl(""),
      tuitionFeeAmount: new FormControl(""),
      selectOne: new FormControl(""),
    });
  }

  onClick() {
    this.open = !this.open;
  }
}

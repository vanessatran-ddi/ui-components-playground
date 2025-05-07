import { GoabFormStepperOnChangeDetail, GoabFormStepStatus } from "@abgov/ui-components-common";
import { Component } from "@angular/core";
import { GoabButton, GoabFormStep, GoabFormStepper, GoabPages } from "@abgov/angular-components";
@Component({
  selector: "abgov-issue-2408",
  templateUrl: "./issue-2408.component.html",
  imports: [GoabFormStepper, GoabFormStep, GoabPages, GoabButton],
  standalone: true,
})
export class Issue2408Component {
  step = -1;
  // controlled by the user based on form completion
  status: GoabFormStepStatus[] = ["not-started", "incomplete", "not-started", "complete"];
  updateStep(event: GoabFormStepperOnChangeDetail) {
    this.step = event.step;
  }
  setPage(page: number) {
    if (page < 1 || page > 4) return;
    this.step = page;
  }
}

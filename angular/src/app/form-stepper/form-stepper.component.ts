import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
@Component({
  selector: "abgov-form-stepper",
  templateUrl: "./form-stepper.component.html",
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormStepperComponent {
  step = -1;
  // controlled by the user based on form completion
  status = ["incomplete", "incomplete", "incomplete", "incomplete"];
  updateStep(event: Event) {
    console.log("updateStep is called under angular app", event);
    this.step = (event as CustomEvent).detail.step;
  }
  setPage(page: number) {
    console.log("setPage is called ", page);
    if (page < 1 || page > 4) return;
    this.step = page;
  }
}

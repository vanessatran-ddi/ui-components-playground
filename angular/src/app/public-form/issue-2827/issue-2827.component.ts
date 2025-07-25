import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  GoabFormState,
  PublicFormController,
} from "@abgov/ui-components-common";
import { requiredValidator } from "@abgov/ui-components-common";
import {
  GoabFieldset,
  GoabFormItem,
  GoabInput,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
} from "@abgov/angular-components";

type Page = "first-step" | "summary";

@Component({
  selector: "abgov-issue-2827",
  standalone: true,
  templateUrl: "./issue-2827.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    GoabPublicForm,
    GoabPublicFormPage,
    GoabFieldset,
    GoabFormItem,
    GoabPublicFormSummary,
    GoabInput,
  ],
})
export class Issue2827Component extends PublicFormController<Page> {
  formStateDisplay: string | null = null;

  constructor() {
    super("details");
  }

  override init(e: Event) {
    super.init(e);
    setTimeout(() => {
      this.initState({
        uuid: crypto.randomUUID(),
        form: {},
        history: [],
        editting: "",
        status: "not-started"
      });
    }, 0);
  }

  onContinue(e: Event, from: Page) {
    const detail = (e as CustomEvent).detail;
    if (detail?.cancelled) return;

    if (from === "first-step") {
      const [isValid] = this.validate(e, "firstName", [
        requiredValidator("First name is required."),
      ]);
      if (!isValid) return;

      this.complete();
    }
  }


  onCompleteIssue2827(formState: GoabFormState) {
    console.log("Complete issue2827", formState);
    this.formStateDisplay = JSON.stringify(formState, null, 2);
  }
}

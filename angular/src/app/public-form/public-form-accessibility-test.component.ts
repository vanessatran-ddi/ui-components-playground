import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { 
  GoabPublicForm, 
  GoabPublicFormPage, 
  GoabPublicFormSummary, 
  GoabFormItem, 
  GoabInput, 
  GoabFieldset,
  GoabCallout
} from "@abgov/angular-components";
import { GoabFormState, PublicFormController } from "@abgov/ui-components-common";

type Page = "personal-info" | "contact-info" | "additional-details" | "summary";

@Component({
  selector: "abgov-public-form-accessibility-test",
  templateUrl: "./public-form-accessibility-test.component.html",
  imports: [
    CommonModule,
    GoabPublicForm, 
    GoabPublicFormPage, 
    GoabPublicFormSummary, 
    GoabFormItem, 
    GoabInput, 
    GoabFieldset,
    GoabCallout
  ],
  standalone: true,
})
export class PublicFormAccessibilityTestComponent extends PublicFormController<Page> {
  formState: GoabFormState | null = null;

  constructor() {
    super("details");
  }

  onFormComplete(state: GoabFormState) {
    console.log("Form completed with state:", state);
    this.formState = state;
  }

  onFormInit(event: Event) {
    console.log("Form initialized:", event);
    this.init(event);
  }

  onFormStateChange(state: GoabFormState) {
    console.log("Form state changed:", state);
    this.formState = state;
  }

  onPageContinue(event: Event, from: string) {
    console.log(`Page ${from} continue event:`, event);
    let dest: Page | undefined = undefined;
    
    switch (from) {
      case "personal-info":
        dest = "contact-info";
        break;
      case "contact-info":
        dest = "additional-details";
        break;
      case "additional-details":
        dest = "summary";
        break;
    }
    
    if (dest) {
      this.continueTo(dest);
    }
  }
}
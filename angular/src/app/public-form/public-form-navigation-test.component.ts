import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { 
  GoabPublicForm, 
  GoabPublicFormPage, 
  GoabPublicFormSummary, 
  GoabFormItem, 
  GoabInput, 
  GoabRadioGroup, 
  GoabRadioItem, 
  GoabFieldset,
  GoabCallout
} from "@abgov/angular-components";
import { GoabFormState, PublicFormController } from "@abgov/ui-components-common";

type Page = "question" | "page-a" | "page-b" | "summary";

@Component({
  selector: "abgov-public-form-navigation-test",
  templateUrl: "./public-form-navigation-test.component.html",
  imports: [
    CommonModule,
    GoabPublicForm, 
    GoabPublicFormPage, 
    GoabPublicFormSummary, 
    GoabFormItem, 
    GoabInput, 
    GoabRadioGroup, 
    GoabRadioItem, 
    GoabFieldset,
    GoabCallout
  ],
  standalone: true,
})
export class PublicFormNavigationTestComponent extends PublicFormController<Page> {
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
    
    try {
      let dest: Page | undefined = undefined;
      
      switch (from) {
        case "question":
          dest = this.validateQuestion(event);
          break;
        case "page-a":
          dest = "summary";
          break;
        case "page-b":
          dest = "summary";
          break;
      }
      
      if (dest) {
        console.log("Calling continueTo with destination:", dest);
        this.continueTo(dest);
        console.log("continueTo completed successfully");
      } else {
        console.log("No destination determined, staying on current page");
      }
    } catch (error) {
      console.error("Error in onPageContinue:", error);
    }
  }

  validateQuestion(e: Event): Page | undefined {
    console.log("validateQuestion called with event:", e);
    const [isValid, value] = this.validate(e, "needs-services", []);
    console.log("Question validation - isValid:", isValid, "value:", value);
    
    // For radio buttons, we should always get a value if one is selected
    if (!value) {
      console.log("No value selected, staying on current page");
      return undefined;
    }
    
    if (value === "yes") {
      console.log("Navigating to page-a");
      return "page-a";
    } else if (value === "no") {
      console.log("Navigating to page-b");
      return "page-b";
    }
    
    console.log("Unexpected value:", value);
    return undefined;
  }
}
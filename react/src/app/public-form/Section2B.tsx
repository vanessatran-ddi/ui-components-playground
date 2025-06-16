import { GoabFormState, requiredValidator } from "@abgov/ui-components-common";
import { useState } from "react";
import {
  GoabButton,
  GoabFieldset,
  GoabFormItem,
  GoabInput,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicSubform,
  GoabPublicSubformIndex,
  GoabRadioGroup,
  GoabRadioItem,
  GoabTable,
  GoabText,
  usePublicFormController,
} from "@abgov/react-components";

type Page = "2B.1" | "2B.2" | "2B.3";
type DependentPage = "dependent-name";


interface Section2BProps {
  onComplete?: (state: GoabFormState) => void;
}
export const Section2B = ({onComplete}: Section2BProps) => {

  // Main form controller for Section2B pages
  const {
    init,
    continueTo,
    validate,
  } = usePublicFormController<Page>("details");

  // Dependents list controller (separate controller for subform)
  const {
    initList: initDependentsList,
    getStateList,
    controller: childFormController,
  } = usePublicFormController<DependentPage>("list");

  // Get the list of dependents - use controller state directly to avoid stale closures
  const dependents = () => {
    // Direct access to controller state, similar to Angular implementation
    if (!childFormController.state || !Array.isArray(childFormController.state)) {
      return [];
    }
    return childFormController.getStateList();
  };
  const onInit = (event: Event) => {
    init(event);
    // Let the web component handle its own initialization
    // Manual initState interferes with the Svelte form's automatic state creation
  }
  const onCompleteSection2B = (e: GoabFormState) => {
    console.log("Complete section2A", e);
    onComplete?.(e);
  }
  const onContinue = (e: Event, from: Page) => {
    console.log("onContinue", e, from);
    if ((e as CustomEvent).detail?.cancelled) return;

    let nextPage: Page | undefined;

    switch (from) {
      case "2B.1":
        nextPage = validate2B1(e);
        break;
      case "2B.2":
        nextPage = validate2B2(e);
        break;
      default:
        break;
    }

    if (nextPage) {
      continueTo(nextPage);
    }
  }

  const validate2B1 = (e: Event): Page | undefined => {
    const [isRequiredOk] = validate(e, "household-people", [requiredValidator("Please enter the number of people in your household.")]);
    if (!isRequiredOk) return undefined;

    return "2B.2";
  }

  const validate2B2 = (e: Event): Page | undefined => {
    const [isRequiredOk, dependentsValue] = validate(e, "dependents", [requiredValidator("Please select an option.")]);
    if (!isRequiredOk) return undefined;

    if (dependentsValue === "yes") {
      return "2B.3";
    } else {
      // If "No", complete the section
      return undefined;
    }
  }

  // Subform event handlers (following Angular pattern)
  const onSubformInit = (e: Event) => {
    console.log("Subform init:", e);
    initDependentsList(e);
  }

  const onSubformStateChange = (e: Event) => {
    console.log("Subform state change:", e);
    childFormController.updateListState(e);
  }

  // Dependent list management
  const handleEditDependent = (index: number) => {
    childFormController.edit(index);
  }

  const handleDeleteDependent = (index: number) => {
    childFormController.remove(index);
  }

  // Subform management (standard pattern)
  // The subform will handle add/edit/remove operations automatically
  // through the web component's built-in functionality

  return (
    <GoabPublicForm name={"section2b-form"} onComplete={onCompleteSection2B} onInit={onInit}>
      <GoabPublicFormPage
        id="2B.1"
        heading="How many people currently live in your household?"
        buttonText="Save and continue"
        onContinue={(e) => onContinue(e, "2B.1")}
      >
        <GoabFieldset>
          <GoabFormItem name="How many people currently live in your household?">
            <GoabInput name="household-people" trailingContent="People"/>
          </GoabFormItem>
        </GoabFieldset>
      </GoabPublicFormPage>

      <GoabPublicFormPage
        id="2B.2"
        heading="Do you have any dependents under the age of 18?"
        buttonText="Save and continue"
        onContinue={(e) => onContinue(e, "2B.2")}
      >
        <GoabFieldset>
          <GoabFormItem name="Do you have any dependents under the age of 18?">
            <GoabRadioGroup name="dependents">
              <GoabRadioItem value="yes" label={"Yes"}></GoabRadioItem>
              <GoabRadioItem value="no" label={"No"}></GoabRadioItem>
            </GoabRadioGroup>
          </GoabFormItem>
        </GoabFieldset>
      </GoabPublicFormPage>

      <GoabPublicFormPage
        id="2B.3"
        type={"multistep"}
        heading="Add dependants under the age of 18"
        buttonText="Save and continue"
        onContinue={(e) => onContinue(e, "2B.3")}
      >
        <GoabPublicSubform
          id="dependents-subform"
          name="dependents-subform"
          onInit={onSubformInit}
          onStateChange={onSubformStateChange}
        >
          <GoabPublicSubformIndex
            heading="Add dependants under the age of 18"
            sectionTitle="Dependent Information"
            actionButtonText="Add another dependant"
            buttonVisibility="visible"
          >
            <GoabText mb="l">
              Please provide information about any dependents under the age of 18 for whom you are responsible. Dependents include your biological or adopted children, stepchildren, and any other minors in your care. This information is necessary to determine eligibility for various benefits and services provided by the government. Ensure that you enter accurate details for each dependent, as this will help us process your application more efficiently and provide you with the appropriate support.
            </GoabText>

            {dependents().length > 0 && (
              <GoabTable width="100%" mb="xl">
                <thead>
                  <tr>
                    <th>Full name</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {dependents().map((item, index) => (
                    <tr key={index}>
                      <td>{item["fullName"]}</td>
                      <td className="goa-table-number-header">
                        <GoabButton onClick={() => handleEditDependent(index)}>
                          Edit
                        </GoabButton>
                      </td>
                      <td className="goa-table-number-header" style={{width: "0px"}}>
                        <GoabButton onClick={() => handleDeleteDependent(index)}>
                          Remove
                        </GoabButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </GoabTable>
            )}

          </GoabPublicSubformIndex>

          <GoabPublicFormPage
            id="dependent-name"
            sectionTitle="Dependent's profile"
            type="summary"
            buttonText="Continue"
          >
            <GoabFieldset>
              <GoabFormItem label="Full name">
                <GoabInput name="fullName" />
              </GoabFormItem>
            </GoabFieldset>
          </GoabPublicFormPage>
        </GoabPublicSubform>
      </GoabPublicFormPage>
    </GoabPublicForm>);
}

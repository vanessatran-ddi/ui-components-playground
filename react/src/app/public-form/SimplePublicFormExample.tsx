import React, {useState} from "react";
import {
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabCallout,
  GoabCheckbox,
  GoabDatePicker,
  GoabDetails,
  GoabDropdown,
  GoabDropdownItem,
  GoabFieldset,
  GoabFormItem,
  GoabInput,
  GoabLink,
  GoabPublicForm,
  GoabPublicFormPage,
  GoabPublicFormSummary,
  GoabPublicFormTask,
  GoabPublicFormTaskList,
  GoabRadioGroup,
  GoabRadioItem,
  GoabTable,
  GoabText,
  usePublicFormController
} from "@abgov/react-components";
import {requiredValidator, GoabFormState} from "@abgov/ui-components-common";
import {dateOfBirthValidator} from "./validator";
import { Section1A } from "./Section1A";

type CurrentView =
  | { type: "task"; taskId: string }
  | { type: "tasklist" };

type Page =
  "live-in-alberta"
  | "how-long-in-alberta"
  | "result-not-eligible"
  | "date-of-birth"
  | "current-employment"
  | "education-level"
  | "previously-applied"
  | "task-list-summary"
  | "terms-of-use"
  | "section1b-summary"
  | "2A.1"
  | "2A.2"
  | "2A.3"
  | "2A.3.a"
  | "2A.Review";

type TaskStatus = "completed" | "not-started" | "cannot-start";

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  state?: GoabFormState | null;
}

interface TaskSection {
  id: string;
  heading: string;
  tasks: Task[];
}

export const SimplePublicFormExample = () => {
  const [currentView, setCurrentView] = useState<CurrentView>({ type: "task", taskId: "section1a" });
  const [notEligibleMessage, setNotEligibleMessage] = useState("");

  const [taskSections, setTaskSections] = useState<TaskSection[]>([
    {
      id: "before-you-start",
      heading: "1. Before you start",
      tasks: [
        {
          id: "section1a",
          title: "Eligibility questions",
          status: "not-started",
          state: null
        },
        {
          id: "section1b",
          title: "Read terms of use",
          status: "cannot-start",
          state: null
        }
      ]
    },
    {
      id: "prepare-application",
      heading: "2. Prepare application",
      tasks: [
        {
          id: "section2a",
          title: "Your contact details",
          status: "cannot-start",
          state: null
        },
        {
          id: "section2b",
          title: "Your family",
          status: "cannot-start",
          state: null
        },
        {
          id: "section2c",
          title: "Verify your identity",
          status: "cannot-start",
          state: null
        }
      ]
    },
    {
      id: "schedule-service",
      heading: "3. Schedule service",
      tasks: [
        {
          id: "email-confirmation",
          title: "Receive email confirmation",
          status: "cannot-start",
          state: null
        },
        {
          id: "choose-date",
          title: "Choose date",
          status: "cannot-start",
          state: null
        },
        {
          id: "pay-fee",
          title: "Pay service fee",
          status: "cannot-start",
          state: null
        }
      ]
    }
  ]);

  const {
    init,
    initState,
    continueTo,
    validate,
    state,
  } = usePublicFormController<Page>("details");


  const onInit = (event: Event) => {
    init(event);
    setTimeout(() => {
      initState({
        uuid: crypto.randomUUID(),
        form: {},
        history: [],
        editting: "",
        status: "not-started"
      });
    }, 0)
  }

  const onComplete = () => {
    setCurrentView({ type: "tasklist" });
  }

  const navigateTo1B = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentView({ type: "task", taskId: "section1b" });
  }

  const onSection1AComplete = (state: GoabFormState) => {
    console.log("Section1A completed with state:", state);

    // Update the task status and state for section1a
    setTaskSections(prevSections =>
      prevSections.map(section => ({
        ...section,
        tasks: section.tasks.map(task =>
          task.id === "section1a"
            ? { ...task, status: "completed" as TaskStatus, state }
            : task.id === "section1b"
            ? { ...task, status: "not-started" as TaskStatus } // Enable next task
            : task
        )
      }))
    );

    // Switch to task list view
    setCurrentView({ type: "tasklist" });
  }

  // Calculate progress for the callout message
  const getProgressInfo = () => {
    const totalSections = taskSections.length;
    // A section is only completed when ALL tasks in that section are completed
    const completedSections = taskSections.filter(section =>
      section.tasks.every(task => task.status === "completed")
    ).length;

    if (completedSections === totalSections) {
      // All sections completed
      return {
        type: "information" as const,
        heading: "Waiting for your application to be confirmed",
        content: "You will receive an email notification when your application has been approved and is ready to continue."
      };
    } else if (completedSections === 0) {
      // No sections completed yet
      return {
        type: "information" as const,
        heading: `You have ${totalSections} sections to complete`,
        content: <GoabLink><a href="#" onClick={navigateTo1B}>Start terms of use</a></GoabLink>
      };
    } else {
      // Some sections completed
      return {
        type: "important" as const,
        heading: "Application incomplete",
        content: `You have completed ${completedSections} of ${totalSections} sections.`
      };
    }
  }

  return (
    <>
      {currentView.type === "task" && currentView.taskId === "section1a" && (
        <Section1A onComplete={onSection1AComplete} />
      )}

      {currentView.type === "tasklist" && (
        <div>
          <GoabText tag="h1" size="heading-xl">Apply for a service (demo)</GoabText>

          {(() => {
            const progressInfo = getProgressInfo();
            return (
              <GoabCallout
                type={progressInfo.type}
                size="medium"
                heading={progressInfo.heading}
                mb="2xl"
                mt="xl"
              >
                {progressInfo.content}
              </GoabCallout>
            );
          })()}

          {taskSections.map(section => (
            <div key={section.id}>
              <GoabPublicFormTaskList heading={section.heading}>
                <GoabTable width="100%" mb="2xl" mt="l">
                  <tbody>
                    {section.tasks.map(task => (
                      <tr key={task.id}>
                        <td>
                          <GoabPublicFormTask status={task.status}>
                            {task.status === "not-started" && task.id === "section1b" ? (
                              <GoabLink><a href="#" onClick={navigateTo1B}>{task.title}</a></GoabLink>
                            ) : (
                              task.title
                            )}
                          </GoabPublicFormTask>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </GoabTable>
              </GoabPublicFormTaskList>
            </div>
          ))}
        </div>
      )}

      {/*    /!* Section 1B Pages *!/*/}
      {/*    <GoabPublicFormPage*/}
      {/*      id="terms-of-use"*/}
      {/*      heading="Terms of use"*/}
      {/*      buttonText="Continue to next section"*/}
      {/*      onContinue={(e) => onContinue(e, "terms-of-use")}*/}
      {/*    >*/}
      {/*      <GoabText tag="p" size="body-m" color="secondary">*/}
      {/*        Donec malesuada sagittis fringilla pulvinar in molestie. Sagittis felis congue pellentesque tristique urna in habitasse. At faucibus commodo pellentesque enim nisl at. Fermentum quisque viverra diam amet consequat tellus. Amet interdum sit elementum nibh at justo.*/}
      {/*      </GoabText>*/}
      {/*      <GoabFieldset>*/}
      {/*        <GoabFormItem name="Terms of use">*/}
      {/*          <GoabCheckbox name="terms-of-use" value={"Yes"} text="I accept the terms of use." />*/}
      {/*        </GoabFormItem>*/}
      {/*      </GoabFieldset>*/}
      {/*    </GoabPublicFormPage>*/}

      {/*    <GoabPublicFormPage*/}
      {/*      id="section1b-summary"*/}
      {/*      type="multistep"*/}
      {/*      heading="Apply for a service (Demo)"*/}
      {/*    >*/}
      {/*      <div className="warning">*/}
      {/*        <GoabCallout type="information" size="medium" heading="Application incomplete" mb="2xl" mt="xl">*/}
      {/*          You have completed 1 of 3 sections.*/}
      {/*        </GoabCallout>*/}
      {/*      </div>*/}
      {/*      <GoabText tag="h2">*/}
      {/*        1. Before you start*/}
      {/*      </GoabText>*/}
      {/*      <GoabTable width="100%" mb="2xl" mt="l">*/}
      {/*        <tbody>*/}
      {/*        <tr>*/}
      {/*          <td>*/}
      {/*            <GoabText tag="span" size={"body-m"}>Eligibility questions</GoabText>*/}
      {/*          </td>*/}
      {/*          <td className="goa-table-number-column">*/}
      {/*            <GoabBadge type="success" content="Completed" ariaLabel="completed"></GoabBadge>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*        <tr>*/}
      {/*          <td>*/}
      {/*            <GoabText tag="span" size={"body-m"}>Read terms of use</GoabText>*/}
      {/*          </td>*/}
      {/*          <td className="goa-table-number-column">*/}
      {/*            <GoabBadge type="success" content="Completed" ariaLabel="completed"></GoabBadge>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*        </tbody>*/}
      {/*      </GoabTable>*/}
      {/*      <GoabText tag="h2">*/}
      {/*        2. Prepare application*/}
      {/*      </GoabText>*/}
      {/*      <GoabTable width="100%" mb="2xl" mt="l">*/}
      {/*        <tbody>*/}
      {/*        <tr>*/}
      {/*          <td>*/}
      {/*            <GoabLink><a href="#" onClick={handleContactDetailsClick}>Your contact details</a></GoabLink>*/}
      {/*          </td>*/}
      {/*          <td className="goa-table-number-column">*/}
      {/*            <GoabText tag="span" size="body-m" color="secondary"> Not started</GoabText>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*        <tr>*/}
      {/*          <td>*/}
      {/*            <GoabLink><a href="#" onClick={handleFamilyClick}>Your family</a></GoabLink>*/}
      {/*          </td>*/}
      {/*          <td className="goa-table-number-column">*/}
      {/*            <GoabText tag="span" size="body-m" color="secondary"> Not started</GoabText>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*        <tr>*/}
      {/*          <td>*/}
      {/*            <GoabLink><a href="#" onClick={handleIdentityClick}>Verify your identity</a></GoabLink>*/}
      {/*          </td>*/}
      {/*          <td className="goa-table-number-column">*/}
      {/*            <GoabText tag="span" size="body-m" color="secondary"> Not started</GoabText>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*        </tbody>*/}
      {/*      </GoabTable>*/}

      {/*      <GoabText tag="h2">*/}
      {/*        3. Schedule service*/}
      {/*      </GoabText>*/}
      {/*      <GoabText tag="p" size="body-s" color="secondary">*/}
      {/*        You need to complete the previous section before you can start this task.*/}
      {/*      </GoabText>*/}
      {/*      <GoabTable width="100%" mt="l" mb="3xl">*/}
      {/*        <tbody>*/}
      {/*        <tr>*/}
      {/*          <td> <GoabText tag={"span"} size={"body-m"}>*/}
      {/*            Receive email confirmation</GoabText>*/}
      {/*          </td>*/}
      {/*          <td className="goa-table-number-column">*/}
      {/*            <GoabText tag="span" size="body-m" color="secondary"> Cannot start yet</GoabText>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*        <tr>*/}
      {/*          <td> <GoabText tag={"span"} size={"body-m"}>*/}
      {/*            Choose date</GoabText>*/}
      {/*          </td>*/}
      {/*          <td className="goa-table-number-column">*/}
      {/*            <GoabText tag="span" size="body-m" color="secondary"> Cannot start yet</GoabText>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*        <tr>*/}
      {/*          <td><GoabText tag={"span"} size={"body-m"}>*/}
      {/*            Pay service fee</GoabText>*/}
      {/*          </td>*/}
      {/*          <td className="goa-table-number-column">*/}
      {/*            <GoabText tag="span" size="body-m" color="secondary"> Cannot start yet</GoabText>*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*        </tbody>*/}
      {/*      </GoabTable>*/}
      {/*    </GoabPublicFormPage>*/}

      {/*    /!* Section 2A Pages *!/*/}
      {/*    <GoabPublicFormPage*/}
      {/*      id="2A.1"*/}
      {/*      heading="What is your name?"*/}
      {/*      buttonText="Save and continue"*/}
      {/*      onContinue={(e) => onContinue(e, "2A.1")}*/}
      {/*    >*/}
      {/*      <GoabFieldset>*/}
      {/*        <GoabFormItem name="Name">*/}
      {/*          <GoabInput name="name"/>*/}
      {/*        </GoabFormItem>*/}
      {/*      </GoabFieldset>*/}
      {/*    </GoabPublicFormPage>*/}

      {/*    <GoabPublicFormPage*/}
      {/*      id="2A.2"*/}
      {/*      heading="What is your current home address?"*/}
      {/*      buttonText="Save and continue"*/}
      {/*      onContinue={(e) => onContinue(e, "2A.2")}*/}
      {/*    >*/}
      {/*      <GoabFieldset>*/}
      {/*        <GoabFormItem name="Street address" label="Street address">*/}
      {/*          <GoabInput name="street-address" />*/}
      {/*        </GoabFormItem>*/}
      {/*        <GoabFormItem name="Suite or unit #" label="Suite or unit #" requirement={"optional"}>*/}
      {/*          <GoabInput name="suite" />*/}
      {/*        </GoabFormItem>*/}
      {/*        <GoabFormItem name="City or town" label="City or town">*/}
      {/*          <GoabInput name="city" />*/}
      {/*        </GoabFormItem>*/}
      {/*        <GoabBlock direction="row" gap="xl">*/}
      {/*          <GoabFormItem name="Province or territory" label="Province or territory">*/}
      {/*            <GoabDropdown name="province" placeholder="Select">*/}
      {/*              <GoabDropdownItem value="AB" label="Alberta" />*/}
      {/*              <GoabDropdownItem value="BC" label="British Columbia" />*/}
      {/*              <GoabDropdownItem value="MB" label="Manitoba" />*/}
      {/*              <GoabDropdownItem value="NB" label="New Brunswick" />*/}
      {/*              <GoabDropdownItem value="NL" label="Newfoundland and Labrador" />*/}
      {/*              <GoabDropdownItem value="NT" label="Northwest Territories" />*/}
      {/*              <GoabDropdownItem value="NS" label="Nova Scotia" />*/}
      {/*              <GoabDropdownItem value="NU" label="Nunavut" />*/}
      {/*              <GoabDropdownItem value="ON" label="Ontario" />*/}
      {/*              <GoabDropdownItem value="PE" label="Prince Edward Island" />*/}
      {/*              <GoabDropdownItem value="QC" label="Quebec" />*/}
      {/*              <GoabDropdownItem value="SK" label="Saskatchewan" />*/}
      {/*              <GoabDropdownItem value="YT" label="Yukon" />*/}
      {/*            </GoabDropdown>*/}
      {/*          </GoabFormItem>*/}
      {/*          <GoabFormItem name="Postal code" label="Postal code">*/}
      {/*            <GoabInput name="postal-code" />*/}
      {/*          </GoabFormItem>*/}
      {/*        </GoabBlock>*/}
      {/*      </GoabFieldset>*/}
      {/*    </GoabPublicFormPage>*/}

      {/*    <GoabPublicFormPage*/}
      {/*      id="2A.3"*/}
      {/*      heading="Can we contact you in the future for feedback on our services?"*/}
      {/*      buttonText="Save and continue"*/}
      {/*      onContinue={(e) => onContinue(e, "2A.3")}*/}
      {/*    >*/}
      {/*      <GoabFieldset>*/}
      {/*        <GoabFormItem name="Contact for feedback">*/}
      {/*          <GoabRadioGroup name="contact-feedback" id="contact-feedback">*/}
      {/*            <GoabRadioItem value="Yes" label="Yes"/>*/}
      {/*            <GoabRadioItem value="No" label="No" />*/}
      {/*          </GoabRadioGroup>*/}
      {/*        </GoabFormItem>*/}
      {/*      </GoabFieldset>*/}
      {/*    </GoabPublicFormPage>*/}

      {/*    <GoabPublicFormPage*/}
      {/*      id="2A.3.a"*/}
      {/*      heading="How would you like to be contacted?"*/}
      {/*      buttonText="Save and continue"*/}
      {/*      onContinue={(e) => onContinue(e, "2A.3.a")}*/}
      {/*    >*/}
      {/*      <GoabFieldset>*/}
      {/*        <GoabFormItem name={"Contact method"}>*/}
      {/*          <GoabCheckbox*/}
      {/*            name="contact-phone"*/}
      {/*            value={"phone"}*/}
      {/*            text="Phone"*/}
      {/*            reveal={*/}
      {/*              <GoabFormItem name="Phone number" label={"What is your phone number? "}>*/}
      {/*                <GoabInput name="phone-number"/>*/}
      {/*              </GoabFormItem>*/}
      {/*            }*/}
      {/*          />*/}
      {/*          <GoabCheckbox*/}
      {/*            name="contact-email"*/}
      {/*            value={"email"}*/}
      {/*            text="Email"*/}
      {/*            reveal={*/}
      {/*              <GoabFormItem name="Email address">*/}
      {/*                <GoabInput name="email-address" type="email" />*/}
      {/*              </GoabFormItem>*/}
      {/*            }*/}
      {/*          />*/}
      {/*          <GoabCheckbox*/}
      {/*            value={"text"}*/}
      {/*            name="contact-text"*/}
      {/*            text="Text message"*/}
      {/*            reveal={*/}
      {/*              <GoabFormItem name="Mobile phone number">*/}
      {/*                <GoabInput name="mobile-phone-number" />*/}
      {/*              </GoabFormItem>*/}
      {/*            }*/}
      {/*          />*/}
      {/*        </GoabFormItem>*/}
      {/*      </GoabFieldset>*/}
      {/*    </GoabPublicFormPage>*/}

      {/*    <GoabPublicFormPage*/}
      {/*      id="2A.Review"*/}
      {/*      type="multistep"*/}
      {/*      heading="Review your  answers"*/}
      {/*      buttonText="Confirm"*/}
      {/*      onContinue={(e) => onContinue(e, "2A.Review")}*/}
      {/*    >*/}
      {/*      <GoabPublicFormSummary/>*/}
      {/*    </GoabPublicFormPage>*/}
      {/*  </GoabPublicForm>*/}
      {/*)}*/}
    </>
  );
};

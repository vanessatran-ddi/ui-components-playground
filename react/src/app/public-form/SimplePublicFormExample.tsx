import React, {useState} from "react";
import {
  GoabButton,
  GoabCallout,
  GoabLink,
  GoabPublicFormTask, GoabPublicFormTaskList,
  GoabTable,
  GoabText,
} from "@abgov/react-components";
import { GoabFormState} from "@abgov/ui-components-common";
import { Section1A } from "./Section1A";
import { Section1B } from "./Section1B";
import { Section2A } from "./Section2A";
import { Section2B } from "./Section2B";
import { Section2C } from "./Section2C";

type CurrentView =
  | { type: "task"; taskId: string }
  | { type: "tasklist" }
  | { type: "completion" };

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

  const navigateTo = (taskId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentView({ type: "task", taskId });
  }

  const onSection1BComplete = () => {
    setTaskSections(prevSections =>
      prevSections.map(section => ({
        ...section,
        tasks: section.tasks.map(task =>
          task.id === "section1b"
            ? { ...task, status: "completed" as TaskStatus }
            : task.id === "section2a" || task.id === "section2b" || task.id === "section2c"
            ? { ...task, status: "not-started" as TaskStatus } // Enable all section 2 tasks
            : task
        )
      }))
    );

    setCurrentView({ type: "tasklist" });
  }

  // Helper function to handle section 2 completions
  const handleSection2Complete = (taskId: string, state: GoabFormState) => {
    setTaskSections(prevSections => {
      const updatedSections = prevSections.map(section => ({
        ...section,
        tasks: section.tasks.map(task =>
          task.id === taskId
            ? { ...task, status: "completed" as TaskStatus, state }
            : task
        )
      }));

      // Check if 2 out of 3 tasks in prepare-application are completed after this update
      if (checkIfShowCompletion(updatedSections)) {
        setCurrentView({ type: "completion" });
      } else {
        setCurrentView({ type: "tasklist" });
      }

      return updatedSections;
    });
  }


  const onSection1BBack = () => {
    setCurrentView({ type: "tasklist" });
  }

  // Check if 2 out of 3 tasks in "Prepare application" section are completed
  const checkIfShowCompletion = (sections: TaskSection[]) => {
    const prepareApplicationSection = sections.find(s => s.id === "prepare-application");
    if (!prepareApplicationSection) return false;

    const completedTasks = prepareApplicationSection.tasks.filter(task => task.status === "completed");
    return completedTasks.length === 3;
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

    if (completedSections === totalSections - 1) { // The last one only when confirmed
      // All sections completed
      return {
        type: "important" as const,
        heading: "Waiting for your application to be confirmed",
        content: "You will receive an email notification when your application has been approved and is ready to continue."
      };
    } else if (completedSections === 0) {
      // No sections completed yet
      return {
        type: "information" as const,
        heading: `You have ${totalSections} sections to complete`,
        content: <GoabLink><a href="#" onClick={navigateTo("section1b")}>Start terms of use</a></GoabLink>
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

      {currentView.type === "task" && currentView.taskId === "section1b" && (
        <Section1B onComplete={onSection1BComplete} onBack={onSection1BBack} />
      )}

      {currentView.type === "task" && currentView.taskId === "section2a" && (
        <Section2A onComplete={(state) => handleSection2Complete("section2a", state)} />
      )}

      {currentView.type === "task" && currentView.taskId === "section2b" && (
        <Section2B onComplete={(state) => handleSection2Complete("section2b", state)} />
      )}

      {currentView.type === "task" && currentView.taskId === "section2c" && (
        <Section2C onComplete={(state) => handleSection2Complete("section2c", state)} />
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
                            {task.status === "not-started" ? (
                              <GoabLink><a href="#" onClick={navigateTo(task.id)}>{task.title}</a></GoabLink>
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

      {currentView.type === "completion" && (
        <div>
          <GoabText tag="h1" size="heading-xl">You have completed the first part of the application</GoabText>

          <GoabCallout type="success" heading="Application submitted for review" mb="xl" mt="xl">
            <GoabText mb="s">
              You will receive a copy of the initial application to your email name@email.com.
            </GoabText>
            <GoabText mb="0">
              Your reference number is: <strong>1234ABC</strong>
            </GoabText>
          </GoabCallout>

          <GoabText tag="h2" mb="s">What happens next</GoabText>
          <GoabText mb="s">
            Your application is being reviewed. You will be contacted by email to schedule your service within 24 hours.
          </GoabText>
          <GoabText mb="l">
            You can now close this window. You will receive a link back to the application overview by email.
          </GoabText>

          <GoabText mb="s">What did you think of this service? <GoabLink><a href="#">Give feedback</a></GoabLink></GoabText>

          <GoabText tag="h2" mb="s" mt="xl">If you have questions about your application</GoabText>
          <GoabText mb="s">Contact the [ministry area].</GoabText>
          <GoabText mb="s">Email: <GoabLink><a href="mailto:information@gov.ab.ca">information@gov.ab.ca</a></GoabLink></GoabText>
          <GoabText mb="xl">Phone: <GoabLink><a href="tel:7801234567">780 123 4567</a></GoabLink></GoabText>

          <GoabButton type="tertiary" onClick={() => setCurrentView({ type: "tasklist" })}>
            Back to application overview
          </GoabButton>
        </div>
      )}
    </>
  );
};

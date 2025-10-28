import { GoaxWorkSideNotificationCard } from "@abgov/react-components/experimental";

export const WorkspaceNotificationCard = () => {
    return (
        <div style={{maxWidth: "472px"}}>
            <h1>Workspace Notification Card</h1>
            <GoaxWorkSideNotificationCard
              id={"comment-now"}
              timestamp={new Date().toISOString()}
              title={"Comments"}
              description={"Harvey Don commented on your assigned case."}
              onClick={(id: string) => console.log("notification has been clicked " + id)}>
            </GoaxWorkSideNotificationCard>
          <GoaxWorkSideNotificationCard
            id={"comment-now-success"}
            type={"success"}
            timestamp={new Date().toISOString()}
            title={"Comments Success"}
            description={"Harvey Don commented on your assigned case."}
            onClick={(id: string) => console.log("notification has been clicked " + id)}>
          </GoaxWorkSideNotificationCard>
          <GoaxWorkSideNotificationCard
            id={"comment-now-success"}
            type={"critical"}
            timestamp={new Date().toISOString()}
            title={"Comments Critical"}
            description={"Harvey Don commented on your assigned case."}
            onClick={(id: string) => console.log("notification has been clicked " + id)}>
          </GoaxWorkSideNotificationCard>
          <GoaxWorkSideNotificationCard
            id={"comment-now-success"}
            type={"warning"}
            timestamp={new Date().toISOString()}
            title={"Comments Warning"}
            description={"Harvey Don commented on your assigned case."}
            onClick={(id: string) => console.log("notification has been clicked " + id)}>
          </GoaxWorkSideNotificationCard>
          <GoaxWorkSideNotificationCard
            id={"comment-now-success"}
            type={"info"}
            timestamp={new Date().toISOString()}
            title={"Comments Info"}
            description={"Harvey Don commented on your assigned case."}
            onClick={(id: string) => console.log("notification has been clicked " + id)}>
          </GoaxWorkSideNotificationCard>
        </div>
    );
};

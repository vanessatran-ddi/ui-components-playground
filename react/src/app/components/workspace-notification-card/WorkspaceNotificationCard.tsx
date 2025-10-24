import { GoaxWorkSideNotificationCard } from "@abgov/react-components/experimental";

export const WorkspaceNotificationCard = () => {
    return (
        <div>
            <h1>Workspace Notification Card</h1>
            <GoaxWorkSideNotificationCard
              id={"comment-now"}
              timestamp={new Date().toISOString()}
              title={"Comments"}
              description={"Harvey Don commented on your assigned case."}
              onClick={(id: string) => console.log("notification has been clicked " + id)}>
            </GoaxWorkSideNotificationCard>
        </div>
    );
};

import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "@abgov/web-components";
import "../../../dist/libs/web-components/index.css";

// Workspace imports
import { App as WorkspaceApp } from "./app/workspace/WorkspaceApp";
import { NotificationProvider } from "./app/workspace/contexts/NotificationContext";
import { ErrorBoundary } from "./app/workspace/components/ErrorBoundary";
import { SearchPage } from "./app/workspace/routes/SearchPage";
import { ClientsPage } from "./app/workspace/routes/ClientsPage";
import { ClientDetailPage } from "./app/workspace/routes/ClientDetailPage";
import { SchedulePage } from "./app/workspace/routes/SchedulePage";
import { DocumentsPage } from "./app/workspace/routes/DocumentsPage";
import { TeamPage } from "./app/workspace/routes/TeamPage";
import { NotificationsPage } from "./app/workspace/routes/NotificationsPage";
import { SupportPage } from "./app/workspace/routes/SupportPage";
import { SettingsPage } from "./app/workspace/routes/SettingsPage";
import { AccountPage } from "./app/workspace/routes/AccountPage";
import { SubMenuItem1Page } from "./app/workspace/routes/SubMenuItem1Page";
import { SubMenuItem2Page } from "./app/workspace/routes/SubMenuItem2Page";
import { SubMenuItem3Page } from "./app/workspace/routes/SubMenuItem3Page";
import { OverviewPage } from "./app/workspace/routes/OverviewPage";
import { NotFoundPage } from "./app/workspace/routes/NotFoundPage";
import { UnauthorizedPage } from "./app/workspace/routes/UnauthorizedPage";
import { ServerErrorPage } from "./app/workspace/routes/ServerErrorPage";
import { LogoutPage } from "./app/workspace/routes/LogoutPage";
import { NotificationAdmin } from "./app/workspace/routes/NotificationAdmin";

// Workspace CSS
import "./app/workspace/Workspace.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<WorkspaceApp />}>
              <Route index element={<Navigate to="/search" replace />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="clients" element={<ClientsPage />} />
              <Route path="client/:id" element={<ClientDetailPage />} />
              <Route path="schedule" element={<SchedulePage />} />
              <Route path="documents" element={<DocumentsPage />} />
              <Route path="documents/sub1" element={<SubMenuItem1Page />} />
              <Route path="documents/sub2" element={<SubMenuItem2Page />} />
              <Route path="documents/sub3" element={<SubMenuItem3Page />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="support" element={<SupportPage />} />
              <Route path="settings" element={<SettingsPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="overview" element={<OverviewPage />} />
              <Route path="notification-admin" element={<NotificationAdmin />} />
              <Route path="401" element={<UnauthorizedPage />} />
              <Route path="500" element={<ServerErrorPage />} />
              <Route path="logout" element={<LogoutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </NotificationProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);

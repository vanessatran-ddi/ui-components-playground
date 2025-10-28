import {
  GoabxWorkSideMenu,
  GoabxWorkSideMenuItem,
} from "@abgov/react-components/experimental";
import { GoabButton } from "@abgov/react-components";
import { useState } from "react";


export const WorkSpaceSideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 624);
  return (
    <>
      <GoabButton onClick={() => setMenuOpen(!menuOpen)}>Toggle</GoabButton>
      <GoabxWorkSideMenu
        heading="Income and Employment Support (IES)"
        url="/"
        userName="Edna Mode"
        userSecondaryText="edna.mode@example.com"
        open={menuOpen}
        onToggle={() => {
          console.log('[App] onToggle called, toggling menuOpen from', menuOpen, 'to', !menuOpen);
          setMenuOpen(prev => !prev);
        }}
        primaryContent={
          <>
            <GoabxWorkSideMenuItem
              icon="search"
              label="Search"
              badge="30"
              url="/search"
            />

            <GoabxWorkSideMenuItem
              icon="list"
              label="Clients"
              type="success"
              badge="New"
              url="/clients"
            />

            <GoabxWorkSideMenuItem
              icon="calendar"
              label="Schedule"
              type="emergency"
              badge="Urgent"
              url="/schedule"
            />

            <GoabxWorkSideMenuItem
              icon="document"
              label="Documents"
              url="/documents"
            >
              <GoabxWorkSideMenuItem
                url="/documents/sub1"
                label="Sub menu item 1"
              />
              <GoabxWorkSideMenuItem
                url="/documents/sub2"
                label="Sub menu item 2"
              />
              <GoabxWorkSideMenuItem
                url="/documents/sub3"
                label="Sub menu item 3"
              />
            </GoabxWorkSideMenuItem>

            <GoabxWorkSideMenuItem
              icon="people"
              label="Team"
              url="/team"
            />
          </>
        }
        secondaryContent={
          <>
            <GoabxWorkSideMenuItem
              icon="notifications"
              label="Notifications"
              type="success"
              badge="1"
              url="/notifications"
            />
            <GoabxWorkSideMenuItem
              icon="help-circle"
              label="Support"
              url="/support"
            />
            <GoabxWorkSideMenuItem
              icon="settings"
              label="Settings"
              url="/settings"
            />
          </>
        }
        accountContent={
          <>
            <GoabxWorkSideMenuItem
              icon="person"
              label="Account management"
              url="/account"
            />
            <GoabxWorkSideMenuItem
              icon="log-out"
              label="Log out"
              url="/logout"
            />
          </>
        }
      />
    </>
  )
}

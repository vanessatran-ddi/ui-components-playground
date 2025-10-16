import {
  GoaxWorkSideMenu,
  GoaxWorkSideMenuItem,
} from "@abgov/react-components/experimental";
import { GoabButton } from "@abgov/react-components";
import { useState } from "react";


export const WorkSpaceSideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 624);
  return (
    <>
      <GoabButton onClick={() => setMenuOpen(!menuOpen)}>Toggle</GoabButton>
      <GoaxWorkSideMenu
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
            <GoaxWorkSideMenuItem
              icon="search"
              label="Search"
              badge="30"
              url="/search"
            />

            <GoaxWorkSideMenuItem
              icon="list"
              label="Clients"
              type="success"
              badge="New"
              url="/clients"
            />

            <GoaxWorkSideMenuItem
              icon="calendar"
              label="Schedule"
              type="emergency"
              badge="Urgent"
              url="/schedule"
            />

            <GoaxWorkSideMenuItem
              icon="document"
              label="Documents"
              url="/documents"
            >
              <GoaxWorkSideMenuItem
                url="/documents/sub1"
                label="Sub menu item 1"
              />
              <GoaxWorkSideMenuItem
                url="/documents/sub2"
                label="Sub menu item 2"
              />
              <GoaxWorkSideMenuItem
                url="/documents/sub3"
                label="Sub menu item 3"
              />
            </GoaxWorkSideMenuItem>

            <GoaxWorkSideMenuItem
              icon="people"
              label="Team"
              url="/team"
            />
          </>
        }
        secondaryContent={
          <>
            <GoaxWorkSideMenuItem
              icon="notifications"
              label="Notifications"
              type="success"
              badge="1"
              url="/notifications"
            />
            <GoaxWorkSideMenuItem
              icon="help-circle"
              label="Support"
              url="/support"
            />
            <GoaxWorkSideMenuItem
              icon="settings"
              label="Settings"
              url="/settings"
            />
          </>
        }
        accountContent={
          <>
            <GoaxWorkSideMenuItem
              icon="person"
              label="Account management"
              url="/account"
            />
            <GoaxWorkSideMenuItem
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

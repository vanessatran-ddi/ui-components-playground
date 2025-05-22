import { Link, Outlet } from "react-router-dom";
import "@abgov/style";
import { useEffect, useState } from "react";
import {
  GoabAppFooter,
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabOneColumnLayout,
  GoabSideMenu,
  GoabSideMenuGroup,
} from "@abgov/react-components";

export function App() {
  return (
    <GoabOneColumnLayout>
      <section slot="header">
        <GoabMicrositeHeader type="alpha" version="UAT" />
        <GoabAppHeader url="/" heading="Design System">
          <a href="/login">Sign in</a>
        </GoabAppHeader>
      </section>
      <div style={{ display: "flex" }}>
        <section style={{ flex: "0 0 250px" }}>
          <GoabSideMenu>
            <GoabSideMenuGroup heading="Bugs">
              <Link to="/2446">Popover inside a scrolling modal</Link>
              <Link to="/2441">Issue 2441</Link>
            </GoabSideMenuGroup>
            <GoabSideMenuGroup heading="Components">
              <Link to="/">Home</Link>
              <Link to="/pagination">Pagination</Link>
              <Link to="/drawer">Drawer</Link>
              <Link to="/Text">Text</Link>

              {/* Add links here */}
            </GoabSideMenuGroup>
            <GoabSideMenuGroup heading={"Public Form"}>
              <Link to="/public-form">Public Form</Link>
            </GoabSideMenuGroup>
            {/* Add links here */}
          </GoabSideMenu>
        </section>
        <section>
          <Outlet />
        </section>
      </div>
      <section slot="footer">
        <GoabAppFooter />
      </section>
    </GoabOneColumnLayout>
  );
}

export default App;

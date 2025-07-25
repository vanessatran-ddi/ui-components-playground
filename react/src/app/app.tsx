import { Link, Outlet } from "react-router-dom";
import "@abgov/style";
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
      <section className="content">
        <section className="side-menu">
          <GoabSideMenu>
            <GoabSideMenuGroup heading="Bugs">
              <Link to="/2446">Popover inside a scrolling modal</Link>
              <Link to="/2408">Form stepper status</Link>
              <Link to="/2441">Issue 2441</Link>
              <Link to="/1216">Issue 1216</Link>
              <Link to="/2404">2404 Angular Input TrailingIcon Fix</Link>
              <Link to="/1769">1769 autocomplete property</Link>
              <Link to="/2772">2772 align on input</Link>
              <Link to="/2789">2789 width rem percentage</Link>
              <Link to="/2574">2574 Banner hides pop over safari</Link>
            </GoabSideMenuGroup>
            <GoabSideMenuGroup heading="Components">
              <Link to="/">Home</Link>
              <Link to="/pagination">Pagination</Link>
              <Link to="/drawer">Drawer</Link>
              <Link to="/temporary-notification">Temporary Notification</Link>
              <Link to="/Text">Text</Link>

              {/* Add links here */}
            </GoabSideMenuGroup>
            <GoabSideMenuGroup heading={"Public Form"}>
              <Link to="/public-form">Public Form</Link>
              <Link to="/public-form-navigation">Navigation Test (Issue 1)</Link>
              <Link to="/public-form-accessibility">Accessibility Test (Issue 2)</Link>
            </GoabSideMenuGroup>
            {/* Add links here */}
          </GoabSideMenu>
        </section>
        <main className="main">
          <Outlet />
        </main>
      </section>
      <section slot="footer">
        <GoabAppFooter />
      </section>
    </GoabOneColumnLayout>
  );
}

export default App;

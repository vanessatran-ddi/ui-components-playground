import { Link, Outlet } from "react-router-dom";
import "@abgov/style";
import {
  GoabAppFooter,
  GoabAppHeader,
  GoabMicrositeHeader,
  GoabOneColumnLayout,
  GoabSideMenu,
  GoabSideMenuGroup,
  GoabSideMenuHeading,
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
            <GoabSideMenuHeading>Bugs</GoabSideMenuHeading>
              <GoabSideMenuGroup heading={"Modal"}>
                <Link to="/2446">Popover inside a scrolling modal</Link>
                <Link to="/2829">2829 modal focus fix</Link>
                <Link to="/2948">2948 Modal Spacing</Link>
              </GoabSideMenuGroup>
              <GoabSideMenuGroup heading={"Form stepper"}>
                <Link to="/2408">Form stepper status</Link>
              </GoabSideMenuGroup>
              <GoabSideMenuGroup heading={"Dropdown"}>
                <Link to="/2441">Issue 2441</Link>
                <Link to="/2789">2789 width rem percentage</Link>
              </GoabSideMenuGroup>
              <GoabSideMenuGroup heading={"Checkbox/Radio Reveal"}>
                <Link to="/1216">Issue 1216</Link>
                <Link to="/2768">2768 Radio dynamic disabled state</Link>
                <Link to="/3001">3001 Checkbox dispatch string</Link>
              </GoabSideMenuGroup>
              <GoabSideMenuGroup heading={"Input"}>
                <Link to="/2404">2404 Angular Input TrailingIcon Fix</Link>
                <Link to="/1769">1769 autocomplete property</Link>
                <Link to="/2772">2772 align on input</Link>
              </GoabSideMenuGroup>
              <GoabSideMenuGroup heading={"Popover"}>
                <Link to="/2547">2574 Banner hides pop over safari</Link>
              </GoabSideMenuGroup>
              <GoabSideMenuGroup heading={"Tabs"}>
                <Link to="/2720">2720 Change tab via link</Link>
              </GoabSideMenuGroup>
            <GoabSideMenuHeading>Components</GoabSideMenuHeading>
            <Link to="/pagination">Pagination</Link>
            <Link to="/drawer">Drawer</Link>
            <Link to="/temporary-notification">Temporary Notification</Link>
            <Link to="/Text">Text</Link>
            <Link to="/menu-button">Menu Button</Link>
            <GoabSideMenuGroup heading={"Public Form"}>
              <Link to="/public-form">Public Form</Link>
              <Link to="/public-form-navigation">Navigation Test (Issue 1)</Link>
              <Link to="/public-form-accessibility">Accessibility Test (Issue 2)</Link>
              <Link to="/2827">Issue 2827</Link>
              <Link to="/pr2969-test">PR 2969 Test Form</Link>
            </GoabSideMenuGroup>
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

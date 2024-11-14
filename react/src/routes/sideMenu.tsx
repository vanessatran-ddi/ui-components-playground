import { GoASideMenu, GoASideMenuGroup } from "@abgov/react-components";
import "./SideMenu.css";
import { useEffect, useState } from "react";

export function SideMenu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const personalInfoLink = document.querySelector("#personal-information");
  //     personalInfoLink?.classList.add("current");
  //   }, 1000);
  //
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    // <GoASideMenu>
    //   <GoASideMenuHeading>Nav section 1</GoASideMenuHeading>
    //   <a href="#about">Home</a>
    //   <a href="#contact">Profile</a>
    //   <GoASideMenuHeading>Nav section 2</GoASideMenuHeading>
    //   <a href="#about">About</a>
    //   <a href="#contact">Contact</a>
    //   <GoASideMenuGroup heading="Links">
    //     <GoASideMenuHeading>Nav section 3</GoASideMenuHeading>
    //     <a href="#foo">Foo</a>
    //     <a href="#bar">Bar</a>
    //     <GoASideMenuGroup heading="More Links">
    //       <GoASideMenuHeading>Nav section 4</GoASideMenuHeading>
    //       <a href="#more-foo">More Foo</a>
    //       <a href="#more-bar">More Bar</a>
    //     </GoASideMenuGroup>
    //   </GoASideMenuGroup>
    // </GoASideMenu>
    <div style={{ width: "286px", paddingRight: "32px" }}>
      <GoASideMenu>
        <GoASideMenuGroup
          heading="Personal"
          icon={"person"}
          mt={windowWidth < 1024 ? "m" : "none"}
        >
          <a href="/side-menu" className="side-menu--sub-item" id="personal-information">
            Personal information
          </a>
          <a href="#" className="side-menu--sub-item">
            Account history
          </a>
          <GoASideMenuGroup
            heading="Privacy complaints"
            mt={windowWidth < 1024 ? "m" : "none"}
          >
            <a href="#" className="side-menu--sub-item">
              Link 1
            </a>
            <a href="#" className="side-menu--sub-item">
              Link 2
            </a>
          </GoASideMenuGroup>
        </GoASideMenuGroup>
        <GoASideMenuGroup
          heading="Business"
          icon={"briefcase"}
          mt={windowWidth < 1024 ? "m" : "none"}
        >
          <a href="#" className="side-menu--sub-item">
            Business information
          </a>
          <a href="#" className="side-menu--sub-item">
            Business history
          </a>
        </GoASideMenuGroup>
        <GoASideMenuGroup
          heading="Settings"
          icon={"settings"}
          mt={windowWidth < 1024 ? "m" : "none"}
        >
          <a href="#" className="side-menu--sub-item">
            Settings 1
          </a>
          <a href="#" className="side-menu--sub-item">
            Settings 1
          </a>
        </GoASideMenuGroup>
        <a
          data-testid="securitysettingslink"
          className="uiam--side-menu--sub-item current"
          href="/"
        >
          <goa-icon type="settings"></goa-icon>
          Security settings
        </a>
      </GoASideMenu>
    </div>
  );
}

export default SideMenu;

import { Link, Outlet } from "react-router-dom";
import {
  GoabAppFooter,
  GoabAppHeader,
  GoabButton,
  GoabCircularProgress,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoABFormStep,
  GoabFormStepper,
  GoabMicrositeHeader,
  GoabOneColumnLayout, GoabPages,
  GoabSideMenu,
  GoabSideMenuGroup
} from "@abgov/react-components";
import "@abgov/style";
import { useEffect, useState } from "react";
import { GoabChipVariant, GoabFormStepStatus } from "@abgov/ui-components-common";

export function App() {
  const [fullScreenProgress, setFullScreenProgress] = useState(0);
  const [fullScreenMessage, setFullScreenMessage] = useState("Progress starting");
  const [fullScreenProgressVisible, setFullScreenProgressVisible] = useState(false);
  const [statuses, setStatuses] = useState<GoabFormStepStatus[]>(["incomplete","incomplete"]);
  const [step, setStep] = useState<number>(-1);

  function showFullScreenProgress() {
    setFullScreenProgressVisible(true);
  }

  useEffect(() => {
    if (fullScreenProgressVisible) {
      setInterval(() => {
        if (fullScreenProgress >= 100) {
          setFullScreenProgress(0);
        } else {
          setFullScreenProgress(fullScreenProgress + 10);
        }
        setFullScreenMessage("Progress at " + fullScreenProgress);
      }, 1000);
    }
  }, [fullScreenProgressVisible])

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
            <GoabSideMenuGroup heading="Components">
              <Link to="/">Nothing here</Link>

              {/* Add links here */}
            </GoabSideMenuGroup>

            {/* Add links here */}
          </GoabSideMenu>
        </section>
        <section>
          <Outlet />
          {/*<GoABFormItem label="Basic dropdown">*/}
          {/*  <GoABDropdown onChange={(e) => console.log(e)} name="item" value="" filterable={true}>*/}
          {/*    <GoABDropdownItem value="red" label="Red"></GoABDropdownItem>*/}
          {/*    <GoABDropdownItem value="green" label="Green"></GoABDropdownItem>*/}
          {/*    <GoABDropdownItem value="blue" label="Blue"></GoABDropdownItem>*/}
          {/*  </GoABDropdown>*/}
          {/*</GoABFormItem>*/}
          <GoabButton onClick={showFullScreenProgress}>Show fullscreen</GoabButton>
          <GoabCircularProgress variant="fullscreen"
                                progress={fullScreenProgress}
                                message={fullScreenMessage}
                                visible={fullScreenProgressVisible}
                                ></GoabCircularProgress>
        </section>

        <GoabFormStepper step={step} onChange={(details) => setStep(details.step)}>
          <GoABFormStep text="Step 1" status={statuses[0]}></GoABFormStep>
          <GoABFormStep text="Step 2" status={statuses[1]}></GoABFormStep>
        </GoabFormStepper>

        <GoabPages current={step} mt="xl">
          <div>Step 1 content</div>
          <div>Step 2 content</div>
        </GoabPages>
      </div>
      <section slot="footer">
        <GoabAppFooter />
      </section>
    </GoabOneColumnLayout>
  );
}

export default App;

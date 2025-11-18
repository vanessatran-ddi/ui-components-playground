import { useMemo, useState } from "react";
import {
  GoabBlock,
  GoabButton,
  GoabDropdown,
  GoabDropdownItem,
  GoabFormItem,
  GoabGrid,
  GoabMenuAction,
  GoabMenuButton,
  GoabText,
} from "@abgov/react-components";
import type {
  GoabDropdownOnChangeDetail,
  GoabIconType,
  GoabMenuButtonOnActionDetail,
} from "@abgov/ui-components-common";

type MenuActionConfig = {
  text: string;
  action: string;
  icon?: GoabIconType;
};

export function DustinExample() {
  const baselineActions = useMemo<MenuActionConfig[]>(
    () => [
      { text: "View profile", action: "profile", icon: "person-circle" },
      { text: "Notifications", action: "notifications", icon: "notifications" },
      { text: "Sign out", action: "sign-out", icon: "log-out" },
    ],
    [],
  );

  const teamActions = useMemo<MenuActionConfig[]>(
    () => [
      { text: "Add collaborator", action: "add-collaborator", icon: "person-add" },
      {
        text: "Transfer ownership across",
        action: "transfer-ownership",
        icon: "swap-horizontal",
      },
      { text: "Deactivate access", action: "deactivate-access", icon: "shield" },
    ],
    [],
  );

  const longLabelActions = useMemo<MenuActionConfig[]>(
    () => [
      {
        text: "Download the comprehensive quarterly analytics package for executive review",
        action: "download-analytics",
        icon: "download",
      },
      {
        text: "Request account access for a new departmental collaborator with limited permissions",
        action: "request-access",
        icon: "person-circle",
      },
      {
        text: "Archive this program and remove it from the active reporting dashboards immediately",
        action: "archive-program",
        icon: "archive",
      },
    ],
    [],
  );

  const dropdownOptions = useMemo<MenuActionConfig[]>(
    () => [
      {
        text: "Municipal program summary with quarterly commitments (preferred)",
        action: "municipal-program-summary",
      },
      {
        text: "Community housing revitalization initiative for northern regions",
        action: "community-housing-revitalization",
      },
      {
        text: "Provincial collaboration and engagement framework for stakeholders",
        action: "engagement-framework",
      },
    ],
    [],
  );

  const dropdownWidth = "420px";

  const [leadingIconEnabled, setLeadingIconEnabled] = useState(true);
  const [lastAction, setLastAction] = useState<GoabMenuButtonOnActionDetail | undefined>(
    undefined,
  );
  const [dropdownSelection, setDropdownSelection] = useState<string | undefined>(
    undefined,
  );

  const leadingIcon: GoabIconType = "calendar";
  const currentLeadingIcon = leadingIconEnabled ? leadingIcon : undefined;

  const captureAction = (detail: GoabMenuButtonOnActionDetail) => {
    setLastAction(detail);
  };

  const clearLog = () => {
    setLastAction(undefined);
  };

  const onDropdownChange = (detail: GoabDropdownOnChangeDetail) => {
    setDropdownSelection(detail.value ?? detail.values?.join(", "));
  };

  return (
    <GoabBlock direction="column" gap="l">
      <GoabBlock direction="column" gap="s">
        <GoabText tag="h1" size="heading-l">
          Feature 3102 - Menu button icon and sizing checks
        </GoabText>
        <GoabText tag="p" size="body-m">
          Use these scenarios to confirm the React wrapper exposes the leading icon property and that the menu width
          matches the longest action label.
        </GoabText>
      </GoabBlock>

      <GoabGrid minChildWidth="320px" gap="l">
        <GoabBlock direction="column" gap="s">
          <GoabText tag="h2" size="heading-m">
            Scenario A &ndash; Baseline behaviour
          </GoabText>
          <GoabText tag="p" size="body-s">
            Open and close the menu to ensure the chevron flips direction. Activate each action to populate the log.
          </GoabText>
          <GoabMenuButton text="Baseline actions" onAction={captureAction}>
            {baselineActions.map((action) => (
              <GoabMenuAction key={action.action} text={action.text} action={action.action} icon={action.icon} />
            ))}
          </GoabMenuButton>
        </GoabBlock>

        <GoabBlock direction="column" gap="s">
          <GoabText tag="h2" size="heading-m">
            Scenario B &ndash; Leading icon toggle
          </GoabText>
          <GoabText tag="p" size="body-s">
            Toggle the leading icon and confirm the button handles the size change while the trailing chevron stays
            aligned.
          </GoabText>
          <GoabButton type="secondary" onClick={() => setLeadingIconEnabled((state) => !state)}>
            {leadingIconEnabled ? "Remove leading icon" : "Restore leading icon"}
          </GoabButton>
          <GoabMenuButton text="Team tools" leadingIcon={currentLeadingIcon} onAction={captureAction}>
            {teamActions.map((action) => (
              <GoabMenuAction key={action.action} text={action.text} action={action.action} icon={action.icon} />
            ))}
          </GoabMenuButton>
          <GoabText tag="p" size="body-s">
            Current leading icon: {currentLeadingIcon ?? "none"}
          </GoabText>
        </GoabBlock>

        <GoabBlock direction="column" gap="s">
          <GoabText tag="h2" size="heading-m">
            Scenario C &ndash; Long labels drive menu width
          </GoabText>
          <GoabText tag="p" size="body-s">
            Open this menu and confirm the popover grows to match the widest label. Close and reopen to ensure the width
            persists.
          </GoabText>
          <GoabMenuButton text="Lengthy actions" leadingIcon={currentLeadingIcon} onAction={captureAction}>
            {longLabelActions.map((action) => (
              <GoabMenuAction key={action.action} text={action.text} action={action.action} icon={action.icon} />
            ))}
          </GoabMenuButton>
        </GoabBlock>
      </GoabGrid>

      <GoabBlock direction="column" gap="s">
        <GoabText tag="h2" size="heading-m">
          Scenario D &ndash; Right aligned trigger
        </GoabText>
        <GoabText tag="p" size="body-s">
          Move the browser window narrower and ensure the menu remains visible when the trigger is aligned to the right
          edge.
        </GoabText>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <GoabMenuButton text="Right edge menu" leadingIcon={currentLeadingIcon} onAction={captureAction}>
            {teamActions.map((action) => (
              <GoabMenuAction
                key={`right-${action.action}`}
                text={action.text}
                action={action.action}
                icon={action.icon}
              />
            ))}
          </GoabMenuButton>
        </div>
      </GoabBlock>

      <GoabBlock direction="column" gap="s">
        <GoabText tag="h2" size="heading-m">
          Scenario E &ndash; Dropdown popover width regression
        </GoabText>
        <GoabText tag="p" size="body-s">
          The first dropdown sets its width to {dropdownWidth}. Open it and confirm the popover currently clamps near
          320px instead of matching the trigger width. The second dropdown applies <code>maxWidth="none"</code> as a
          control so you can compare the expected layout.
        </GoabText>

        <GoabFormItem
          label="Impacted: dropdown width is forced narrower than trigger"
          helpText="Open the menu and observe the options panel. It should stay aligned with the 420px trigger."
        >
          <GoabDropdown
            width={dropdownWidth}
            placeholder="Select an analytics report"
            testId="feat3102-dropdown-regression"
            onChange={onDropdownChange}
          >
            {dropdownOptions.map((option) => (
              <GoabDropdownItem key={option.action} value={option.action} label={option.text} />
            ))}
          </GoabDropdown>
        </GoabFormItem>

        <GoabFormItem
          label="Control: explicit maxWidth to achieve expected behaviour"
          helpText='With maxWidth set to "none", the popover should match the trigger width for reference.'
        >
          <GoabDropdown
            width={dropdownWidth}
            maxWidth="none"
            placeholder="Compare against regression"
            testId="feat3102-dropdown-control"
          >
            {dropdownOptions.map((option) => (
              <GoabDropdownItem key={`control-${option.action}`} value={option.action} label={option.text} />
            ))}
          </GoabDropdown>
        </GoabFormItem>

        <GoabText tag="p" size="body-s">
          Last dropdown selection: {dropdownSelection ?? "none captured yet"}
        </GoabText>
      </GoabBlock>

      <GoabBlock direction="row" gap="s" alignment="center">
        <GoabText tag="p" size="body-s">
          Last action: {lastAction ? lastAction.action : "none captured yet"}
        </GoabText>
        <GoabButton type="tertiary" onClick={clearLog}>
          Clear log
        </GoabButton>
      </GoabBlock>
    </GoabBlock>
  );
}

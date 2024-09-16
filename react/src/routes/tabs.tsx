import { GoABadge, GoATab, GoAButton, GoATable, GoATabs } from "@abgov/react-components";
import { useState } from "react";

export default function Tabs() {
  const [isReport, setIsReport] = useState(false);

  function onClick() {
    setIsReport(true);
  }
  return (
    <>
      <>
        <GoATabs>
          <GoATab heading="1">Content 1</GoATab>
          <GoATab heading="2">Content 2</GoATab>
          <GoATab heading="3">Content 3</GoATab>
          {isReport ? <GoATab heading="Report">Some Random Content</GoATab> : <></>}
        </GoATabs>

        <GoAButton onClick={onClick} mt="3xl">
          Add
        </GoAButton>
      </>
      <GoATabs initialTab={2}>
        <GoATab heading="Profile">
          <p>
            <b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </GoATab>
        <GoATab
          heading={
            <>
              Review pending <GoABadge type="important" content="1" />
            </>
          }
        >
          <GoATable variant="relaxed">
            <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Comment</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Person 1's first name</td>
              <td>Person 1's last name</td>
              <td>Waiting for a week</td>
            </tr>
            <tr>
              <td>Person 2's first name</td>
              <td>Person 2's last name</td>
              <td>Waiting for 2 weeks</td>
            </tr>
            </tbody>
          </GoATable>
        </GoATab>
        <GoATab
          heading={
            <>
              Completed <GoABadge type="midtone" content="1" />
            </>
          }
        >
          <p>
            <b>Completed:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
          <p>New paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </GoATab>
      </GoATabs>
    </>

  );
}

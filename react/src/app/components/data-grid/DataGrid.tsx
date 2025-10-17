import { useState } from "react";
import { GoabCheckboxOnChangeDetail, GoabTableOnSortDetail } from "@abgov/ui-components-common";
import {
  GoabBadge,
  GoabBlock,
  GoabButton,
  GoabCheckbox,
  GoabContainer,
  GoabDataGrid,
  GoabDropdown,
  GoabDropdownItem, GoabInputNumber,
  GoabLink,
  GoabTable,
  GoabTableSortHeader,
} from "@abgov/react-components";

type User = {
  idNumber: string;
  nameOfChild: string;
  dataStarted: string;
  dateSubmitted: string;
  status: string;
  updated: string;
  email: string;
  program: string;
  programId: string;
  serviceAccess: string;
  approver: string;
};

export const DataGrid = () => {
  const [users, setUsers] = useState<User[]>([
    {
      idNumber: "1",
      nameOfChild: "Mike Zwei",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "Removed",
      updated: "Jun 30, 2022 at 2:30 PM",
      email: "mike.zwei@gmail.com",
      program: "Wee Wild Ones Curry",
      programId: "74528567",
      serviceAccess: "Claims Adjustments",
      approver: "Sarah Ellis",
    },
    {
      idNumber: "2",
      nameOfChild: "Emma Stroman",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "To be removed",
      updated: "Nov 28, 2021 at 1:30 PM",
      email: "emma.stroman@gmail.com",
      program: "Fort McMurray",
      programId: "74522643",
      serviceAccess: "Claims Adjustments",
      approver: "Sarah Ellis",
    },
    {
      idNumber: "3",
      nameOfChild: "Emma Stroman",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "To be removed",
      updated: "Nov 28, 2021 at 1:30 PM",
      email: "emma.stroman@gmail.com",
      program: "Fort McMurray",
      programId: "74522643",
      serviceAccess: "Claims Adjustments",
      approver: "Sarah Ellis",
    },
    {
      idNumber: "4",
      nameOfChild: "Emma Stroman",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "To be removed",
      updated: "Nov 28, 2021 at 1:30 PM",
      email: "emma.stroman@gmail.com",
      program: "Fort McMurray",
      programId: "74522643",
      serviceAccess: "Claims Adjustments",
      approver: "Sarah Ellis",
    },
    {
      idNumber: "5",
      nameOfChild: "Emma Stroman",
      dataStarted: "Feb 21, 2023",
      dateSubmitted: "Feb 25, 2023",
      status: "To be removed",
      updated: "Nov 28, 2021 at 1:30 PM",
      email: "emma.stroman@gmail.com",
      program: "Fort McMurray",
      programId: "74522643",
      serviceAccess: "Claims Adjustments",
      approver: "Sarah Ellis",
    },
  ]);

  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [isSelectedAll, setIsSelectedAll] = useState(false);

  const getStatusBadgeType = (status: string): "success" | "emergency" | "information" | "important" => {
    switch (status) {
      case "Removed":
        return "success";
      case "To be removed":
        return "emergency";
      case "Submitted":
        return "information";
      case "In review":
        return "information";
      case "Awaiting documentation":
        return "important";
      case "Denied":
        return "emergency";
      case "Approved":
        return "success";
      case "Closed":
        return "information";
      default:
        return "information";
    }
  };

  const selectAll = (event: GoabCheckboxOnChangeDetail) => {
    setIsSelectedAll(event.checked);
    if (event.checked) {
      setSelectedUsers(users.map((u) => u.idNumber));
    } else {
      setSelectedUsers([]);
    }
  };

  const isSelected = (userId: string): boolean => {
    return selectedUsers.includes(userId);
  };

  const toggleSelection = (userId: string, event: GoabCheckboxOnChangeDetail) => {
    if (event.checked) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    }
    setIsSelectedAll(selectedUsers.length + (event.checked ? 1 : -1) === users.length);
  };

  const handleSort = (event: GoabTableOnSortDetail) => {
    const { sortBy, sortDir } = event;
    const sortedUsers = [...users].sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir);
    setUsers(sortedUsers);
  };

  const onDelete = (userId: string) => {
    if (window.confirm(`Are you sure you want to delete user ${userId}?`)) {
      // Remove the user from the users array
      const updatedUsers = users.filter(user => user.idNumber !== userId);
      setUsers(updatedUsers);

      // Remove from selected users if it was selected
      if (selectedUsers.includes(userId)) {
        const updatedSelected = selectedUsers.filter(id => id !== userId);
        setSelectedUsers(updatedSelected);

        // Update "select all" state
        setIsSelectedAll(updatedSelected.length === updatedUsers.length && updatedUsers.length > 0);
      }
    }
  };

  const onOpen = (userId: string) => {
    alert("We are going to open a profile of this user " + userId);
  };

  const onApproverChange = (userId: string, event: any) => {
    const user = users.find((u) => u.idNumber === userId);
    if (user) {
      user.approver = event.value;
      setUsers([...users]);
    }
  };

  return (
    <div>
      <h1>Data Grid</h1>
      <h3>Table (keyboardNav="table")</h3>
      <GoabDataGrid keyboardNav={"table"}>
        <GoabTable width="100%" mb="xl" onSort={handleSort}>
          <thead>
            <tr data-grid="row">
              <th style={{ paddingBottom: 0 }} data-grid="cell">
                <GoabCheckbox testId="selectAll"  name="selectAll" mt="2" onChange={selectAll} checked={isSelectedAll} />
              </th>
              <th data-grid="cell">
                <GoabTableSortHeader name="idNumber">ID Number</GoabTableSortHeader>
              </th>
              <th data-grid="cell">
                <GoabTableSortHeader name="dataStarted">Date Started</GoabTableSortHeader>
              </th>
              <th data-grid="cell">
                <GoabTableSortHeader name="dateSubmitted">Date Submitted</GoabTableSortHeader>
              </th>
              <th data-grid="cell">
                <GoabTableSortHeader name="status">Status</GoabTableSortHeader>
              </th>
              <th data-grid="cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.idNumber} data-grid="row">
                <td data-grid="cell" data-testid={`cell-${user.idNumber}-select`}>
                  <GoabCheckbox
                    testId={`checkbox-${user.idNumber}`}
                    name={"user"+user.idNumber}
                    checked={isSelected(user.idNumber)}
                    onChange={(event) => toggleSelection(user.idNumber, event)}
                  />
                </td>
                <td data-grid="cell" data-testid={`cell-${user.idNumber}-idNumber`}><GoabLink><a href={`mailto: ${user.email}`}>{user.email}</a></GoabLink></td>
                <td data-grid="cell" data-testid={`cell-${user.idNumber}-dateStarted`}>{user.dataStarted}</td>
                <td data-grid="cell" data-testid={`cell-${user.idNumber}-dateSubmitted`}>{user.dateSubmitted}</td>
                <td data-grid="cell" data-testid={`cell-${user.idNumber}-status`}>
                  <GoabBadge type={getStatusBadgeType(user.status)} content={user.status} />
                </td>
                <td data-grid="cell">
                  <GoabButton testId={`delete-${user.idNumber}`} type="tertiary" onClick={() => onDelete(user.idNumber)}>
                    Delete
                  </GoabButton>
                  <GoabButton testId={`open-${user.idNumber}`} type="tertiary" onClick={() => onOpen(user.idNumber)}>
                    Open
                  </GoabButton>
                </td>
              </tr>
            ))}
          </tbody>
        </GoabTable>
      </GoabDataGrid>

      <h3>Containers (keyboardNav="layout")</h3>
      <GoabDataGrid keyboardNav={"layout"}>
        {users.map((user) => (
          <GoabContainer key={user.idNumber} mt="l" data-grid="row">
            <GoabBlock direction="row" gap="m" alignment="start">
              <GoabCheckbox
                name={"container-"+user.idNumber}
                data-grid="cell-0"
                checked={isSelected(user.idNumber)}
                onChange={(event) => toggleSelection(user.idNumber, event)}
              />

              <GoabBlock direction="column" gap="s" alignment="start">
                <GoabBlock direction="row" gap="s" alignment="center">
                  <strong data-grid="cell-1">{user.nameOfChild}</strong>
                  <GoabBlock data-grid="cell-2">
                    <GoabBadge type={getStatusBadgeType(user.status)} content={user.status} />
                  </GoabBlock>
                </GoabBlock>

                <GoabBlock direction="row" gap="xl" alignment="start">
                  <GoabBlock direction="column" gap="s" alignment="start">
                    <GoabBlock direction="column" gap="xs" data-grid="cell-4">
                      <strong>Updated</strong>
                      <span>{user.updated}</span>
                    </GoabBlock>
                    <GoabBlock direction="column" gap="xs" data-grid="cell-7">
                      <strong>Program ID</strong>
                      <span>{user.programId}</span>
                    </GoabBlock>
                  </GoabBlock>

                  <GoabBlock direction="column" gap="s" alignment="start">
                    <GoabBlock direction="column" gap="xs" data-grid="cell-5">
                      <strong>Email</strong>
                      <span>{user.email}</span>
                    </GoabBlock>
                    <GoabBlock direction="column" gap="xs" data-grid="cell-8">
                      <strong>Service access</strong>
                      <span>{user.serviceAccess}</span>
                    </GoabBlock>
                  </GoabBlock>

                  <GoabBlock direction="column" gap="s" alignment="start">
                    <GoabBlock direction="column" gap="xs" data-grid="cell-6">
                      <strong>Program</strong>
                      <span>{user.program}</span>
                    </GoabBlock>
                    <GoabBlock direction="column" gap="xs" data-grid="cell-9">
                      <strong>Approver</strong>
                      <GoabDropdown
                        testId={`approver-${user.idNumber}`}
                        value={user.approver}
                        onChange={(event) => onApproverChange(user.idNumber, event)}
                      >
                        <GoabDropdownItem value="Sarah Ellis" ></GoabDropdownItem>
                        <GoabDropdownItem value="John Doe" label={"John Doe"}></GoabDropdownItem>
                        <GoabDropdownItem value="Jane Smith"></GoabDropdownItem>
                      </GoabDropdown>
                    </GoabBlock>
                  </GoabBlock>
                </GoabBlock>
              </GoabBlock>

              <GoabButton type="tertiary" data-grid="cell-3" onClick={() => onOpen(user.idNumber)}>
                Open
              </GoabButton>
            </GoabBlock>
          </GoabContainer>
        ))}
      </GoabDataGrid>

      <h3>Other examples</h3>
      <h4>Related Documents (Without keyboard icon - by setting `keyboardIcon=false`) (keyboardNav="layout")</h4>
      <GoabDataGrid keyboardIcon={false} keyboardNav={"layout"}>
        <GoabBlock data-grid="row">
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/TR/wai-aria-1.1/">ARIA 1.1 Specification</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/TR/core-aam-1.1/">Core Accessibility API Mappings 1.1</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/WAI/intro/aria.php">WAI-ARIA Overview</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/WAI/intro/wcag">WCAG Overview</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://html.spec.whatwg.org/">HTML Specification</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/TR/SVG2/">SVG 2 Specification</a>
          </GoabLink>
        </GoabBlock>
        <GoabBlock data-grid="row">
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/TR/wai-aria-1.1/">ARIA 1.1 Specification</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/TR/core-aam-1.1/">Core Accessibility API Mappings 1.1</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/WAI/intro/aria.php">WAI-ARIA Overview</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/WAI/intro/wcag">WCAG Overview</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://html.spec.whatwg.org/">HTML Specification</a>
          </GoabLink>
          <GoabLink data-grid="cell">
            <a href="https://www.w3.org/TR/SVG2/">SVG 2 Specification</a>
          </GoabLink>
        </GoabBlock>
      </GoabDataGrid>

      <GoabDropdown name="options"  filterable={true} onChange={() => console.log("changed")}>
        <GoabDropdownItem label="Option 1" value={1} />
        <GoabDropdownItem label="Option 2" value={2} />
        <GoabDropdownItem label="Option 3" value={3} />
      </GoabDropdown>
    </div>
  );
};

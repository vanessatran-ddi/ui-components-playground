import { faker } from "@faker-js/faker";
import { GoabDropdownOnChangeDetail } from "@abgov/ui-components-common";
import {  useEffect, useState } from "react";
import {
  GoabBlock,
  GoabDropdown,
  GoabDropdownItem,
  GoabPagination,
  GoabSpacer,
  GoabTable,
} from "@abgov/react-components";
interface User {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}


export const PaginationShowXExample = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [pageUsers, setPageUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);

  useEffect(() => {
    const _users = [];
    for (let i = 1; i <= 100; i++) {
      _users.push({
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 60 }),
      });
    }
    setUsers(_users);
    setPageUsers(_users.slice(0, perPage));
  }, [perPage]);

  function changePage(newPage: number) {
    const offset = (newPage - 1) * 10;
    const _users = users.slice(offset, offset + perPage);
    setPage(newPage);
    setPageUsers(_users);
  }

  function handlePerPageCountChangeEvent(event: GoabDropdownOnChangeDetail) {
    const perPageValue = parseInt(event.value  as string || "1");
    setPage(1);
    setPerPage(perPageValue);
    const _users = users.slice(0, perPageValue);
    setPageUsers(_users);
  }
  return (
    <>
      <GoabTable width="100%" mb="xl">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {pageUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.age}</td>
            </tr>
          ))}
        </tbody>
      </GoabTable>

      <GoabBlock alignment="center">
        <GoabBlock mb="m" alignment="center">
          Show
          <GoabDropdown
            onChange={handlePerPageCountChangeEvent}
            value={perPage.toString()}
            width="9ch"
          >
            <GoabDropdownItem value="10" label="10"></GoabDropdownItem>
            <GoabDropdownItem value="20" label="20"></GoabDropdownItem>
            <GoabDropdownItem value="30" label="30"></GoabDropdownItem>
          </GoabDropdown>
          <span style={{ width: "75px" }}>of {users.length}</span>
        </GoabBlock>

        <GoabSpacer hSpacing="fill"></GoabSpacer>

        <GoabPagination
          itemCount={users.length}
          perPageCount={perPage}
          pageNumber={page}
          onChange={(event) => changePage(event.page)}
        />
      </GoabBlock>
    </>
  );
};

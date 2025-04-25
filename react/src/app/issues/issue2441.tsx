import { GoabDropdown, GoabDropdownItem, GoabFormItem } from "@abgov/react-components";
import { useState } from "react";
import { Countries } from "../countries.data";

export const Issue2441 = () => {
  const [country, setCountry] = useState("");
  const countries = Countries;
  return (
    <>
      <GoabFormItem label="Basic dropdown">
        <GoabDropdown name="item" value="" onChange={(event) => setCountry(event.value as string)}>
          {countries.map((country) => (
            <GoabDropdownItem key={country.code} value={country.code} label={country.name}></GoabDropdownItem>
          ))}
        </GoabDropdown>
      </GoabFormItem>
    </>
  )
}

import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@abgov/web-components";

import App from "./app/app";
import { Pagination } from "./app/pagination/Pagination";
import { Drawer } from "./app/drawer/Drawer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={"/pagination"} element={<Pagination/>}></Route>
          <Route path={"/drawer"} element={<Drawer/>}> </Route>

          {/** Add more routes here */}

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

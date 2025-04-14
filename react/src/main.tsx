import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@abgov/web-components";

import App from "./app/app";
import { Pagination } from "./app/components/pagination/Pagination";
import { Issue2446 } from "./app/issues/issue2446";
import { TextPage } from "./app/components/text/Text";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path={"/pagination"} element={<Pagination/>}></Route>
          <Route path={"/text"} element={<TextPage/>}></Route>
          <Route path={"/2446"} element={<Issue2446/>}></Route>
          {/** Add more routes here */}

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

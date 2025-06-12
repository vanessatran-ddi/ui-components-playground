import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@abgov/web-components";

import App from "./app/app";
import { Pagination } from "./app/components/pagination/Pagination";
import { Issue2446 } from "./app/issues/issue2446";
import { Issue2408 } from "./app/issues/issue2408";
import { Issue2441 } from "./app/issues/issue2441";
import { Issue2772 } from "./app/issues/issue2772";
import { TextPage } from "./app/components/text/Text";
import { Drawer } from "./app/drawer/Drawer";
import { Issue1216 } from "./app/issues/issue1216";
import FormTest from "./app/public-form/ThomasPublicForm";
import { SimplePublicFormExample } from "./app/public-form/SimplePublicFormExample";

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
          <Route path={"/text"} element={<TextPage/>}></Route>
          <Route path={"/2446"} element={<Issue2446/>}></Route>
          <Route path={"/2408"} element={<Issue2408/>}></Route>
          <Route path={"/2441"} element={<Issue2441/>}></Route>
          <Route path="/2772" element={<Issue2772/>}></Route>
          <Route path={"/public-form"} element={<SimplePublicFormExample/>}></Route>
          <Route path={"/1216"} element={<Issue1216/>}></Route>
          <Route path={"/public-form-thomas"} element={<FormTest/>}></Route>
          {/** Add more routes here */}

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

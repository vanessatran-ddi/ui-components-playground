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
import { TemporaryNotificationPage } from "./app/components/temporary-notification/TemporaryNotification";
import { TextPage } from "./app/components/text/Text";
import { Drawer } from "./app/drawer/Drawer";
import { Issue1216 } from "./app/issues/issue1216";
import Issue2404 from "./app/issues/issue2404";
import { Issue2789 } from "./app/issues/issue2789";
import { Issue2720 } from "./app/issues/issue2720";
import { Issue1769 } from "./app/issues/issue1769";
import { Issue2768 } from "./app/issues/issue2768";
import { Issue2829 } from "./app/issues/issue2829";
import FormTest from "./app/public-form/ThomasPublicForm";
import { SimplePublicFormExample } from "./app/public-form/SimplePublicFormExample";
import { PublicFormNavigationTest } from "./app/public-form/PublicFormNavigationTest";
import { PublicFormAccessibilityTest } from "./app/public-form/PublicFormAccessibilityTest";
import { Issue2827 } from "./app/public-form/Issue2827";
import { Issue2547 } from "./app/issues/issue2547";
import { PR2969TestForm } from "./app/public-form/PR2969TestForm";

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
          <Route path={"/temporary-notification"} element={<TemporaryNotificationPage/>}></Route>
          <Route path={"/text"} element={<TextPage/>}></Route>
          <Route path={"/2446"} element={<Issue2446/>}></Route>
          <Route path={"/2408"} element={<Issue2408/>}></Route>
          <Route path={"/2441"} element={<Issue2441/>}></Route>
          <Route path="/2404" element={<Issue2404/>}></Route>
          <Route path="/2772" element={<Issue2772/>}></Route>
          <Route path="/2789" element={<Issue2789/>}></Route>
          <Route path="/1769" element={<Issue1769/>}></Route>
          <Route path="/2768" element={<Issue2768/>}></Route>
          <Route path="/2720" element={<Issue2720/>}></Route>
          <Route path="/2829" element={<Issue2829/>}></Route>
          <Route path={"/public-form"} element={<SimplePublicFormExample/>}></Route>
          <Route path={"/public-form-navigation"} element={<PublicFormNavigationTest/>}></Route>
          <Route path={"/public-form-accessibility"} element={<PublicFormAccessibilityTest/>}></Route>
          <Route path={"/1216"} element={<Issue1216/>}></Route>
          <Route path={"/public-form-thomas"} element={<FormTest/>}></Route>
          <Route path={"/2827"} element={<Issue2827/>}></Route>
          <Route path={"/2547"} element={<Issue2547/>}></Route>
          <Route path={"/pr2969-test"} element={<PR2969TestForm/>}></Route>
          {/** Add more routes here */}

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

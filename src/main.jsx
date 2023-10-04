import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DetailsView from "./pages/DetailsView";
import ListView from "./pages/ListView";
import ErrorView from "./pages/ErrorView";
import Bookmark from "./pages/Bookmark";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ListViewData } from "./pages/ListView";
import { DetailsViewData } from "./pages/DetailsView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index loader={ListViewData} element={<ListView />} />
      <Route
        path="/details/:id"
        loader={DetailsViewData}
        element={<DetailsView />}
      />
      <Route path="/Bookmark" element={<Bookmark />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

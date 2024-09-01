import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Plugin from "./pages/plugin";
import FileUpload from "./pages/file-upload";
import PageLoading from "./pages/loading";
import Analysis from "./pages/analysis";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/step2",
    element: <Plugin />,
  },
  {
    path: "/step3",
    element: <FileUpload />,
  },
  {
    path: "/step4",
    element: <PageLoading />,
  },
  {
    path: "/step5",
    element: <Analysis />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Plugin from "./pages/plugin";
import FileUpload from "./pages/file-upload";

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
    element: <FileUpload />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

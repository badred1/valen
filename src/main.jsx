import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./screens/Home.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PickDate from "./screens/PickDate.jsx";
import PickFood from "./screens/PickFood.jsx";
import Thanks from "./screens/Thanks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pick-date",
    element: <PickDate />,
  },
  {
    path: "/pick-food",
    element: <PickFood />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  </React.StrictMode>
);

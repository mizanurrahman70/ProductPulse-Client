import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import "./index.css";
import AuthProvider, { AuthContext } from "./Ahuntication/AuthContext/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>
);
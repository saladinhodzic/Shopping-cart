import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { ContextWrapper } from "./context/AppContext.jsx";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <ContextWrapper>
          <Notifications />
          <App />
        </ContextWrapper>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);

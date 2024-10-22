import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { Notifications } from "@mantine/notifications";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <Notifications />
        <App />
      </MantineProvider>
    </Provider>
  </StrictMode>
);

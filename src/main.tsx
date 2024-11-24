import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import {
  UsersPage,
  LoginPage,
  RolesPage,
  PermitionsPage,
  SignupPage,
  WorkOrdersPage,
} from "./pages";
import DashboardLayout from "./layouts/dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registro" element={<SignupPage />} />
        <Route path="/ingreso" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<DashboardLayout />}
          children={[
            <Route path="usuarios" element={<UsersPage />} />,
            <Route path="roles-y-permisos" element={<RolesPage />} />,
            <Route path="ordenes-de-trabajo" element={<WorkOrdersPage />} />,
            <Route path="permisos" element={<PermitionsPage />} />,
          ]}
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

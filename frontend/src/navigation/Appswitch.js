import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { APP_DASHBOARD, APP_LOGIN_PAGE, APP_REGISTER_PAGE } from "./routes";

function Appswitch() {
  return (
    <div>
      <Routes>
        <Route path={APP_REGISTER_PAGE} element={<RegisterPage />} />
        <Route path={APP_LOGIN_PAGE} element={<LoginPage />} />
        <Route path={APP_DASHBOARD} element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default Appswitch;

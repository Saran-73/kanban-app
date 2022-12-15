import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { IS_USER_AUTHENTICATED_API } from "../api/url";
import { makeGetRequest } from "../api/utlis";
import Layout from "../components/LayoutComponents/Layout";
import DashboardPage from "../pages/DashboardPage";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Unauthorised from "../pages/Unauthorised";
import {
  APP_DASHBOARD,
  APP_TASKS_PAGE,
  APP_LOGIN_PAGE,
  APP_REGISTER_PAGE,
  APP_UNAUTHORISED_PAGE,
} from "./routes";
import TasksPage from "../pages/TasksPage";
import RequireAuth from "../components/RequireAuth";
import useStore from "../store/store";

// route protection works when interacting with ui but not when changing the url resolve it

function Appswitch() {
  const navigate = useNavigate();
  const location = useLocation();
  const setIsAuthorised = useStore((state) => state.setIsAuthorised);
  // const isAuthorised = useStore((state) => state.isAuthorised);

  React.useEffect(() => {
      makeGetRequest(IS_USER_AUTHENTICATED_API)
        .then((data) => {
          setIsAuthorised(true);
          if (location.pathname === "/" || location.pathname === "/login") {
            navigate(APP_DASHBOARD)
          } else {
            navigate(location.pathname)
          }
        })
        .catch((err) => {
          setIsAuthorised(false);
          navigate(APP_LOGIN_PAGE)
        });
  }, []);

  //  --- remove the inital / from route name -----
  const makeRouteName = (routeName) => {
    const removedSlash = routeName.substring(1, routeName.length);
    return removedSlash;
  };

  const protectedRoutes = () => {
    return (
      <>
        <Route
          path={makeRouteName(APP_DASHBOARD)}
          element={<DashboardPage />}
        />
        <Route
          path={makeRouteName(APP_TASKS_PAGE)}
          element={<TasksPage />}
        />
      </>
    );
  };

  return (
    <Box minH="100vh">
      <Routes>
        <Route path={"/"} element={<Layout />}>

          {/* --- PUBLIC ROUTES ----- */}
          <Route
            path={makeRouteName(APP_REGISTER_PAGE)}
            element={<RegisterPage />}
          />
          <Route path={makeRouteName(APP_LOGIN_PAGE)} element={<LoginPage />} />
          <Route
            path={makeRouteName(APP_UNAUTHORISED_PAGE)}
            element={<Unauthorised />}
          />

          {/* ----- PRIVATE ROUTES ----- */}
          <Route element={<RequireAuth />}>{protectedRoutes()}</Route>

          {/* --- CATCH ALL ---- */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default Appswitch;

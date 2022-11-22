import { Box } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { IS_USER_AUTHENTICATED_API } from "../api/url";
import { makeGetRequest } from "../api/utlis";
import AppNavbar from "../components/AppNavbar";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getApiToken } from "../utils/utlis";
import {
  APP_DASHBOARD,
  APP_LISTING_PAGE,
  APP_LOGIN_PAGE,
  APP_REGISTER_PAGE,
} from "./routes";

// const ProtectedRoutes = ({ isAuthenticated }) => {
//   if (isAuthenticated) {
//     return (
//       <DashboardPage />
//       // <Routes>
//         // <Route to={APP_DASHBOARD} element={<DashboardPage />} />
//         // <Route to={APP_REGISTER_PAGE} element={<RegisterPage />} />
//       // </Routes>
//     );
//   }

//   return (<LoginPage />)
//   // return <Route to={APP_LOGIN_PAGE} element={<LoginPage />} />;
// };

function Appswitch() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  // const navigate = useNavigate();
  // let location = useLocation();

  // const isUserAuthenticated = () => {
  //   if (getApiToken()) {
  //     setIsAuthenticated(true);
  //     // navigate(APP_DASHBOARD)
  //   } else {
  //     setIsAuthenticated(false);
  //     navigate(APP_LOGIN_PAGE);
  //   }
  // };

  // const { data: currentUser, isSuccess } = useQuery(IS_USER_AUTHENTICATED_API, () =>
  //   makeGetRequest(IS_USER_AUTHENTICATED_API), {
  //   onSucess () {
  //       setIsAuthenticated(true)
  //   },
  //   onError() {
  //     setIsAuthenticated(false)
  //     }
  //   }
  // );
  // console.log(currentUser);

  React.useEffect(() => {}, []);

  const getRedirectionUrl = () => {
    // const pathname = window.location.pathname;
    // if (isAuthenticated && (pathname === "/login" || pathname === '/' || pathname === "/register")) {
    //   return APP_DASHBOARD;
    // } else if (!isAuthenticated) {
    //   return APP_LOGIN_PAGE;
    // }
  };

  const protectedRoutes = () => {
    return (
      <>
        <Route path={APP_DASHBOARD} element={<DashboardPage />} />
        <Route path={APP_LISTING_PAGE} element={<APP_LISTING_PAGE />} />
      </>
    );
  };
  return (
    <AppNavbar>
      <Box minH="100vh">
        <Routes>
          {/* <Route path={"/"} element={<Navigate to={getRedirectionUrl()} />} /> */}
          <Route path={APP_REGISTER_PAGE} element={<RegisterPage />} />
          <Route path={APP_LOGIN_PAGE} element={<LoginPage />} />
          {protectedRoutes()}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
    </AppNavbar>
  );
}

export default Appswitch;

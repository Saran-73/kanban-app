import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppNavbar from "../components/AppNavbar";
import DashboardPage from "../pages/DashboardPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { getApiToken } from "../utils/utlis";
import { APP_DASHBOARD, APP_LOGIN_PAGE, APP_REGISTER_PAGE } from "./routes";

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
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const navigate = useNavigate();
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

  React.useEffect(() => {
    // isUserAuthenticated();
  }, []);

  return (
    <AppNavbar>
    <Box minH="100vh">
      <Routes>
        <Route path={APP_REGISTER_PAGE} element={<RegisterPage />} />
        <Route path={APP_LOGIN_PAGE} element={<LoginPage />} />

        {/* {isAuthenticated && ( */}
          <Route path={APP_DASHBOARD} element={<DashboardPage />} />
        {/* )} */}
        <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Box>
      </AppNavbar>
      
  );
}

export default Appswitch;

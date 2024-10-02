import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Dashboard from "../pages/admin/Dashboard";
import NotFound from "../pages/NotFound";
// Component

const Router = () => {

  const validRoutes = [
    "/",
    "/login",
    "/register",
    // "/about",
    // "/contact",
    // "/digitalmarketig",
    // "/computerservices",
    // "/generalsalesorders",
  ];
  const isRouteValid = validRoutes.includes(window.location.pathname);

  console.log({ "[isRouteValid]:: ": isRouteValid });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login/:name/:age" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        {isRouteValid ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
          </>
        ) : (
          <Route path={"*"} element={<NotFound />} /> )
        }

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
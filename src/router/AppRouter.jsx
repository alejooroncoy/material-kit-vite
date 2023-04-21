import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PageIndex from "../pages";
import PageSettings from "../pages/settings";
import PageCustomers from "../pages/customers";
import PageCompanies from "../pages/companies";
import PageAccount from "../pages/account";
import Page404 from "../pages/404";
import PageLogin from "../pages/auth/login";
import PageRegister from "../pages/auth/register";
import { Layout as AuthLayout } from "../layouts/auth/layout";
import { Layout as DashboardLayout } from "../layouts/dashboard/layout";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          element={<DashboardLayout />}
          path="/"
        >
          <Route
            index
            element={<PageIndex />}
          />
          <Route
            path="settings"
            element={<PageSettings />}
          />
          <Route
            path="customers"
            element={<PageCustomers />}
          />
          <Route
            path="companies"
            element={<PageCompanies />}
          />
          <Route
            path="account"
            element={<PageAccount />}
          />
        </Route>
        <Route
          element={<AuthLayout />}
          path="/auth"
        >
          <Route
            path="login"
            element={<PageLogin />}
          />
          <Route
            path="register"
            element={<PageRegister />}
          />
        </Route>
        <Route
          path="*"
          element={<Page404 />}
        />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;

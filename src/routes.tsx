// routes.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import NotFound from "./pages/not-found/NotFound";
import Authentication from "./pages/authentication/Authentication";
import Login from "./pages/authentication/login/Login";
import SignUp from "./pages/authentication/signup/SignUp";
import ForgotPassword from "./pages/authentication/forgot-password/ForgotPassword";
import ResetPassword from "./pages/authentication/reset-password/ResetPassword";
import ContactUs from "./pages/contact-us/ContactUs";
import TermsAndConditions from "./pages/terms-and-conditions/TermsAndConditions";
import HelpAndSupport from "./pages/help-and-support/HelpAndSupport";
import Pricing from "./pages/pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "pricing", element: <Pricing /> },
      { path: "help-and-support", element: <HelpAndSupport /> },
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
      {
        path: "authentication", element: <Authentication />,
        children: [
          {
            index: true, element: <Navigate to={"/authentication/login"} />
          },
          {
            path: "login", element: <Login />
          },
          {
            path: "signup", element: <SignUp />
          },
          {
            path: "forgot-password", element: <ForgotPassword />
          },
          {
            path: "reset-password", element: <ResetPassword />
          }
        ]
      },
      { path: "*", element: <NotFound /> }
    ],
  },
]);

export default router;

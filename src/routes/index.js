import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const Cart = lazy(() => import("../pages/Cart"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const routes = [
  { path: "/dashboard", Component: Home, title: "DashBoard" },
  { path: "/cart", Component: Cart, title: "Cart" },
  { path: "/404", Component: NotFound, title: "404" },
];

export const publicRoutes = [
  { path: "/signup", Component: SignUp, title: "Sign Up" },
  { path: "/signin", Component: SignIn, title: "Sign In" },
];

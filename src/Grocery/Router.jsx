import { createBrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
//import Front from "./Front";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Services from "./Services";
import AboutUs from "./AboutUs";
//import Logout from "./Logout";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services /> },
  { path: "/aboutus", element: <AboutUs /> },
  //{ path: "/logout", element: <Logout /> },
]);
export default router;

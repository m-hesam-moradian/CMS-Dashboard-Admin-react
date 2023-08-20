import Home from "./Pages/HomePage/Home"
import Users from "./Pages/UsersPage/Users"
import NewUser from "./Pages/NewUserPage/NewUser";
import Products from "./Pages/Products/Products";



let routes = [
  { path: "/", element: <Home /> },
  { path: "/Users", element: <Users /> },
  { path: "/NewUser", element: <NewUser /> },
  { path: "/Products", element: <Products /> },
];

export default routes;
import Home from "./Pages/HomePage/Home"
import Users from "./Pages/UsersPage/Users"
import NewUser from "./Pages/NewUserPage/NewUser";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";



let routes = [
  { path: "/", element: <Home /> },
  { path: "/Users", element: <Users /> },
  { path: "/User/:UserID", element: <Users /> },
  { path: "/NewUser", element: <NewUser /> },
  { path: "/Products", element: <Products /> },
  { path: "/Product/:ProductID", element: <Product /> },
];

export default routes;
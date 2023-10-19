import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import MyCart from "./../pages/MyCart/MyCart";
import BrandProducts from "../pages/BrandProducts/BrandProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/brandProducts/:name",
        element: <BrandProducts />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/allProducts/${params.name}`),
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: `/productDetails/:id`,
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/products/${params.id}`),
      },
      {
        path: `/myCart`,
        element: <MyCart />,
        loader: () => fetch("http://localhost:4000/cart"),
      },
      {
        path: "/myCart",
        element: <MyCart />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/updateProduct",
        element: <UpdateProduct />,
      },
    ],
  },
]);

export default Router;

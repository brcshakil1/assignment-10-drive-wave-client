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
import PrivetRoute from "./PrivetRoute";

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
        element: (
          <PrivetRoute>
            <BrandProducts />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/allProducts/${params.name}`),
      },
      {
        path: "/addProduct",
        element: (
          <PrivetRoute>
            <AddProduct />
          </PrivetRoute>
        ),
      },
      {
        path: `/productDetails/:id`,
        element: (
          <PrivetRoute>
            <ProductDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/products/${params.id}`),
      },
      {
        path: `/myCart`,
        element: (
          <PrivetRoute>
            <MyCart />
          </PrivetRoute>
        ),
        loader: () => fetch("http://localhost:4000/cart"),
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
        path: "/updateProduct/:id",
        element: (
          <PrivetRoute>
            <UpdateProduct />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/products/${params.id}`),
      },
    ],
  },
]);

export default Router;

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
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
          fetch(
            `https://drive-wave-server-ojtbf5xjn-brcshakil.vercel.app/allProducts/${params.name}`
          ),
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
          fetch(
            `https://drive-wave-server-ojtbf5xjn-brcshakil.vercel.app/products/${params.id}`
          ),
      },
      {
        path: `/myCart`,
        element: (
          <PrivetRoute>
            <MyCart />
          </PrivetRoute>
        ),
        loader: () =>
          fetch(
            "https://drive-wave-server-ojtbf5xjn-brcshakil.vercel.app/cart"
          ),
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
          fetch(
            `https://drive-wave-server-ojtbf5xjn-brcshakil.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default Router;

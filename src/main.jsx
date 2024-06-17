import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./pages/signin.tsx";
import CartItem from "./components/CartItem.tsx";
import Searchbar from "./components/Searchbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "item",
    element: <CartItem />,
  },
  {
    path: "search",
    element: <Searchbar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

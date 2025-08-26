import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Banner from "./components/Banner";
import About from "./components/About";
import Recent from "./components/Recent";
import Contract from "./components/Contract";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/banner", Component:Banner },
      { path: "/about", Component:About  },
      { path: "/recent", Component:Recent  },
      { path: "/contract", Component:Contract  },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};


export default App;

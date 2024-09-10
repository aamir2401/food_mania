import React, { lazy, Suspense } from "react"
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer.js";
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About.js";
import Error from "./src/components/Error.js";
import Contactus from "./src/components/Contactus.js";
import Cart from "./src/components/Cart.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";
const Grocery = lazy(() => import("./src/components/Grocery.js"))
import './index.css'
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";
//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
//dynamic importing
const AppLayout = () =>
{
  return(
    <Provider store={appStore}>
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
    </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path : "/",
        element : <Body/>
       },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contactus",
        element: <Contactus />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/grocery",
        element: <Suspense><Grocery /></Suspense>
      },
      {
        path:"restaurants/:resId",
        element: <RestaurantMenu/> 
      }
    ],
    errorElement: <Error />
  },
 
])
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);
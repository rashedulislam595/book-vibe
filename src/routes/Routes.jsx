import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import HomePage from "../pages/homePage/HomePage";
import ErrorPageUI from "../pages/error_page/ErrorPageUI";

export const router = createBrowserRouter([
  {
    path:"/",
    Component: MainLayout,
    children:[
      {
        index:true,
        Component: HomePage
      },
      {
        path:"/books",
        Component: Books
      }
    ],
    errorElement:<ErrorPageUI/>
  },
  
])
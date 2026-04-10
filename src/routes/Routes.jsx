import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import HomePage from "../pages/homePage/HomePage";
import ErrorPageUI from "../pages/error_page/ErrorPageUI";
import BookDetails from "../pages/bookDetails/BookDetails";

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
      },
      {
        path:"/bookDetails/:bookId",
        Component:BookDetails,
        loader: () => fetch("/booksData.json")
      }
    ],
    errorElement:<ErrorPageUI/>
  },
  
])
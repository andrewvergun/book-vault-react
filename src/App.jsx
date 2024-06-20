import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import React from "react";
import "./index.css";
import { BrowserRouter, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BookDetails, {
  bookDetailsLoader,
} from "./pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/book-vault",
        element: <Home />,
      },
      {
        path: "/book-vault//about",
        element: <About />,
      },
      {
        path: "/book-vault/books/:book_id",
        element: <BookDetails />,
        loader: bookDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

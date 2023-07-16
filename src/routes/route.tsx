import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddNewBook from "../pages/AddNewBook";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/all-books/:id",
        element: <BookDetails />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
    ],
  },
]);

export default routes;

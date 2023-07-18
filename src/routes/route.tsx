import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Protected from "../layouts/Protected";
import AddNewBook from "../pages/AddNewBook";
import AllBooks from "../pages/AllBooks";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";
import Home from "../pages/Home";
import Reading from "../pages/Reading";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Wishlist from "../pages/Wishlist";

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
        path: "/all-books/:id/edit",
        element: (
          <Protected>
            <EditBook />
          </Protected>
        ),
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
        element: (
          <Protected>
            <AddNewBook />
          </Protected>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <Protected>
            <Wishlist />
          </Protected>
        ),
      },
      {
        path: "/reading",
        element: (
          <Protected>
            <Reading />
          </Protected>
        ),
      },
    ],
  },
]);

export default routes;

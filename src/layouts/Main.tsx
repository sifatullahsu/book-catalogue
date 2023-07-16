import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = () => {
  // const { data } = useAppSelector((state) => state.user);
  // console.log(data);

  // const { data: user } = useGetUserQuery("64b36acf1221991f508c64b5");
  // console.log(user);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default Main;

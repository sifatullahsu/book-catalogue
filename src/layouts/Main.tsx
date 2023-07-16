import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAppSelector } from "../redux/hooks";

const Main = () => {
  const { data } = useAppSelector((state) => state.user);

  console.log(data);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;

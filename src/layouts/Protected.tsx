import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const Protected = ({ children }: { children: ReactNode }) => {
  const { data } = useAppSelector((state) => state.user);

  if (!data) return <Navigate to="/"></Navigate>;

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Protected;

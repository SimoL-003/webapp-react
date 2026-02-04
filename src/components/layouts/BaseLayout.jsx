import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

export default function BaseLayour() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet /> 
      <Footer />
    </>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

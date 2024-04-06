import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import PageBG from "../components/PageBG";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-gray-950">
      <Header />
      <main className="bg-transparent relative isolate">
        <PageBG />
        <Sidebar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

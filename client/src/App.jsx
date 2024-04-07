import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />,
      <Route path="/about" element={<About />} />,
      <Route path="/gallery" element={<Gallery />} />,
      <Route path="/blog" element={<Blog />} />,
      <Route path="/contact" element={<Contact />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/signup" element={<Signup />} />,
      <Route path="/dashboard" element={<Dashboard />} />,
    </Route>
  )
);

function App() {
  return (
    <>
      <AuthContextProvider>
        <AppContextProvider>
          <RouterProvider router={router} />
        </AppContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;

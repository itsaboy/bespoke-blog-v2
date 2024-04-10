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
import SingleGalleryPost from "./components/Gallery/SingleGalleryPost";
import Blog from "./pages/Blog";
import SingleBlogPost from "./components/Blog/SingleBlogPost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NewGalleryPost from "./components/Dashboard/NewGalleryPost";
import NewBlogPost from "./components/Dashboard/NewBlogPost";
import NewContactInfo from "./components/Dashboard/NewContactInfo";
import EditHomePage from "./components/Dashboard/EditHomePage";
import EditAboutPage from "./components/Dashboard/EditAboutPage";
import EditGalleryPage from "./components/Dashboard/EditGalleryPage";
import EditBlogPage from "./components/Dashboard/EditBlogPage";
import DeleteBlogPost from "./components/Dashboard/DeleteBlogPost";
import DeleteGalleryPost from "./components/Dashboard/DeleteGalleryPost";
import DeleteContactInfo from "./components/Dashboard/DeleteContactInfo";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />,
      <Route path="/about" element={<About />} />,
      <Route path="/gallery" element={<Gallery />} />,
      <Route path="/gallery/:postId" element={<SingleGalleryPost />} />,
      <Route path="/blog" element={<Blog />} />,
      <Route path="/blog/:postId" element={<SingleBlogPost />} />,
      <Route path="/contact" element={<Contact />} />,
      <Route path="/login" element={<Login />} />,
      <Route path="/signup" element={<Signup />} />,
      <Route path="/dashboard" element={<Dashboard />} />,
      <Route path="/dashboard/new-blog-post" element={<NewBlogPost />} />,
      <Route path="/dashboard/new-gallery-post" element={<NewGalleryPost />} />,
      <Route path="/dashboard/new-contact-info" element={<NewContactInfo />} />,
      <Route path="/dashboard/edit-home-page" element={<EditHomePage />} />,
      <Route path="/dashboard/edit-about-page" element={<EditAboutPage />} />,
      <Route path="/dashboard/edit-gallery-page" element={<EditGalleryPage />} />,
      <Route path="/dashboard/edit-blog-page" element={<EditBlogPage />} />,
      <Route path="/dashboard/delete-blog-post" element={<DeleteBlogPost />} />,
      <Route path="/dashboard/delete-gallery-post" element={<DeleteGalleryPost />} />,
      <Route path="/dashboard/delete-contact-info" element={<DeleteContactInfo />} />,      
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

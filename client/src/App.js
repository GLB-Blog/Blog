import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/Single/Single";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./style.scss"
import SDG from "./pages/SdgGoals/SdgGoals";
import Teachers from "./pages/Teachers/Teachers";
// import Teachers from "./pages/new_teacher_page";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path : "/sdg",
        element: <SDG /> 
      },
      {
        path: "/teachers",
        element : <Teachers />
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./common/Layout";
import Home from "./pages/Home";
import All_lawyer from "./pages/All_lawyer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "All_lawyer", element: <All_lawyer /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "signup", element: <Signup /> },

    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

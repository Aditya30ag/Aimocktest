import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <WelcomePage />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <HomePage />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login/>
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Signup/>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

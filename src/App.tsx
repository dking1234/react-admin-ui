import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/admin/Admin";
import BusOp from "./pages/bus-Operator/BusOp";
import Customer from "./pages/customer/Customer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Tickets from "./pages/tickets/Tickets";
import Trip from "./pages/trips/Trip";
import "./styles/global.scss"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }


  const router = createBrowserRouter([
    {
     path: "/",
     element: <Layout/>,
     children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/customer",
        element: <Customer />
      }, 
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/busOp",
        element: <BusOp />
      },
      {
        path: "/trip",
        element: <Trip />
      },
      {
        path: "/tickets",
        element: <Tickets />
      },
     ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);
  

  return (
    <RouterProvider router={router}/>
  )
}

export default App

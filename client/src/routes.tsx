// Admin Imports
import Dashboard from "views/admin/Dashboard";
import AddEvent from "views/admin/AddEvent"
import ViewEvent from "views/admin/ViewEvent"

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import { MdHome, MdLock, MdReport } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaTasks } from "react-icons/fa";
import { BiCctv } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Add Event",
    layout: "/admin",
    path: "addevent",
    icon: <MdHome className="h-6 w-6" />,
    component: <AddEvent/>,
  },
  {
    name: "Events Schedule",
    layout: "/admin",
    path: "viewevents",
    icon: <MdHome className="h-6 w-6" />,
    component: <ViewEvent/>,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  
];
export default routes;

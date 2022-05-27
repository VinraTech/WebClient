import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../mlmasset/n360logo.png";
const Sidebar = () => {
  return (
    <div className="w-52 bg-gray-300 flex items-center h-screen flex-col">
      <div className="mt-4 mb-3">
        <NavLink to="/mlmEngineDashboard">
          <img src={Logo} alt="Logo" width={"100px"} height={'100px'} className="object-cover"/>
        </NavLink>
      </div>
      <div className="flex flex-col gap-3 items-center w-full ">
        <NavLink
          to="/mlmEngineDashboard"
          className="self-start w-full py-2 pl-2 text-lg font-semibold mlmtext"
        >
          Dashboard
        </NavLink>
        <details open>
          <summary className="mb-1 text-md font-semibold">
            Reseller Management
          </summary>
          <ul className="ml-4 flex gap-2 flex-col">
            <li className="">
              <Link to="approvalpending">Approval Pending</Link>
            </li>
            <li>
              <Link to="#">Search Reseller</Link>
            </li>
            <li>
              <Link to="#">View Reseller</Link>
            </li>
            <li>
              <Link to="#">Purchase History</Link>
            </li>
            <li>
              <Link to="#">Reseller Hierarchy</Link>
            </li>
            <li>
              <Link to="#">Inactivate Reseller</Link>
            </li>
          </ul>
        </details>
        {/* After List  */}
        <ul className="flex flex-col gap-3 mt-4">
          <li>
            <Link to="#" className="font-semibold">
              Product Management
            </Link>
          </li>

          <li>
            <Link to="#" className="font-semibold">
              Order Management
            </Link>
          </li>
          <li>
            <Link to="#" className="font-semibold">
              Inventory Management
            </Link>
          </li>
          <li>
            <Link to="#" className="font-semibold">
              Notification Management
            </Link>
          </li>
          <li>
            <Link to="#" className="font-semibold">
              Staff Management
            </Link>
          </li>
          <li>
            <Link to="#" className="font-semibold">
              Binary & Structure
            </Link>
          </li>
          <li>
            <Link to="#" className="font-semibold">
              Bonus
            </Link>
          </li>
          <li>
            <Link to="#" className="font-semibold">
              Reports
            </Link>
          </li>
          <li>
            <Link to="#" className="font-semibold">
              Setting
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

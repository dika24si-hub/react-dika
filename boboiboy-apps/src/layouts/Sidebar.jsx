import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaClipboardList, FaUsers, FaBoxOpen, FaPlus, FaExclamationTriangle } from "react-icons/fa";

export default function Sidebar() {

  const menuClass = ({ isActive }) =>
    `flex items-center cursor-pointer rounded-xl p-4 space-x-2 font-medium transition
    ${isActive
      ? "text-hijau bg-green-200 dark:bg-green-700 font-extrabold"
      : "text-gray-600 dark:text-gray-300 hover:text-hijau hover:bg-green-200 dark:hover:bg-green-700 hover:font-extrabold"
    }`;

  return (
    <div className="flex min-h-screen w-[360px] flex-col bg-white dark:bg-gray-800 p-10 shadow-lg text-black dark:text-white">

      {/* LOGO */}
      <div className="flex flex-col">
        <span className="font-poppins text-[48px] font-extrabold text-gray-900 dark:text-white">
          Sedap <b className="text-hijau">.</b>
        </span>

        <span className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* MENU */}
      <div className="mt-10">
        <ul className="space-y-3">

          {/* MAIN MENU */}
          <li>
            <NavLink to="/" className={menuClass}>
              <MdDashboard className="text-xl" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaClipboardList className="text-xl" />
              <span>Orders</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/customers" className={menuClass}>
              <FaUsers className="text-xl" />
              <span>Customers</span>
            </NavLink>
          </li>

          {/* 🔥 TAMBAHAN WAJIB (MODUL PRODUCT) */}
          <li>
            <NavLink to="/products" className={menuClass}>
              <FaBoxOpen className="text-xl" />
              <span>Products</span>
            </NavLink>
          </li>

          {/* PEMISAH */}
          <hr className="my-3 border-gray-200 dark:border-gray-700" />

          {/* ERROR MENU */}
          <li className="text-gray-400 text-sm font-semibold">
            Error Pages
          </li>

          <li>
            <NavLink to="/error-400" className={menuClass}>
              <FaExclamationTriangle className="text-xl" />
              <span>Error 400</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/error-401" className={menuClass}>
              <FaExclamationTriangle className="text-xl" />
              <span>Error 401</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/error-403" className={menuClass}>
              <FaExclamationTriangle className="text-xl" />
              <span>Error 403</span>
            </NavLink>
          </li>

        </ul>
      </div>

      {/* FOOTER */}
      <div className="mt-auto">

        <div className="bg-hijau px-4 py-3 rounded-md shadow-lg mb-10 flex items-center justify-between">
          <div className="text-white text-sm">
            <span>
              Please organize your menus through button below!
            </span>

            <div className="flex justify-center items-center gap-2 p-2 mt-3 bg-white rounded-md">
              <FaPlus className="text-gray-600 text-sm" />
              <span className="text-gray-600">Add Menus</span>
            </div>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            className="w-20 h-20 rounded-full object-cover ml-3"
            alt="user"
          />
        </div>

        <span className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>

        <p className="font-light text-gray-400">
          © 2025 All Right Reserved
        </p>

      </div>
    </div>
  );
}
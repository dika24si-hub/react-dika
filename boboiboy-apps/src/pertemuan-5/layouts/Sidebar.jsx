import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaClipboardList, FaUsers, FaPlus } from "react-icons/fa";

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    return (
        <div
            id="sidebar"
            className="flex min-h-screen w-[360px] flex-col bg-white p-10 shadow-lg"
        >
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span
                    id="logo-title"
                    className="font-poppins text-[48px] text-gray-900"
                >
                    Sedap <b id="logo-dot" className="text-hijau">.</b>
                </span>

                <span
                    id="logo-subtitle"
                    className="font-semibold text-gray-400"
                >
                    Modern Admin Dashboard
                </span>
            </div>

            {/* Menu */}
            <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">

                    {/* Dashboard */}
                    <li>
                        <div
                            id="menu-1"
                            onClick={() => setActiveMenu("Dashboard")}
                            className={`flex items-center cursor-pointer rounded-xl p-4 font-medium transition
                            ${activeMenu === "Dashboard"
                                ? "bg-green-200 text-hijau font-extrabold"
                                : "text-gray-600 hover:bg-green-200 hover:text-hijau"}
                            `}
                        >
                            <MdDashboard className="mr-4 text-xl" />
                            Dashboard
                        </div>
                    </li>

                    {/* Orders */}
                    <li>
                        <div
                            id="menu-2"
                            onClick={() => setActiveMenu("Orders")}
                            className={`flex items-center cursor-pointer rounded-xl p-4 font-medium transition
                            ${activeMenu === "Orders"
                                ? "bg-green-200 text-hijau font-extrabold"
                                : "text-gray-600 hover:bg-green-200 hover:text-hijau"}
                            `}
                        >
                            <FaClipboardList className="mr-4 text-xl" />
                            Orders
                        </div>
                    </li>

                    {/* Customers */}
                    <li>
                        <div
                            id="menu-3"
                            onClick={() => setActiveMenu("Customers")}
                            className={`flex items-center cursor-pointer rounded-xl p-4 font-medium transition
                            ${activeMenu === "Customers"
                                ? "bg-green-200 text-hijau font-extrabold"
                                : "text-gray-600 hover:bg-green-200 hover:text-hijau"}
                            `}
                        >
                            <FaUsers className="mr-4 text-xl" />
                            Customers
                        </div>
                    </li>

                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" className="mt-auto">

                <div
                    id="footer-card"
                    className="bg-hijau px-4 py-3 rounded-md shadow-lg mb-10 flex items-center justify-between"
                >
                    <div id="footer-text" className="text-white text-sm">
                        <span>
                            Please organize your menus through button below!
                        </span>

                        <div
                            id="add-menu-button"
                            className="flex justify-center items-center gap-2 p-2 mt-3 bg-white rounded-md"
                        >
                            <FaPlus className="text-gray-600 text-sm" />
                            <span className="text-gray-600">
                                Add Menus
                            </span>
                        </div>
                    </div>

                    <img
                        id="footer-avatar"
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        className="w-20 h-20 rounded-full object-cover ml-3"
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
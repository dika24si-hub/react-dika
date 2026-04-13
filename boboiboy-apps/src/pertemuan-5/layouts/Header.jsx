import { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                id="header-container"
                className="flex justify-between items-center p-4"
            >
                {/* Search Bar */}
                <div
                    id="search-bar"
                    className="relative w-full max-w-lg"
                >
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search Here..."
                        onClick={() => setShowModal(true)}
                        readOnly
                        className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none cursor-pointer"
                    />
                    <FaSearch
                        id="search-icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
                    />
                </div>

                {/* Icon & Profile Section */}
                <div
                    id="icons-container"
                    className="flex items-center space-x-4"
                >
                    {/* Notification */}
                    <div
                        id="notification-icon"
                        className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer"
                    >
                        <FaBell />
                        <span
                            id="notification-badge"
                            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs"
                        >
                            50
                        </span>
                    </div>

                    {/* Chart */}
                    <div
                        id="chart-icon"
                        className="p-3 bg-blue-100 rounded-2xl cursor-pointer"
                    >
                        <FcAreaChart />
                    </div>

                    {/* Settings */}
                    <div
                        id="settings-icon"
                        className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer"
                    >
                        <SlSettings />
                    </div>

                    {/* Profile */}
                    <div
                        id="profile-container"
                        className="flex items-center space-x-4 border-l pl-4 border-gray-300"
                    >
                        <span id="profile-text">
                            Hello, <b>Fikri Muhaffizh</b>
                        </span>

                        <img
                            id="profile-avatar"
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            className="w-10 h-10 rounded-full"
                        />
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                    <div className="bg-white w-[500px] p-6 rounded-xl shadow-lg">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">
                                Search
                            </h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-red-500"
                            >
                                ✖
                            </button>
                        </div>

                        <input
                            type="text"
                            placeholder="Type something..."
                            className="w-full border p-2 rounded-md outline-none"
                        />

                        <div className="mt-4 text-gray-400 text-sm">
                            Example result:
                            <ul className="mt-2 space-y-1">
                                <li>Dashboard</li>
                                <li>Orders</li>
                                <li>Customers</li>
                            </ul>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
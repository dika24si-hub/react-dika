import { useState, useEffect } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {

    // ✅ Ambil kondisi awal dari HTML + localStorage
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem("dark");
        if (saved !== null) return saved === "true";
        return document.documentElement.classList.contains("dark");
    });

    // ✅ Sync ke HTML + simpan ke localStorage
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("dark", dark);
    }, [dark]);

    return (
        <div
            id="header-container"
            className="flex justify-between items-center p-4 bg-white dark:bg-gray-800"
        >
            {/* Search Bar */}
            <div className="relative w-full max-w-lg">
                <input
                    type="text"
                    placeholder="Search Here..."
                    className="border border-gray-100 dark:border-gray-600 p-2 pr-10 bg-white dark:bg-gray-700 text-black dark:text-white w-full rounded-md outline-none"
                />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 dark:text-gray-400" />
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">

                {/* 🌙 Toggle */}
                <button
                    onClick={() => setDark(prev => !prev)}
                    className="p-3 bg-gray-200 dark:bg-gray-700 rounded-2xl"
                >
                    {dark ? "☀️" : "🌙"}
                </button>

                {/* Notification */}
                <div className="relative p-3 bg-blue-100 dark:bg-blue-900 text-blue-500 rounded-2xl cursor-pointer">
                    <FaBell />
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-blue-200 dark:bg-blue-700 rounded-full px-2 py-1 text-xs">
                        50
                    </span>
                </div>

                {/* Chart */}
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-2xl cursor-pointer">
                    <FcAreaChart />
                </div>

                {/* Settings */}
                <div className="p-3 bg-red-100 dark:bg-red-900 text-red-500 rounded-2xl cursor-pointer">
                    <SlSettings />
                </div>

                {/* Profile */}
                <div className="flex items-center space-x-4 border-l pl-4 border-gray-300 dark:border-gray-600">
                    <span className="text-black dark:text-white">
                        Hello, <b>Fikri Muhaffizh</b>
                    </span>

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        className="w-10 h-10 rounded-full"
                    />
                </div>

            </div>
        </div>
    );
}
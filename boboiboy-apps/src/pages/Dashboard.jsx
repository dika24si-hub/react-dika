import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaUsers } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="text-black dark:text-white">

            {/* Page Header */}
            <PageHeader 
                title="Dashboard"
                breadcrumb={["Home", "Home Detail", "Home Very Detail"]}
            >
                <button className="bg-hijau text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition">
                    Add Button
                </button>
            </PageHeader>

            {/* GRID */}
            <div
                id="dashboard-grid"
                className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
            >
                {/* CARD */}
                <div className="flex items-center space-x-5 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <div className="bg-hijau rounded-full p-4 text-3xl text-white">
                        <FaShoppingCart />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">75</span>
                        <span className="text-gray-400">Total Orders</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <div className="bg-biru rounded-full p-4 text-3xl text-white">
                        <FaTruck />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">175</span>
                        <span className="text-gray-400">Total Delivered</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <div className="bg-merah rounded-full p-4 text-3xl text-white">
                        <FaBan />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">40</span>
                        <span className="text-gray-400">Total Canceled</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <div className="bg-kuning rounded-full p-4 text-3xl text-white">
                        <FaDollarSign />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Rp.128</span>
                        <span className="text-gray-400">Total Revenue</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <div className="bg-purple-500 rounded-full p-4 text-3xl text-white">
                        <FaUsers />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">120</span>
                        <span className="text-gray-400">Total Users</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
                    <div className="bg-green-500 rounded-full p-4 text-3xl text-white">
                        <FaDollarSign />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Rp.500</span>
                        <span className="text-gray-400">Total Profit</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
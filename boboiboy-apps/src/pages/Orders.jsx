import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { ordersData } from "../data/orders";

export default function Orders() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <PageHeader
        title="Orders"
        breadcrumb={["Dashboard", "Order List"]}
      >
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-hijau text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Add Order
        </button>
      </PageHeader>

      {/* ================= FORM ================= */}
      {showForm && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-lg font-semibold mb-4">Add New Order</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500">Customer Name</label>
              <input
                type="text"
                placeholder="Input customer name"
                className="border p-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Status</label>
              <select className="border p-2 w-full rounded mt-1">
                <option>Pending</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-500">Total Price</label>
              <input
                type="number"
                placeholder="Input total price"
                className="border p-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Order Date</label>
              <input
                type="date"
                className="border p-2 w-full rounded mt-1"
              />
            </div>
          </div>

          <button className="mt-4 bg-hijau text-white px-5 py-2 rounded-md">
            Save
          </button>
        </div>
      )}

      {/* ================= TABLE ================= */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-left">

          {/* HEADER */}
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-sm">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {ordersData.map((order) => (
              <tr
                key={order.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-3 font-semibold">#{order.id}</td>

                <td className="p-3">{order.customer}</td>

                {/* STATUS BADGE */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-3 font-semibold">
                  Rp.{order.total.toLocaleString()}
                </td>

                <td className="p-3 text-gray-500">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
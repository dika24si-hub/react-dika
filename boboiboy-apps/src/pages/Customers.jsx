import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ WAJIB
import PageHeader from "../components/PageHeader";
import { customersData } from "../data/customers";

export default function Customers() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* HEADER */}
      <PageHeader
        title="Customers"
        breadcrumb={["Dashboard", "Customer List"]}
      >
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-hijau text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Add Customer
        </button>
      </PageHeader>

      {/* ================= FORM ================= */}
      {showForm && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-4">
          <h2 className="text-lg font-semibold mb-4">Add New Customer</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500">Customer Name</label>
              <input
                type="text"
                placeholder="Input name"
                className="border p-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                type="email"
                placeholder="Input email"
                className="border p-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Phone</label>
              <input
                type="text"
                placeholder="Input phone"
                className="border p-2 w-full rounded mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Loyalty</label>
              <select className="border p-2 w-full rounded mt-1">
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
              </select>
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
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Loyalty</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {customersData.map((cust) => (
              <tr
                key={cust.id}
                className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                {/* 🔥 ID (klik ke detail) */}
                <td className="p-3 font-semibold text-blue-500">
                  <Link to={`/customers/${cust.id}`}>
                    #{cust.id}
                  </Link>
                </td>

                {/* 🔥 NAME (klik ke detail juga) */}
                <td className="p-3">
                  <Link
                    to={`/customers/${cust.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {cust.name}
                  </Link>
                </td>

                <td className="p-3 text-gray-500">
                  {cust.email}
                </td>

                <td className="p-3">
                  {cust.phone}
                </td>

                {/* LOYALTY BADGE */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      cust.loyalty === "Gold"
                        ? "bg-yellow-100 text-yellow-700"
                        : cust.loyalty === "Silver"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {cust.loyalty}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
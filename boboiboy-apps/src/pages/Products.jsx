import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { productsData } from "../data/products";

export default function Products() {
  const [search, setSearch] = useState("");

  // 🔍 FILTER SEARCH
  const filteredProducts = productsData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* HEADER */}
      <PageHeader
        title="Products"
        breadcrumb={["Dashboard", "Product List"]}
      />

      {/* 🔍 SEARCH (UPDATED UI SESUAI GAMBAR) */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full 
            px-5 py-3 
            rounded-xl 
            bg-white dark:bg-gray-800
            shadow-md 
            border border-gray-100 dark:border-gray-700
            text-sm 
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-emerald-500
          "
        />
      </div>

      {/* TABLE */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-left">
          
          {/* HEADER */}
          <thead className="bg-emerald-600 text-white text-sm">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Category</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {filteredProducts.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                {/* NOMOR */}
                <td className="px-6 py-4 text-gray-500">
                  {index + 1}.
                </td>

                {/* NAME */}
                <td className="px-6 py-4">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-emerald-400 hover:text-emerald-500 font-medium"
                  >
                    {item.title}
                  </Link>
                </td>

                {/* CATEGORY */}
                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                  {item.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            Data tidak ditemukan
          </div>
        )}
      </div>
    </div>
  );
}
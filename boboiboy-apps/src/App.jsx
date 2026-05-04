import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"; // ✅ WAJIB

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";

// 🔥 LAZY LOAD (sesuai modul)
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const CustomerDetail = lazy(() => import("./pages/CustomerDetail"));
const Products = lazy(() => import("./pages/Products")); // ✅ TAMBAH
const ProductDetail = lazy(() => import("./pages/ProductDetail")); // ✅ TAMBAH
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <div
      id="app-container"
      className="bg-gray-100 dark:bg-gray-900 min-h-screen flex text-black dark:text-white"
    >
      <div id="layout-wrapper" className="flex flex-row flex-1">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div id="main-content" className="flex-1 p-4">

          <Header />

          {/* 🔥 SUSPENSE (WAJIB DI MODUL) */}
          <Suspense fallback={<div>Loading...</div>}>

            <Routes>

              {/* DASHBOARD */}
              <Route path="/" element={<Dashboard />} />

              {/* ORDERS */}
              <Route path="/orders" element={<Orders />} />

              {/* CUSTOMERS */}
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/:id" element={<CustomerDetail />} />

              {/* 🔥 PRODUCTS (TUGAS BARU) */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />

              {/* ERROR */}
              <Route 
                path="/error-400" 
                element={<ErrorPage code="400" description="Bad Request" />}
              />

              <Route 
                path="/error-401" 
                element={<ErrorPage code="401" description="Unauthorized" />}
              />

              <Route 
                path="/error-403" 
                element={<ErrorPage code="403" description="Forbidden" />}
              />

              {/* 404 */}
              <Route 
                path="*" 
                element={<ErrorPage code="404" description="Page Not Found" />}
              />

            </Routes>

          </Suspense>

        </div>
      </div>
    </div>
  );
}

export default App;
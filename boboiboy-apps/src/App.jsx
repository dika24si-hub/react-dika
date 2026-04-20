import { Routes, Route } from "react-router-dom";

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div
      id="app-container"
      className="bg-gray-100 dark:bg-gray-900 min-h-screen flex text-black dark:text-white"
    >
      {/* WRAPPER */}
      <div id="layout-wrapper" className="flex flex-row flex-1">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div id="main-content" className="flex-1 p-4">

          <Header />

          {/* ROUTES */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* 🔥 ERROR ROUTES */}
            <Route 
              path="/error-400" 
              element={
                <ErrorPage 
                  code="400"
                  description="Bad Request"
                  image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
                />
              } 
            />

            <Route 
              path="/error-401" 
              element={
                <ErrorPage 
                  code="401"
                  description="Unauthorized"
                  image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
                />
              } 
            />

            <Route 
              path="/error-403" 
              element={
                <ErrorPage 
                  code="403"
                  description="Forbidden"
                  image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
                />
              } 
            />

            {/* 🔥 404 (WAJIB PALING BAWAH) */}
            <Route 
              path="*" 
              element={
                <ErrorPage 
                  code="404"
                  description="Page Not Found"
                  image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
                />
              } 
            />

          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
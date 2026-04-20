import { Link } from "react-router-dom";

export default function ErrorPage({ code, description, image }) {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">

      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 max-w-lg w-full text-center">

        {/* IMAGE */}
        <img
          src={image}
          alt="error"
          className="w-48 mx-auto mb-6"
        />

        {/* CODE */}
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white">
          {code}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-3 text-lg">
          {description}
        </p>

        {/* SUB TEXT */}
        <p className="text-gray-400 text-sm mt-2">
          Something went wrong. Please try again or go back.
        </p>

        {/* BUTTON */}
        <Link
          to="/"
          className="inline-block mt-6 bg-hijau text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Back to Dashboard
        </Link>

      </div>

    </div>
  );
}
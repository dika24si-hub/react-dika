export default function PageHeader() {
    return (
        <div
            id="pageheader-container"
            className="flex items-center justify-between p-4"
        >
            {/* LEFT */}
            <div
                id="pageheader-left"
                className="flex flex-col"
            >
                <span
                    id="page-title"
                    className="text-3xl font-bold text-gray-800"
                >
                    Dashboard
                </span>

                <div
                    id="breadcrumb-links"
                    className="flex items-center text-sm font-medium space-x-2 mt-2 text-gray-500"
                >
                    <span id="breadcrumb-home">Home</span>

                    <span id="breadcrumb-separator">/</span>

                    <span id="breadcrumb-current">Home Detail</span>

                    <span id="breadcrumb-separator">/</span>

                    <span id="breadcrumb-current">Home Very Detail</span>
                </div>
            </div>

            {/* RIGHT */}
            <div id="action-button">
                <button
                    id="add-button"
                    className="bg-hijau text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition"
                >
                    Add Button
                </button>
            </div>
        </div>
    );
}
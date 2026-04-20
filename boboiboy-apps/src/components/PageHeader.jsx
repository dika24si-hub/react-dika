export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div className="flex items-center justify-between p-4">

            {/* LEFT */}
            <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-800 dark:text-white">
                    {title}
                </span>

                <div className="flex items-center text-sm font-medium space-x-2 mt-2 text-gray-500">
                    {Array.isArray(breadcrumb) ? (
                        breadcrumb.map((item, index) => (
                            <span key={index} className="flex items-center space-x-2">
                                <span>{item}</span>
                                {index !== breadcrumb.length - 1 && <span>/</span>}
                            </span>
                        ))
                    ) : (
                        <span>{breadcrumb}</span>
                    )}
                </div>
            </div>

            {/* RIGHT (DINAMIS) */}
            <div>
                {children}
            </div>

        </div>
    );
}
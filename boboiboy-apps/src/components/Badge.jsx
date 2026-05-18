function Badge({ children, type = "success" }) {

    const types = {
        success: "bg-green-100 text-green-700",
        primary: "bg-blue-100 text-blue-700",
        warning: "bg-yellow-200 text-yellow-700",
    };

    return (
        <span className={`${types[type]} px-3 py-1 rounded-full text-sm`}>
            {children}
        </span>
    );
}

export default Badge;
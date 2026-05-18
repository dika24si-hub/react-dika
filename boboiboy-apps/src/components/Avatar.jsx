function Avatar({ name }) {
    return (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-sm">
            {name.charAt(0)}
        </div>
    );
}

export default Avatar;
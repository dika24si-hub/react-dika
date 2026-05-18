export default function Footer() {

    return (
        <footer className="bg-[#071633] text-white py-5 mt-6 rounded-2xl">

            <div className="container mx-auto px-4 text-center">

                <h2 className="text-lg font-bold mb-2">
                    MyApp
                </h2>

                <p className="text-gray-400 text-sm mb-4">
                    Aplikasi sederhana berbasis React.
                </p>

                <div className="flex justify-center gap-5 mb-4 text-sm">

                    <a
                        href="#"
                        className="hover:text-gray-300 transition"
                    >
                        Home
                    </a>

                    <a
                        href="#"
                        className="hover:text-gray-300 transition"
                    >
                        Produk
                    </a>

                    <a
                        href="#"
                        className="hover:text-gray-300 transition"
                    >
                        Kontak
                    </a>

                </div>

                <p className="text-gray-500 text-xs">
                    © 2026 MyApp. All rights reserved.
                </p>

            </div>

        </footer>
    );
}
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";

export default function Components() {

    const headers = [
        "No",
        "Nama Produk",
        "Kategori",
        "Harga",
        "Aksi"
    ];

    const products = [
        {
            id: 1,
            name: "Laptop Asus",
            category: "Elektronik",
            price: "Rp 8.000.000"
        },
        {
            id: 2,
            name: "Sepatu Sport",
            category: "Fashion",
            price: "Rp 450.000"
        },
        {
            id: 3,
            name: "Jam Tangan",
            category: "Aksesoris",
            price: "Rp 799.000"
        }
    ];

    return (
        <div id="dashboard-container">

            <PageHeader
                title="Components"
                breadcrumb={["Dashboard", "Order List"]}
            >

                <Button type="success">
                    Add Button
                </Button>

            </PageHeader>

            <p className="mb-3 text-sm">
                Ini halaman Components
            </p>

            {/* BUTTON */}
            <div className="flex gap-2 mb-4">

                <Button type="primary">
                    Simpan
                </Button>

                <Button type="danger">
                    Hapus
                </Button>

                <Button type="secondary">
                    Edit
                </Button>

                <Button type="warning">
                    Cetak
                </Button>

            </div>

            {/* BADGE */}
            <div className="flex gap-2 mb-4">

                <Badge type="primary">
                    Berhasil!
                </Badge>

                <Badge type="success">
                    Berhasil!
                </Badge>

                <Badge type="warning">
                    Kurang
                </Badge>

            </div>

            {/* AVATAR */}
            <div className="flex gap-2 mb-5">

                <Avatar name="Budi" />

                <Avatar name="Siti" />

                <Avatar name="Dika" />

            </div>

            {/* CONTAINER */}
            <Container className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 mb-6">

                <h1 className="text-3xl font-bold mb-4 text-gray-900">
                    Daftar Produk
                </h1>

                <p className="text-gray-500">
                    Berikut adalah daftar produk terbaru.
                </p>

            </Container>

            {/* CARD */}
            <div className="mb-6">

                <Card>

                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Judul Card
                    </h2>

                    <p className="text-gray-500 text-sm">
                        Ini adalah isi dari card.
                    </p>

                </Card>

            </div>

            {/* PRODUCT CARD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

                <ProductCard
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                    title="Sepatu Sport"
                    category="Fashion"
                    price="Rp 450.000"
                    description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
                />

                <ProductCard
                    image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                    title="Smartphone"
                    category="Elektronik"
                    price="Rp 4.500.000"
                    description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
                />

            </div>

            {/* TABLE */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 mb-6">

                <Table headers={headers}>

                    {products.map((product, index) => (

                        <tr
                            key={product.id}
                            className="hover:bg-gray-50"
                        >

                            <td className="border px-4 py-3">
                                {index + 1}
                            </td>

                            <td className="border px-4 py-3">
                                {product.name}
                            </td>

                            <td className="border px-4 py-3">
                                {product.category}
                            </td>

                            <td className="border px-4 py-3">
                                {product.price}
                            </td>

                            <td className="border px-4 py-3">

                                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                                    Detail
                                </button>

                            </td>

                        </tr>

                    ))}

                </Table>

            </div>

            {/* FOOTER */}
            <Footer />

        </div>
    );
}
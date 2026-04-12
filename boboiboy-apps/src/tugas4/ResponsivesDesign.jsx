export default function ResponsiveText() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      
      {/* TEXT RESPONSIVE */}
      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4 text-gray-800">
        Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.<br />
        Coba hapus class yang menggunakan prefix breakpoint (md:xxx, lg:xxx, xl:xxx) dan lihat perbedaannya!
      </p>

      <ResponsiveWidth />
      <ResponsiveLayout />
    </div>
  );
}

function ResponsiveWidth() {
  return (
    <div className="mb-4">
      <p className="text-gray-800">
        Coba lakukan <strong>zoom in/zoom out</strong> atau ubah ukuran layar. Perhatikan bagaimana posisi kolom akan menyesuaikan secara responsif:<br /><br />
      </p>

      <p className="text-gray-800">
        <strong>md:w-1/2</strong> → Saat layar mencapai ukuran tablet (md: 768px) atau lebih besar, setiap kolom akan memiliki lebar 50%.
      </p>

      <p className="text-gray-800">
        <strong>md:flex-row</strong> pada div parent membuat dua kolom ini sejajar secara horizontal pada layar tablet ke atas,<br />
        sedangkan pada layar lebih kecil (mobile), kolom akan tersusun vertikal secara default (<code>flex-col</code>).
      </p>

      {/* FLEX RESPONSIVE */}
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="bg-red-400 w-full md:w-1/2 p-4 text-white font-bold">
          Kolom 1
        </div>
        <div className="bg-blue-400 w-full md:w-1/2 p-4 text-white font-bold">
          Kolom 2
        </div>
      </div>
    </div>
  );
}

function ResponsiveLayout() {
  return (
    <div>
      <p className="mt-4">
        Kotak-kotak di bawah ini menggunakan <strong>Grid Layout</strong> dari Tailwind CSS. Jumlah kolom akan menyesuaikan dengan ukuran layar:
      </p>

      <p className="text-gray-800">
        - <strong>grid-cols-1</strong> → Default (mobile) = 1 kolom <br />
        - <strong>sm:grid-cols-2</strong> → ≥640px = 2 kolom <br />
        - <strong>md:grid-cols-3</strong> → ≥768px = 3 kolom <br />
        - <strong>lg:grid-cols-4</strong> → ≥1024px = 4 kolom
      </p>

      {/* GRID RESPONSIVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-blue-500 p-4 text-white">Box 1</div>
        <div className="bg-blue-500 p-4 text-white">Box 2</div>
        <div className="bg-blue-500 p-4 text-white">Box 3</div>
        <div className="bg-blue-500 p-4 text-white">Box 4</div>
      </div>
    </div>
  );
}
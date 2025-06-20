// Buat koleksi wide_column (untuk model wide-column)
db.createCollection("wide_column")

// Masukkan 5 data ke koleksi wide_column
db.wide_column.insertMany([
  {
    nama: "Pantai Karampuang",
    lokasi: "Mamuju",
    kategori: "Pantai",
    rating: 4.5,
    fasilitas: {
      parkir: true,
      penginapan: true,
      restoran: false
    }
  },
  {
    nama: "Air Terjun Tamasapi",
    lokasi: "Mamuju",
    kategori: "Air Terjun",
    rating: 4.2,
    fasilitas: {
      parkir: true,
      penginapan: false,
      restoran: false
    }
  },
  {
    nama: "Pantai Dato",
    lokasi: "Majene",
    kategori: "Pantai",
    rating: 4.8,
    fasilitas: {
      parkir: true,
      penginapan: true,
      restoran: true
    }
  },
  {
    nama: "Museum Mandar",
    lokasi: "Polewali Mandar",
    kategori: "Budaya",
    rating: 4.0,
    fasilitas: {
      parkir: true,
      penginapan: false,
      restoran: true
    }
  },
  {
    nama: "Pulau Amambelu",
    lokasi: "Majene",
    kategori: "Pulau",
    rating: 4.6,
    fasilitas: {
      parkir: false,
      penginapan: true,
      restoran: false
    }
  }
])

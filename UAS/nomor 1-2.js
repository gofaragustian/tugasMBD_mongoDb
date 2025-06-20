// Gunakan atau buat database wisata_sulbar
use wisata_sulbar

// Buat koleksi key_value (untuk model key-value)
db.createCollection("key_value")

// Masukkan 5 data ke koleksi key_value
db.key_value.insertMany([
  { _id: "pantai_karampuang", value: "Wisata pantai di Pulau Karampuang, Mamuju" },
  { _id: "air_terjun_tamasapi", value: "Air terjun alami di daerah pegunungan Mamuju" },
  { _id: "pulau_amambelu", value: "Pulau indah di Majene, cocok untuk snorkeling" },
  { _id: "museum_mandar", value: "Museum budaya Mandar di Polewali Mandar" },
  { _id: "pantai_dato", value: "Pantai pasir putih yang terkenal di Majene" }
])

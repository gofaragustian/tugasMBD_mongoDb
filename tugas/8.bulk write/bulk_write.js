db.tempat_wisata.bulkWrite([
    // INSERT satu tempat wisata baru
    {
      insertOne: {
        document: {
          nama: "Bukit Aralle",
          lokasi: "Mamasa",
          kategori: "Bukit",
          hargaTiket: 6000,
          fasilitas: ["Pemandangan", "Tempat Foto"],
          rating: 4.2,
          buka: true
        }
      }
    },
  
    // UPDATE tempat wisata yang bernama Pantai Palippis
    {
      updateOne: {
        filter: { nama: "Pantai Palippis" },
        update: { $set: { hargaTiket: 15000 } }
      }
    },
  
    // DELETE tempat wisata dengan rating di bawah 4.0
    {
      deleteMany: {
        filter: { rating: { $lt: 4.0 } }
      }
    }
  ])
  
db.tempat_wisata.find({
    $and: [
      { kategori: "Pantai" },
      { lokasi: "Majene" }
    ]
  })
  
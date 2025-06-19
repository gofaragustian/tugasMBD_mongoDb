db.tempat_wisata.find({
    $nor: [
      { kategori: "Pantai" },
      { kategori: "Pulau" }
    ]
  })
  
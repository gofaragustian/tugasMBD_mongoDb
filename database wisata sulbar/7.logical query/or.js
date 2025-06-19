db.tempat_wisata.find({
    $or: [
      { lokasi: "Mamuju" },
      { rating: { $gt: 4.6 } }
    ]
  })
  
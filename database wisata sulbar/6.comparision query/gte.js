db.tempat_wisata.find({
    rating: { $gte: 4.2, $lte: 4.6 }
  })
  
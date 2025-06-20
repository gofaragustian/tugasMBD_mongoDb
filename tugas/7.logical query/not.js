db.tempat_wisata.find({
    rating: { $not: { $gt: 4.5 } }
  })
  
db.tempat_wisata.aggregate([
    { $match: { buka: true } },
    { $sort: { rating: -1 } },
    { $limit: 1 }
  ])
  
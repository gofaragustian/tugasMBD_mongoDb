db.tempat_wisata.aggregate([
    {
      $group: {
        _id: "$kategori",
        rataRating: { $avg: "$rating" }
      }
    }
  ])
  
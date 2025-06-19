db.tempat_wisata.aggregate([
    {
      $group: {
        _id: "$kategori",
        totalTiket: { $sum: "$hargaTiket" }
      }
    }
  ])
  
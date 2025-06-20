db.tempat_wisata.aggregate([
    {
      $group: {
        _id: "$lokasi",
        totalWisata: { $sum: 1 }
      }
    }
  ])
  
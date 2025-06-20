db.tempat_wisata.aggregate([
    { $unwind: "$fasilitas" },
    {
      $group: {
        _id: "$fasilitas",
        jumlah: { $sum: 1 }
      }
    },
    { $sort: { jumlah: -1 } }
  ])
  
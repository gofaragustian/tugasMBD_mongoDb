db.tempat_wisata.updateMany(
    { buka: true },
    { $set: { buka: false } }
  )
  
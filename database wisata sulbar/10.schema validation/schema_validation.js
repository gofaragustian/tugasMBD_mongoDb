db.createCollection("tempat_wisata", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["nama", "lokasi", "kategori", "hargaTiket"],
        properties: {
          nama: {
            bsonType: "string",
            description: "Harus berupa string dan wajib diisi"
          },
          lokasi: {
            bsonType: "string",
            description: "Harus berupa string dan wajib diisi"
          },
          kategori: {
            bsonType: "string",
            description: "Harus berupa string dan wajib diisi"
          },
          hargaTiket: {
            bsonType: ["int","double"],
            minimum: 0,
            description: "Harus berupa integer >= 0 dan wajib diisi"
          },
          fasilitas: {
            bsonType: ["array"],
            items: {
              bsonType: "string"
            },
            description: "Harus berupa array string"
          },
          rating: {
            bsonType:  ["double", "int"],
            minimum: 0.0,
            maximum: 5.0,
            description: "Rating antara 0.0 - 5.0"
          },
          buka: {
            bsonType: "bool",
            description: "Harus berupa boolean (true/false)"
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  })
  
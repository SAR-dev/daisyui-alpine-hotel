/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ibnkajdvsme52")

  collection.name = "customers"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_0ayvhnD` ON `customers` (`email`)",
    "CREATE UNIQUE INDEX `idx_3fBxZ3N` ON `customers` (`user_id`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ibnkajdvsme52")

  collection.name = "guests"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_0ayvhnD` ON `guests` (`email`)",
    "CREATE UNIQUE INDEX `idx_3fBxZ3N` ON `guests` (`user_id`)"
  ]

  return dao.saveCollection(collection)
})

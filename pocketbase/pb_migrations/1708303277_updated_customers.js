/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ibnkajdvsme52")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_0ayvhnD` ON `customers` (`email`)"
  ]

  // remove
  collection.schema.removeField("kaajzkyy")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5ibnkajdvsme52")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_0ayvhnD` ON `customers` (`email`)",
    "CREATE UNIQUE INDEX `idx_3fBxZ3N` ON `customers` (`user_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kaajzkyy",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})

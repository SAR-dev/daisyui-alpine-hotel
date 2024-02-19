/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pb5xvp6q7tb4qq3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wezvixwc",
    "name": "details",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pb5xvp6q7tb4qq3")

  // remove
  collection.schema.removeField("wezvixwc")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1sg61rqnlt3sv0f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u9vzinff",
    "name": "no_of_persons",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1sg61rqnlt3sv0f")

  // remove
  collection.schema.removeField("u9vzinff")

  return dao.saveCollection(collection)
})

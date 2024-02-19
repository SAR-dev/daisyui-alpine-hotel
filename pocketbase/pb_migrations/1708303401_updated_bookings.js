/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1sg61rqnlt3sv0f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxu3fikd",
    "name": "created_by",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "565xzusl0uaiqww",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "639xsjdt",
    "name": "completed_by",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "565xzusl0uaiqww",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1sg61rqnlt3sv0f")

  // remove
  collection.schema.removeField("rxu3fikd")

  // remove
  collection.schema.removeField("639xsjdt")

  return dao.saveCollection(collection)
})

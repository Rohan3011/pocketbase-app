/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2749riwu7wtvsr1")

  collection.name = "todos"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2749riwu7wtvsr1")

  collection.name = "Todos"

  return dao.saveCollection(collection)
})

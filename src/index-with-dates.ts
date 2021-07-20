import "reflect-metadata"

import {MikroORM} from "@mikro-orm/core"

import {FileWithDates} from "./entity/FileWithDates.js"

const orm = await MikroORM.init({
  type: "mysql",
  user: "root",
  password: process.env.DB_USER_PASSWORD || undefined,
  dbName: "test-mikro-orm-inheritance",
  entities: [FileWithDates],
  debug: true
})

console.log(orm)

await orm.close()

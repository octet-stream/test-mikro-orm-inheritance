import "reflect-metadata"

import {MikroORM} from "@mikro-orm/core"

import {File} from "./entity/File.js"

const orm = await MikroORM.init({
  type: "mysql",
  user: "root",
  password: "3xYTjqyY",
  dbName: "test-mikro-orm-inheritance",
  entities: [File],
  debug: true
})

console.log(orm)

await orm.close()

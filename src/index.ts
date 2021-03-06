import "reflect-metadata"

import {MikroORM} from "@mikro-orm/core"

import {File} from "./entity/File"

(async () => {
  const orm = await MikroORM.init({
    type: "mysql",
    user: "root",
    password: process.env.DB_USER_PASSWORD || undefined,
    dbName: "test-mikro-orm-inheritance",
    entities: [File],
    debug: true,
    tsNode: true
  })

  console.log(orm)

  await orm.close()
})()

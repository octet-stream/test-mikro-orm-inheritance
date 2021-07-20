import "reflect-metadata"

import {MikroORM} from "@mikro-orm/core"

import {FileWithDates} from "./entity/FileWithDates"
// import {BaseEntity} from "./entity/abstract/BaseEntity"
// import {BaseEntityWithDates} from "./entity/abstract/BaseEntityWithDates"

(async () => {
  const orm = await MikroORM.init({
    type: "mysql",
    user: "root",
    password: process.env.DB_USER_PASSWORD || undefined,
    dbName: "test-mikro-orm-inheritance",
    entities: [FileWithDates], // Add abstract classes (BaseEntity and BaseEntityWithDates) here to fix the issue
    debug: true,
    tsNode: true
  })

  console.log(orm)

  await orm.close()
})()

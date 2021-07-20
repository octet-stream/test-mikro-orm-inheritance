import "reflect-metadata"

import {MikroORM} from "@mikro-orm/core"
import {TsMorphMetadataProvider} from "@mikro-orm/reflection"

import {FileWithDates} from "./entity/FileWithDates"

(async () => {
  const orm = await MikroORM.init({
    type: "mysql",
    user: "root",
    password: process.env.DB_USER_PASSWORD || undefined,
    dbName: "test-mikro-orm-inheritance",
    metadataProvider: TsMorphMetadataProvider,
    entities: [FileWithDates],
    debug: true,
    tsNode: true
  })

  console.log(orm)

  await orm.close()
})()


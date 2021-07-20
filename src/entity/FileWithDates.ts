import {Entity, Property} from "@mikro-orm/core"

import {BaseEntityWithDates} from "./abstract/BaseEntityWithDates.js"

@Entity()
export class FileWithDates extends BaseEntityWithDates {
  @Property()
  key!: string

  @Property()
  name!: string

  @Property()
  hash!: string

  @Property()
  mime!: string
}

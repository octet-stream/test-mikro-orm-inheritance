import {Entity, Property} from "@mikro-orm/core"

import {BaseEntity} from "./abstract/BaseEntity"

@Entity()
export class File extends BaseEntity {
  @Property()
  key!: string

  @Property()
  name!: string

  @Property()
  hash!: string

  @Property()
  mime!: string
}

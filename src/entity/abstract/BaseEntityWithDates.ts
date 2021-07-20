import {Entity, Property} from "@mikro-orm/core"

import {BaseEntity} from "./BaseEntity"

@Entity({abstract: true})
export abstract class BaseEntityWithDates extends BaseEntity {
  @Property()
  createdAt: Date = new Date()

  @Property({onUpdate: () => new Date()})
  updatedAt: Date = new Date()
}

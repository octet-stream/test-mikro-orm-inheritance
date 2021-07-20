import {PrimaryKey} from "@mikro-orm/core"

export abstract class BaseEntity {
  @PrimaryKey({unsigned: true})
  id!: number
}
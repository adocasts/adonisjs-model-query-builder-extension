import { DateTime } from 'luxon'
import { column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Post from './Post'
import AppBaseModel from 'App/Models/AppBaseModel'

export default class Comment extends AppBaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public postId: number

  @column()
  public body: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>
}

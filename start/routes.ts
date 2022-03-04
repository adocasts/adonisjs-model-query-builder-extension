/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Post from 'App/Models/Post'
import Comment from 'App/Models/Comment'
import User from 'App/Models/User'

Route.get('register', 'AuthController.registerShow').as('auth.register.show')
Route.post('register', 'AuthController.register').as('auth.register')
Route.get('login', 'AuthController.loginShow').as('auth.login.show')
Route.post('login', 'AuthController.login').as('auth.login')
Route.get('logout', 'AuthController.logout').as('auth.logout')

Route.get('', 'PostsController.index').as('home')

Route.resource('posts', 'PostsController')
  .except(['index'])
  .middleware({
    create: ['auth'],
    store: ['auth'],
    edit: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })

Route.shallowResource('posts.comments', 'CommentsController')
  .only(['store', 'update', 'destroy'])
  .middleware({
    '*': ['auth']
  })

Route.get('example', async ({ response }) => {
  const posts = await Post.all()
  const comments = await Comment.all()
  const users = await User.all()

  return response.json({
    posts,
    comments,
    users
  })
})

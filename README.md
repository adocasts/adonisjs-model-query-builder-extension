# AdonisJS, Extending the Model Query Builder
______

This repository includes an example of how you can extend a Model's Query Builder.

In the lesson this repo compliments, we'll learn how to define a macro for the Model Query Builder within an AdonisJS project to provide a new method onto all our Model's Query Builder. We'll also add a custom method inspired by Laravel called "firstOr", which will allow us to define our own fallback value if a first query result cannot be found.

### Watch & Read Lesson Here
https://jagr.co/lessons/how-to-add-a-custom-method-to-the-model-query-builder-in-adonisjs

### Watch Lesson on YouTube
https://www.youtube.com/watch?v=uBJ1glwJ4Ok

------

You can find the query builder extensions at `/providers/QueryBuilderProvider.ts`.

It's type is defined at `/contracts/orm.ts`

An example usage is at `App/Controllers/Http/PostsController.ts`.

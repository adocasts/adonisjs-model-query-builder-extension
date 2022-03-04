import { ApplicationContract } from '@ioc:Adonis/Core/Application'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = this.app.container.resolveBinding('Adonis/Lucid/Database')
|   const Event = this.app.container.resolveBinding('Adonis/Core/Event')
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class QueryBuilderProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // All bindings are ready, feel free to use them
    const { ModelQueryBuilder } = this.app.container.resolveBinding('Adonis/Lucid/Database')

    ModelQueryBuilder.macro('getCount', async function() {
      const result = await this.count('* as total')
      return BigInt(result[0].$extras.total)
    })

    ModelQueryBuilder.macro('firstOr', async function<T>(orFunction: () => Promise<T>) {
      const result = await this.first()

      if (!result) {
        return orFunction()
      }

      return result
    })
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}

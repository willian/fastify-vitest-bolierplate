import Fastify from 'fastify'
import fp from 'fastify-plugin'
import { afterAll, beforeAll } from 'vitest'
import App from './src/app'

const app = Fastify()

beforeAll(async () => {
  void app.register(fp(App))
  await app.ready()
})

afterAll(() => {
  void app.close()
})

export { app }

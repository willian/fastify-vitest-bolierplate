import { FastifyPluginAsync } from 'fastify'

import sensible from './plugins/sensible'
import support from './plugins/support'

import example from './routes/example'
import root from './routes/root'

const app: FastifyPluginAsync = async (fastify): Promise<void> => {
  // Plygins
  fastify.register(sensible)
  fastify.register(support)

  // Routes
  fastify.register(root)
  fastify.register(example, { prefix: '/example' })
}

export default app
export { app }

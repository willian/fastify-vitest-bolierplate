import { FastifyPluginAsync } from 'fastify'

import sensible from './core/plugins/sensible'

import v1UserRoute from './modules/v1/user/user.route'

export const app: FastifyPluginAsync = async (fastify): Promise<void> => {
  // Plygins
  fastify.register(sensible)

  // Routes
  fastify.register(v1UserRoute, { prefix: '/v1/user' })
}

export default app

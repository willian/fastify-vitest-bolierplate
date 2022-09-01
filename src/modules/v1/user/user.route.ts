import { FastifyInstance } from 'fastify'

import { getUserHandler } from './user.controller'

async function userRoute(fastify: FastifyInstance): Promise<void> {
  fastify.get('/', getUserHandler)
}

export default userRoute

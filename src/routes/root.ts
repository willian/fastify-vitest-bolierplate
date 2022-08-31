import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async function (_request, reply) {
    reply.send({ root: true })
  })
}

export default root

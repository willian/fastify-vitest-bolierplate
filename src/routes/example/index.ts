import { FastifyPluginAsync } from 'fastify'

const example: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async function (_request, reply) {
    reply.send('this is an example')
  })
}

export default example

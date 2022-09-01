import { FastifyReply, FastifyRequest } from 'fastify'

export async function getUserHandler(_request: FastifyRequest, reply: FastifyReply) {
  reply.send({ user: true })
}

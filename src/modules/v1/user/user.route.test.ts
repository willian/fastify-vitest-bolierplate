import { expect, test } from 'vitest'
import { app } from '../../../../test.setup'

test('default root route', async () => {
  const res = await app.inject({
    url: '/v1/user'
  })
  expect(res.json()).toEqual({ user: true })
})

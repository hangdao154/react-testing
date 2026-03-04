import { rest } from 'msw'

const MOCKED_USERS = [
  {
    name: 'John Doe'
  },
  {
    name: 'Jane Doe'
  },
  {
    name: 'John Smith'
  }
];

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MOCKED_USERS));
  })
]
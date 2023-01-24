import { rest } from 'msw';

export const restHandlers = [
  rest.post(
    `${import.meta.env.VITE_REST_API_SERVER}/api-key`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          apiKeyId: 'apiKeyId',
          secret: 'secret',
        })
      );
    }
  ),
];

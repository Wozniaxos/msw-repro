import { graphql } from 'msw';

export const graphQLHandlers = [
  graphql.query('Watchlist', (req, res, ctx) => {
    console.log('querinasdas dasd asd asd asd asd asd asd asd asd asd g!!');
    return res(
      ctx.data({
        watchlist: [
          {
            __typename: 'WatchlistResponse',
            id: '1',
            symbol: 'SHIBUSD',
            venueAccount: 'Bitfinex',
            securityId: '1',
          },
          {
            __typename: 'WatchlistResponse',
            id: '2',
            symbol: 'SHIBUSD',
            venueAccount: 'BitMEX',
            securityId: '2',
          },
        ],
      })
    );
  }),
  // graphql.query('BidAskQuote', (req, res, ctx) => {
  //   const { venueAccount, symbol } = req.variables;

  //   return res(
  //     ctx.data({
  //       bidAskQuote: {
  //         symbol,
  //         venue: venueAccount,
  //         venueAccount,
  //         dateTime: '1032',
  //         bidPrice: 100,
  //         bidSize: 10,
  //         askPrice: 90,
  //         askSize: 9,
  //       },
  //     })
  //   );
  // }),
  // graphql.query('Ask', (req, res, ctx) => {
  //   const { venueAccount, symbol } = req.variables;

  //   return res(
  //     ctx.data({
  //       ask: {
  //         symbol,
  //         venue: venueAccount,
  //         venueAccount,
  //         dateTime: '1024',
  //         price: 100,
  //         size: 10,
  //       },
  //     })
  //   );
  // }),
  // graphql.query('Bid', (req, res, ctx) => {
  //   const { venueAccount, symbol } = req.variables;

  //   return res(
  //     ctx.data({
  //       bid: {
  //         symbol,
  //         venue: venueAccount,
  //         venueAccount,
  //         dateTime: '1024',
  //         price: 100,
  //         size: 10,
  //       },
  //     })
  //   );
  // }),
  // graphql.mutation('CreateWatchlistElement', (req, res, ctx) => {
  //   const { venueAccount, symbol, securityId } = req.variables;

  //   return res(
  //     ctx.data({
  //       createWatchlistElement: {
  //         id: '1',
  //         symbol,
  //         venueAccount,
  //         securityId,
  //       },
  //     })
  //   );
  // }),
  // graphql.mutation('DeleteWatchlistElement', (req, res, ctx) => {
  //   const { id } = req.variables;

  //   return res(
  //     ctx.data({
  //       deleteWatchlistElement: {
  //         id,
  //       },
  //     })
  //   );
  // }),
];

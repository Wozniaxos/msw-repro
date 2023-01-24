import { useWatchlistQuery } from '@project/generated/graphql';

function Watchlist() {
  const { data, loading } = useWatchlistQuery();

  console.log('data is', data);
  console.log('loading is', loading);

  return data ? <div>rendered</div> : <div/>;
}

export default Watchlist;

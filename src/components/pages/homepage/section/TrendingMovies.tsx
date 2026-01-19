import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTrendingMovies } from '../../../../service/movieService';
import { type Movie } from '../../../../interface/movieInterface';
export default function TrendingMovies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['trendingMovies'],
    queryFn: getTrendingMovies,
  });
  if (isLoading) return <p>Loading Trending Movies...</p>;
  if (isError) return <p>Error while fetching Trending Movies.</p>;
  return (
    <div>
      {' '}
      <h2 className='text-2xl font-bold pb-6'>Trending Now</h2>{' '}
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {' '}
        {data?.results.map((movie: Movie) => (
          <li key={movie.id} style={{ listStyle: 'none' }}>
            <Link to={`/movie/${movie.id}`}>
              {' '}
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />{' '}
              <p>{movie.title}</p>{' '}
            </Link>
          </li>
        ))}{' '}
      </ul>{' '}
    </div>
  );
}

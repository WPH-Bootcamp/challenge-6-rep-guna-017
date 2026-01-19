import { Link } from 'react-router-dom'; // src/components/PopularMovies.tsx

import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../../../../service/movieService';
import { type Movie } from '../../../../interface/movieInterface';

export default function PopularMovies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['popularMovies'],
    queryFn: getPopularMovies,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error while fetching popular movies.</p>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {data?.results.map((movie: Movie) => (
          <li key={movie.id} style={{ listStyle: 'none' }}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

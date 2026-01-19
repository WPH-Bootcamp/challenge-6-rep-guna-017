import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getNewReleaseMovies } from '../../../../service/movieService';
import { type Movie } from '../../../../interface/movieInterface';

export default function NewReleaseMovies() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['newReleaseMovies'],
    queryFn: getNewReleaseMovies,
  });
  if (isLoading) return <p>Loading New Releases...</p>;
  if (isError) return <p>Error while fetching New Releases.</p>;

  return (
    <div>
      {' '}
      <h2>New Release Movies</h2>{' '}
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

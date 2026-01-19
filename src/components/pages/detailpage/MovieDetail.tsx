import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetail } from '../../../service/movieService';
import { type Movie } from '../../../interface/movieInterface';

export default function MovieDetail() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['movieDetail', id],
    queryFn: () => getMovieDetail(Number(id)),
    enabled: !!id,
  });

  if (isLoading) return <p>Loading movie detail...</p>;
  if (isError) return <p>Error while fetching detail movie.</p>;

  const movie: Movie | undefined = data;

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
    </div>
  );
}

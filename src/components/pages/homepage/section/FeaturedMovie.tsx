import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '../../../../service/movieService';
import { type Movie } from '../../../../interface/movieInterface';

export default function FeaturedMovie() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['featuredMovie'],
    queryFn: getPopularMovies,
  });

  if (isLoading) return <p>Loading Featured Movie...</p>;
  if (isError) return <p>Error while fetching Featured Movie.</p>;

  // Randomly select a movie
  const movies = data?.results || [];
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }
  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie: Movie | undefined = movies[randomIndex];

  if (!movie) return <p>Movie not found.</p>;

  return (
    <section className='relative m-0 p-0 overflow-hidden'>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title || 'Movie Poster'}
        className='w-full h-auto object-cover'
      />
      <div className='absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 rounded'>
        <h1 className='text-2xl font-bold'>{movie.title}</h1>
        <p className='mt-2 text-sm text-[#A4A7AE]'>{movie.overview}</p>
      </div>
    </section>
  );
}

// `url(https://image.tmdb.org/t/p/original${movie.poster_path})`

{
  /* <section
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        color: 'white',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '16px',
        backgroundSize: 'cover',
        backgroundPosition: ' center top',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
      }}
    >
      <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '1rem' }}>
        <h2 className='text-2xl font-bold'>{movie.title}</h2>
        <p style={{ maxWidth: '600px' }}>{movie.overview}</p>
      </div>
    </section> */
}

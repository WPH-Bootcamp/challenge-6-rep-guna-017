import { api } from '../lib/api';
import {
  type PopularMoviesResponse,
  type Movie,
} from '../interface/movieInterface';

//Popular
export async function getPopularMovies(): Promise<PopularMoviesResponse> {
  const response = await api.get<PopularMoviesResponse>('/movie/popular');
  return response.data;
}

//New Release
export async function getNewReleaseMovies(): Promise<PopularMoviesResponse> {
  const response = await api.get<PopularMoviesResponse>('/movie/now_playing');
  return response.data;
}

//Trending
export async function getTrendingMovies(): Promise<PopularMoviesResponse> {
  const response = await api.get<PopularMoviesResponse>('/trending/movie/day');
  return response.data;
}

//Detail
export async function getMovieDetail(id: number): Promise<Movie> {
  const response = await api.get<Movie>(`/movie/${id}`);
  return response.data;
}

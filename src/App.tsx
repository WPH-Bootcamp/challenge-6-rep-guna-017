import { Routes, Route } from 'react-router-dom';

import Navbar from './components/partial/navbar';
// import PopularMovies from './components/pages/homepage/PopularMovies';
import FeaturedMovie from './components/pages/homepage/section/FeaturedMovie';
import NewReleaseMovies from './components/pages/homepage/section/NewReleaseMovies';
import TrendingMovies from './components/pages/homepage/section/TrendingMovies';
import MovieDetail from './components/pages/detailpage/MovieDetail';
import Footer from './components/partial/footer';

function App() {
  return (
    <>
      <div className='bg-black text-white'>
        {' '}
        <Navbar />{' '}
        <Routes>
          {' '}
          <Route
            path='/'
            element={
              <>
                {' '}
                <FeaturedMovie /> {/*<PopularMovies />*/} <TrendingMovies />{' '}
                <NewReleaseMovies />{' '}
              </>
            }
          />{' '}
          {/* <Route path='/popular' element={<PopularMovies />} />{' '} */}
          <Route path='/new-release' element={<NewReleaseMovies />} />{' '}
          <Route path='/trending' element={<TrendingMovies />} />{' '}
          <Route path='/movie/:id' element={<MovieDetail />} />{' '}
        </Routes>{' '}
        <Footer />
      </div>
    </>
  );
}

export default App;

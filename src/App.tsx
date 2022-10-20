import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { FavouritesPages } from './pages/FavouritePages';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
          <Navigation/>
    <Routes>
        <Route path='/github_favorite_repos/' element={<HomePage />} />
      <Route path='/favourites' element={<FavouritesPages />} />
    </Routes>
    </>

  );
}

export default App;

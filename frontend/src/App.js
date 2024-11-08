import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PokemonList = lazy(() => import('./components/PokemonList'));
const PokemonDetail = lazy(() => import('./components/PokemonDetail'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
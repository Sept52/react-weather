import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Header from './shared/Header/Header';
import './App.css';

function App() {
  return (
    <Suspense fallback={'...'}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;

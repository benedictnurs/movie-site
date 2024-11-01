// AnimatedMovieSearch.jsx
'use client';

import { useState } from 'react';
import SearchBar from '../components/ui/SearchBar';

// Mock movie data (unchanged)
const movies = [
  { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi' },
  { id: 2, title: 'The Shawshank Redemption', year: 1994, genre: 'Drama' },
  // ... other movies
];

export default function AnimatedMovieSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MovieFlix</h1>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-gray-600">{movie.year}</p>
              <p className="text-blue-500">{movie.genre}</p>
            </div>
          ))}
        </div>
        {filteredMovies.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No movies found matching your search.
          </p>
        )}
      </main>
    </div>
  );
}

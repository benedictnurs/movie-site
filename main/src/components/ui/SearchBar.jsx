// SearchBar.jsx
import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className="relative">
      <div
        className={`flex items-center transition-all duration-300 ease-in-out ${
          isSearchOpen ? 'w-64' : 'w-8'
        }`}
      >
        {!isSearchOpen && (
          <button
            onClick={() => setIsSearchOpen(true)}
            className="z-10 focus:outline-none"
            aria-label="Open search"
          >
            <Search size={24} />
          </button>
        )}
        {isSearchOpen && (
          <button
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
            className="absolute left-2 z-10 text-gray-600 focus:outline-gray"
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search movies..."
          className={`w-full pl-8 ml-2 pr-2 p-2 rounded text-black transition-all duration-300 ease-in-out focus:outline-none ${
            isSearchOpen ? 'opacity-100' : 'opacity-0'
          }`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

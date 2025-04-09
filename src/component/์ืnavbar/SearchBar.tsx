import React from 'react';

type SearchBarProps = {
  onSearch?: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="flex items-center max-w-md mx-auto mt-10">
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          🔍
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

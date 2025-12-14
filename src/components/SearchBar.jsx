function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by course or category..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="
        w-full 
        p-3 
        mb-6 
        border 
        rounded-lg 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500
      "
    />
  );
}

export default SearchBar;

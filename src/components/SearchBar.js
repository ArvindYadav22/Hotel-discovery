function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar-wrapper">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by hotel name or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

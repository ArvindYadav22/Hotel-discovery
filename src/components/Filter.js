function Filter({ sortOrder, setSortOrder, minRating, setMinRating, priceRange, setPriceRange, onReset }) {
  return (
    <div className="filter-bar">
      <label>Sort:</label>
      <button
        className={`filter-btn ${sortOrder === "low-high" ? "active" : ""}`}
        onClick={() => setSortOrder(sortOrder === "low-high" ? "" : "low-high")}
      >
        Price: Low → High
      </button>
      <button
        className={`filter-btn ${sortOrder === "high-low" ? "active" : ""}`}
        onClick={() => setSortOrder(sortOrder === "high-low" ? "" : "high-low")}
      >
        Price: High → Low
      </button>

      <label>Rating:</label>
      <select
        className="filter-select"
        value={minRating}
        onChange={(e) => setMinRating(Number(e.target.value))}
      >
        <option value={0}>All Ratings</option>
        <option value={3}>3+ Stars</option>
        <option value={3.5}>3.5+ Stars</option>
        <option value={4}>4+ Stars</option>
        <option value={4.5}>4.5+ Stars</option>
      </select>

      <label>Price:</label>
      <select
        className="filter-select"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <option value="all">All Prices</option>
        <option value="0-1500">Under ₹1,500</option>
        <option value="1500-3000">₹1,500 – ₹3,000</option>
        <option value="3000-5000">₹3,000 – ₹5,000</option>
        <option value="5000-8000">₹5,000 – ₹8,000</option>
        <option value="8000-100000">₹8,000+</option>
      </select>

      <button className="reset-btn" onClick={onReset}>
        ✕ Reset
      </button>
    </div>
  );
}

export default Filter;

import { useState, useMemo } from "react";
import hotelsData from "../data/hotels";
import HotelCard from "../components/HotelCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

function Home() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [priceRange, setPriceRange] = useState("all");

  const filteredHotels = useMemo(() => {
    let result = [...hotelsData];

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(query) ||
          hotel.city.toLowerCase().includes(query)
      );
    }

    if (minRating > 0) {
      result = result.filter((hotel) => hotel.rating >= minRating);
    }

    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter((hotel) => hotel.price >= min && hotel.price <= max);
    }

    if (sortOrder === "low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, sortOrder, minRating, priceRange]);

  const handleReset = () => {
    setSearch("");
    setSortOrder("");
    setMinRating(0);
    setPriceRange("all");
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h2>Find Your Perfect Stay</h2>
        <p>Explore {hotelsData.length} handpicked hotels across India</p>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <Filter
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        minRating={minRating}
        setMinRating={setMinRating}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        onReset={handleReset}
      />

      <p className="results-count">
        Showing {filteredHotels.length} of {hotelsData.length} hotels
      </p>

      {filteredHotels.length === 0 ? (
        <div className="no-results">
          <h3>No hotels found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="hotel-grid">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

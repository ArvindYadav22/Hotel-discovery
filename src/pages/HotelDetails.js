import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import hotels from "../data/hotels";

const amenityIcons = {
  "Free WiFi": "📶",
  "AC": "❄️",
  "Swimming Pool": "🏊",
  "Pool": "🏊",
  "Private Pool": "🏊",
  "Breakfast": "🍳",
  "Spa": "💆",
  "Ayurvedic Spa": "💆",
  "Restaurant": "🍽️",
  "Gym": "🏋️",
  "Parking": "🅿️",
  "Beach Access": "🏖️",
  "Beach": "🏖️",
  "Bar": "🍸",
  "Rooftop Bar": "🍸",
  "Rooftop": "🌇",
  "Rooftop Cafe": "☕",
  "Rooftop Restaurant": "🍽️",
  "Lake View": "🏞️",
  "River View": "🏞️",
  "Mountain View": "🏔️",
  "Valley View": "🏞️",
  "Sea View": "🌊",
  "Beach View": "🌊",
  "Harbour View": "⚓",
  "Ghat View": "🏛️",
  "Ganga View": "🏛️",
  "Fort View": "🏰",
  "Palace View": "🏰",
  "Taj View": "🕌",
  "Temple View": "🛕",
  "Fireplace": "🔥",
  "Heating": "🔥",
  "Trekking": "🥾",
  "Trekking Guide": "🥾",
  "Guided Treks": "🥾",
  "Guided Tours": "🗺️",
  "Heritage Walk": "🚶",
  "Heritage Tour": "🚶",
  "Heritage": "🏛️",
  "Cultural Show": "🎭",
  "Cultural Tours": "🎭",
  "Cultural Workshop": "🎨",
  "Walking Tour": "🚶",
  "Nature Trail": "🌿",
  "Nature Walk": "🌿",
  "Garden": "🌺",
  "Bonfire": "🔥",
  "Camel Safari": "🐪",
  "Safari": "🦁",
  "Safari Booking": "🦁",
  "Scuba Diving": "🤿",
  "Snorkeling": "🤿",
  "Kayaking": "🛶",
  "Cycling": "🚴",
  "Bicycle": "🚴",
  "Hiking": "🥾",
  "Rafting": "🛶",
  "Camping": "⛺",
  "Yoga": "🧘",
  "Meditation": "🧘",
  "Meals Included": "🍽️",
  "Organic Meals": "🥗",
  "Vegetarian Meals": "🥗",
  "Private Chef": "👨‍🍳",
  "Sundeck": "☀️",
  "Backwater Cruise": "🚤",
  "Boat Ride": "🚤",
  "Shikara Ride": "🚤",
  "Dolphin Trip": "🐬",
  "Tea Tasting": "🍵",
  "Wine Tasting": "🍷",
  "Live Music": "🎵",
  "Brewery": "🍺",
  "Business Center": "💼",
  "Co-working": "💻",
  "Shuttle": "🚐",
  "Airport Shuttle": "✈️",
  "Temple Shuttle": "🛕",
  "24h Reception": "🏪",
  "Shared Kitchen": "🍳",
  "Lounge": "🛋️",
  "Bird Watching": "🦜",
  "Estate Tour": "🌿",
  "Farm Tour": "🌾",
  "Food Walk": "🍴",
  "Ski Access": "⛷️",
  "Ski Equipment": "⛷️",
  "Oxygen Support": "🫁",
  "Art Gallery": "🖼️",
  "Toddy Tasting": "🥥",
  "Village Tour": "🏘️",
  "Eco-Friendly": "♻️",
  "Gondola": "🚡",
};

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [toast, setToast] = useState(false);

  const hotel = hotels.find((h) => h.id === parseInt(id));

  const handleBookNow = () => {
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  if (!hotel) {
    return (
      <div className="details-page">
        <div className="not-found">
          <h2>Hotel not found</h2>
          <p>The hotel you're looking for doesn't exist.</p>
          <button className="back-button" onClick={() => navigate("/")}>
            ← Back to Hotels
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="details-page">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Hotels
      </button>

      <img
        src={hotel.image}
        alt={hotel.name}
        className="details-hero-image"
      />

      <div className="details-content">
        <div className="details-header">
          <h1>{hotel.name}</h1>
          <div className="details-price-tag">
            ₹{hotel.price.toLocaleString("en-IN")}
            <span>/night</span>
          </div>
        </div>

        <div className="details-meta">
          <div className="details-location">📍 {hotel.city}</div>
          <div className="details-rating">⭐ {hotel.rating} / 5</div>
        </div>

        <p className="details-description">{hotel.description}</p>

        <div className="amenities-section">
          <h3>Amenities</h3>
          <div className="amenities-grid">
            {hotel.amenities.map((amenity, index) => (
              <div className="amenity-tag" key={index}>
                <span className="amenity-icon">
                  {amenityIcons[amenity] || "✅"}
                </span>
                {amenity}
              </div>
            ))}
          </div>
        </div>

        <button
          className="book-now-btn"
          onClick={handleBookNow}
        >
          🎉 Book Now
        </button>
      </div>

      {toast && (
        <div className="toast-overlay">
          <div className="toast">
            <span className="toast-icon">✅</span>
            <div>
              <strong>Hotel Booked Successfully!</strong>
              <p>{hotel.name} — ₹{hotel.price.toLocaleString("en-IN")}/night</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HotelDetails;

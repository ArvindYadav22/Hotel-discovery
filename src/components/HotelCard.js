import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <Link to={`/hotel/${hotel.id}`}>
      <div className="hotel-card">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="hotel-card-image"
          loading="lazy"
        />
        <div className="hotel-card-body">
          <h3>{hotel.name}</h3>
          <div className="hotel-card-location">
            📍 {hotel.city}
          </div>
          <div className="hotel-card-footer">
            <div className="hotel-card-rating">
              ⭐ {hotel.rating}
            </div>
            <div className="hotel-card-price">
              ₹{hotel.price.toLocaleString("en-IN")}
              <span>/night</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard;

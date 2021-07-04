import './styles.css';
import { Hotel } from '../../type/Hotel';
import { FC } from 'react';

interface HotelCardProps {
  hotel: Hotel
}

const HotelCard: FC<HotelCardProps> = ({ hotel }): JSX.Element => {
  return (
    <div className="HotelCard">
      <img
        src={hotel.imageURL}/>
      <p>{hotel.name}</p>
      <p>{hotel.location}</p>
      <p>{hotel.rating}</p>
      <p>{hotel.roomSize.adults}</p>
      <p>{hotel.date}</p>
      <p>{hotel.departing}</p>
      <p>{hotel.length}</p>
      <button
        className="book-now">
        Book Now <br/>
        { hotel.price }
      </button>
    </div>
  );
}
export default HotelCard;

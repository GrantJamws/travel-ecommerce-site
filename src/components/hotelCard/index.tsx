import './styles.css';
import { Hotel } from '../../type/Hotel';
import { FC, useState } from 'react';
import { ExpandMore, ChevronRight, Star } from '@material-ui/icons';

interface HotelCardProps {
  hotel: Hotel
}

const HotelCard: FC<HotelCardProps> = ({ hotel }): JSX.Element => {
  const [showOverview, setShowOverview] = useState(false);

  const showOverviewClick = () => {
    setShowOverview((prevState) => !prevState);
  }

  const roomSizeText = (): JSX.Element => {
    let adultJSX;
    let childrenJSX;
    let infantsJSX;
    if(hotel.roomSize.adults){
      adultJSX = <span><span className="key-stat">{ hotel.roomSize.adults }</span> {hotel.roomSize.adults > 1 ? "Adults" : "Adult"}</span>;
    }
    
    if(hotel.roomSize.children){
      childrenJSX = <span><span className="key-stat">{ hotel.roomSize.children }</span> {hotel.roomSize.children > 1 ? "children" : "child"}</span>;
    }
    if(hotel.roomSize.infants){
      infantsJSX = <span><span className="key-stat">{ hotel.roomSize.infants }</span> {hotel.roomSize.infants > 1 ? "infants" : "infant"}</span>;
    }
    return (
      <p>
        {adultJSX}
        {childrenJSX && ", "}
        {childrenJSX}
        {infantsJSX && " & "}
        {infantsJSX}
      </p>
    );
  }
  
  return (
    <div className="hotel-card">
      <img
        className="hotel-image"
        src={hotel.imageURL}
        alt={hotel.name}/>
      <div
        className="hotel-info">
        <p className="name">{hotel.name}</p>
        <p className="location">{hotel.location}</p>
        <div className="rating">
          {[...Array(hotel.rating)].map((_, index) => <Star key={index}/>)}
        </div>
        {roomSizeText()}
        <p><span className="key-stat">{hotel.date}</span> for <span className="key-stat">{hotel.length}</span></p>
        <p>departing from <span className="key-stat">{hotel.departing}</span></p>
        <button
          className="book-now">
          <span className="text">Book Now</span>
          <span className="price">{ new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(hotel.price) }</span>
        </button>
      </div>
      <button
        className="show-overview"
        onClick={showOverviewClick}>
        {
          showOverview ? <span><span className="bold">Read less</span> about this hotel <ExpandMore/></span> : <span><span className="bold">Read more</span> about this hotel <ChevronRight/></span>
        }
      </button>
      {
        showOverview &&
          <div
            className="overview">
            <p className="title">Overview</p>
            <p className="text">{hotel.overview}</p>
          </div>
      }
    </div>
  );
}
export default HotelCard;

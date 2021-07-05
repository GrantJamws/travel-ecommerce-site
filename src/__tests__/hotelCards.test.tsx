import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Hotel } from '../type/Hotel';
import HotelCard from '../components/hotelCard';

const hotelData: Hotel = {
  id: 1,
  name: "Iberostar Grand Salome",
  location: "Costa Adeje, Tenerife",
  rating: 5,
  roomSize: {
      adults: 2,
      children: 2,
      infants: 1
  },
  date: "3rd July 2019",
  length: 7,
  departing: "East Midlands",
  price: 1136.50,
  overview: "The Iberostar Grand Salome has an exceptional location in the south of Tenerife, overlooking the Atlantic Oceon. It is situated between the Golf del Sur and the Amarillo Golf courses, and is an ideal hotel for families, couples and groups who are looking for a holiday full of sport, sun and sea.",
  imageURL: "./assets/hotel-image-1.png"
}

describe('Hotel Card component', () => {

  test('renders the hotel card correctly', () => {
    render(<HotelCard hotel={hotelData}/>);
    const name = screen.getByText(hotelData.name);
    expect(name).toBeInTheDocument();
    const location = screen.getByText(hotelData.location);
    expect(location).toBeInTheDocument();
    const date = screen.getByText(hotelData.date);
    expect(date).toBeInTheDocument();
    const departing = screen.getByText(hotelData.date);
    expect(departing).toBeInTheDocument();
  });

  test('renders the hotel card overview correctly', () => {
    render(<HotelCard hotel={hotelData}/>);
    const hotel = screen.getByTitle(hotelData.name);
    const readMore = hotel.getElementsByClassName("show-overview")[0];
    expect(readMore).toBeInTheDocument();
    if(readMore){
      userEvent.click(readMore);
      const title = screen.getByText("Overview");
      expect(title).toBeInTheDocument();
      const text = screen.getByText(hotelData.overview);
      expect(text).toBeInTheDocument();
    }
  });

  test('renders the hotel card rating correctly', () => {
    render(<HotelCard hotel={hotelData}/>);
    const hotel = screen.getByTitle(hotelData.name);
    const rating = hotel.getElementsByClassName("rating")[0];
    if(rating){
      expect(rating.children.length).toBe(5);
    }
  });

  test('renders the hotel card room size correctly', () => {
    render(<HotelCard hotel={hotelData}/>);
    const hotel = screen.getByTitle(hotelData.name);
    const roomSize = hotel.getElementsByClassName("room-size")[0];
    expect(hotel).toBeInTheDocument();
    if(roomSize){
      expect(roomSize.children.length).toBe(3);
      expect(roomSize.innerHTML).toEqual('<span><span class="key-stat">2</span> Adults</span>, <span><span class="key-stat">2</span> children</span> &amp; <span><span class="key-stat">1</span> infant</span>');
    }
  });

})

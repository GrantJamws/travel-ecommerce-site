import React from 'react';
import './App.css';

import Filters from './components/filters';
import HotelCard from './components/hotelCard';
import { HOTELDATA } from './data/hotelData';
import { Filter } from './type/Filter';
import { Hotel } from './type/Hotel';

function App() {
  const hotelData: Hotel[] = HOTELDATA;
  const filters: Filter[] = [
    {
      name: "sort alphabetically",
      selected: true
    },
    {
      name: "sort by price"
    },
    {
      name: "sort by star rating"
    }
  ];

  return (
    <div className="App">
      <div className="background-image"/>
      <Filters
        filters={filters}/>
      <div
        className="hotel-cards-container">
        { hotelData.map((hotel: Hotel, index: number) => <HotelCard key={index} hotel={hotel}/>) }
      </div>
    </div>
  );
}

export default App;

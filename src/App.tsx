import React from 'react';
import './App.css';

import Filters from './components/filters';
import HotelCard from './components/hotelCard';
import { HOTELDATA } from './data/hotelData';
import { Hotel } from './type/Hotel';

function App() {
  const hotelData: Hotel[] = HOTELDATA;

  return (
    <div className="App">
      <h1>Weclome to On the Beach</h1>
      <Filters/>
      { hotelData.map((hotel: Hotel, index: number) => <HotelCard key={index} hotel={hotel}/>) }
    </div>
  );
}

export default App;

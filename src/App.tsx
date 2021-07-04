import React from 'react';
import './App.css';

import { SortByAlpha, Star } from '@material-ui/icons';
import { AiFillPoundCircle } from "react-icons/ai";

import Filters from './components/filters';
import HotelCard from './components/hotelCard';
import { HOTELDATA } from './data/hotelData';
import { Filter } from './type/Filter';
import { Hotel } from './type/Hotel';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [hotelData, setHotelData] = useState<Hotel[] | undefined>();
  const [filters, setFilters] = useState<Filter[]>(
    [
      {
        name: "alphabetically",
        text: "sort",
        value: "name",
        icon: <SortByAlpha/>
      },
      {
        name: "price",
        text: "sort by",
        value: "price",
        icon: <AiFillPoundCircle/>,
        selected: true
      },
      {
        name: "star rating",
        text: "sort by",
        value: "rating",
        icon: <Star/>,
      }
    ]
  );

  const onFilterClick = (filter: string) => {
    setFilters((prevState) => prevState.map(value => {
      value.selected = value.value === filter ? true : false;
      return value;
    }));
    setHotelData((prevState) => {
      if(prevState){
        return sortHotelDataBy(prevState, filter);
      }
    });
  }

  const sortHotelDataBy = (hotelData: Hotel[], filter?: string) => {
    switch(filter){
      case "name": {
        hotelData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      }
      case "price": {
        hotelData.sort((a, b) => a.price - b.price);
        break;
      }
      case "rating": {
        hotelData.sort((a, b) => b.rating - a.rating);
        break;
      }
      default: {
        hotelData.sort((a, b) => a.price - b.price);
        break;
      }
    }

    return hotelData;
  }

  useEffect(() => {
    setHotelData(sortHotelDataBy(HOTELDATA));
  }, []);

  return (
    <div className="App">
      <div className="background-image"/>
      <Filters
        onClick={onFilterClick}
        filters={filters}/>
      <div
        className="hotel-cards-container">
        { hotelData?.map((hotel: Hotel, index: number) => <HotelCard key={index} hotel={hotel}/>) }
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('main app component', () => {

  test('renders the three hotels', () => {
    render(<App />);
    const hotel1 = screen.getByTitle("Las Piramides Resort");
    expect(hotel1).toBeInTheDocument();
    
    const hotel2 = screen.getByTitle("Aguamarina Golf Hotel");
    expect(hotel2).toBeInTheDocument();
    
    const hotel3 = screen.getByTitle("Iberostar Grand Salome");
    expect(hotel3).toBeInTheDocument();
  });

  test('renders the three filters', () => {
    render(<App />);
    const filter1 = screen.getByTitle("alphabetically");
    expect(filter1).toBeInTheDocument();
    
    const filter2 = screen.getByTitle("price");
    expect(filter2).toBeInTheDocument();
    
    const filter3 = screen.getByTitle("star rating");
    expect(filter3).toBeInTheDocument();
  });

  test('no overviews are rendered', () => {
    render(<App />);
    const overview = screen.queryByText("overview");
    expect(overview).not.toBeInTheDocument();
  });

  test('sort by price is selected', () => {
    render(<App />);
    const price = screen.queryByTitle("price");
    expect(price).toBeInTheDocument();
    expect(price).toHaveClass('selected');
  });

  test('sort by star rating is selected after click', () => {
    render(<App />);
    const starRating = screen.queryByTitle("star rating");
    expect(starRating).toBeInTheDocument();
    if(starRating){
      userEvent.click(starRating);
      expect(starRating).toHaveClass('selected');
    }
  });

  test('sort by is changed to alphabetically and back to price ', () => {
    render(<App />);
    const alphabetically = screen.queryByTitle("alphabetically");
    expect(alphabetically).toBeInTheDocument();
    const price = screen.queryByTitle("price");
    expect(price).toBeInTheDocument();

    if(alphabetically){
      userEvent.click(alphabetically);
      expect(alphabetically).toHaveClass('selected');
      expect(price).not.toHaveClass('selected');
    }
    
    if(price){
      userEvent.click(price);
      expect(price).toHaveClass('selected');
      expect(alphabetically).not.toHaveClass('selected');
    }
  });

  test('overview is displayed on click', () => {
    render(<App />);
    const hotel1 = screen.getByTitle("Las Piramides Resort");
    const readMore = hotel1.getElementsByClassName("show-overview")[0];
    expect(readMore).toBeInTheDocument();
    if(readMore){
      userEvent.click(readMore);
      const overview = screen.queryByText("Overview");
      expect(overview).toBeInTheDocument();
    }
  });

})

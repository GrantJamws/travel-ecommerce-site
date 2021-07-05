import React from 'react';
import { render, screen } from '@testing-library/react';
import Filters from '../components/filters';
import userEvent from '@testing-library/user-event';
import { Filter as FilterType } from '../type/Filter';
import { SortByAlpha, Star } from '@material-ui/icons';

const onFilterClick = jest.fn();

const filters: FilterType[] = [
  {
    name: "alphabetically",
    text: "sort",
    value: "name",
    icon: <SortByAlpha/>
  },
  {
    name: "star rating",
    text: "sort by",
    value: "rating",
    icon: <Star/>,
    selected: true
  }
];

describe('filters component', () => {

  test('renders the filters correctly', () => {
    render(<Filters onClick={onFilterClick} filters={filters}/>);
    
    const name1 = screen.getByText(filters[0].name);
    expect(name1).toBeInTheDocument();
    const text1 = screen.getByText(filters[0].text);
    expect(text1).toBeInTheDocument();

    const name2 = screen.getByText(filters[1].name);
    expect(name2).toBeInTheDocument();
    const text2 = screen.getByText(filters[1].text);
    expect(text2).toBeInTheDocument();

    const filter = screen.getByTitle(filters[1].name);
    expect(filter).toBeInTheDocument();
    expect(filter).toHaveClass('selected');
  });

  test('filter on click return', () => {
    render(<Filters onClick={onFilterClick} filters={filters}/>);
    const filter = screen.getByTitle(filters[0].name);
    expect(filter).toBeInTheDocument();
    if(filter){
      userEvent.click(filter);
      expect(onFilterClick).toHaveBeenCalledTimes(1);
    }
  });

})

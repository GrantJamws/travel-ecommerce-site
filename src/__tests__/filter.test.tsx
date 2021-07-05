import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from '../components/filters/filter';
import userEvent from '@testing-library/user-event';
import { Filter as FilterType } from '../type/Filter';
import { SortByAlpha } from '@material-ui/icons';

const onFilterClick = jest.fn();

const filter: FilterType = {
  name: "alphabetically",
  text: "sort",
  value: "name",
  icon: <SortByAlpha/>
}

const selectedFilter: FilterType = {
  name: "alphabetically",
  text: "sort",
  value: "name",
  icon: <SortByAlpha/>,
  selected: true
}

describe('filter component', () => {

  test('renders the filter correctly', () => {
    render(<Filter onClick={onFilterClick} filter={filter}/>);
    const name = screen.getByText(filter.name);
    expect(name).toBeInTheDocument();
    const text = screen.getByText(filter.text);
    expect(text).toBeInTheDocument();
  });

  test('renders the selected filter correctly', () => {
    render(<Filter onClick={onFilterClick} filter={selectedFilter}/>);
    const filter = screen.getByTitle(selectedFilter.name);
    expect(filter).toBeInTheDocument();
    expect(filter).toHaveClass('selected');
  });

  test('filter on click return', () => {
    render(<Filter onClick={onFilterClick} filter={selectedFilter}/>);
    const filter = screen.getByTitle(selectedFilter.name);
    expect(filter).toBeInTheDocument();
    if(filter){
      userEvent.click(filter);
      expect(onFilterClick).toHaveBeenCalledTimes(1);
    }
  });

})

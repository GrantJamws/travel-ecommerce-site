import './styles.css';
import { FC } from 'react';
import { Filter as FilterType } from '../../../type/Filter';

interface FilterProps {
  filter: FilterType;
}

const Filter: FC<FilterProps> = ({ filter }): JSX.Element => {
  return (
    <div className={ filter.selected ? "Filter selected" : "Filter"}>
      <h1>{filter.name}</h1>
    </div>
  );
}

export default Filter;

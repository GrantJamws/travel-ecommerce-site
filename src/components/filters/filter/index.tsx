import './styles.css';
import { FC } from 'react';
import { Filter as FilterType } from '../../../type/Filter';
import { SortByAlpha } from '@material-ui/icons';

interface FilterProps {
  filter: FilterType;
}

const Filter: FC<FilterProps> = ({ filter }): JSX.Element => {
  return (
    <div className={ filter.selected ? "Filter selected" : "Filter"}>
      <p className="name">{filter.name}</p>
      <SortByAlpha
        className="icon"/>
    </div>
  );
}

export default Filter;

import './styles.css';
import { FC } from 'react';
import { Filter as FilterType } from '../../../type/Filter';

interface FilterProps {
  filter: FilterType;
  onClick: Function;
}

const Filter: FC<FilterProps> = ({ filter, onClick }): JSX.Element => {

  const onFilterClick = () => {
    onClick(filter.value);
  }

  return (
    <div
      className={ filter.selected ? "Filter selected" : "Filter"}
      onClick={onFilterClick}>
      <p className="name">
        {filter.text} <span className="bold">{filter.name}</span>
      </p>
      {filter.icon}
    </div>
  );
}

export default Filter;

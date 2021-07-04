import { FC } from 'react';
import { Filter as FilterType } from '../../type/Filter';
import Filter from './filter';
import './styles.css';

interface FiltersProps {
  filters: FilterType[],
  onClick: Function
}

const Filters: FC<FiltersProps> = ({ filters, onClick }): JSX.Element => {

  const onFilterClick = (filter: string) => {
    onClick(filter);
  }

  return (
    <div className="Filters">
      { filters.map((filter: FilterType, index: number) => <Filter key={index} onClick={onFilterClick} filter={filter}/>) }
    </div>
  );
}

export default Filters;

import { FC } from 'react';
import { Filter as FilterType } from '../../type/Filter';
import Filter from './filter';
import './styles.css';

interface FiltersProps {
  filters: FilterType[]
}

const Filters: FC<FiltersProps> = ({ filters }): JSX.Element => {
  return (
    <div className="Filters">
      { filters.map((filter: FilterType, index: number) => <Filter filter={filter}/>) }
    </div>
  );
}

export default Filters;

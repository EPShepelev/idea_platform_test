import { IFilter } from "../types/IFilter";
import { Checkbox } from "./Checkbox";

type FilterProps = {
  filters: IFilter[];
};

export const Filter = ({ filters }: FilterProps) => {
  return (
    <div>
      <p className="title">Количество пересадок</p>
      <div className="filters">
        <ul>
          {filters.map((filter, index) => (
            <li className="filter-item" key={index}>
              <Checkbox filter={filter} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { IFilter } from "../types/IFilter";
import { ticketsFilterByStops } from "../store/reducers/ticketSlice";

type CheckboxProps = {
  filter: IFilter;
};

export const Checkbox = ({ filter }: CheckboxProps) => {
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState(filter.isActive);

  useEffect(() => {
    setIsChecked(filter.isActive);
  }, [filter.isActive]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);
    const activeFilter = {
      name: e.target.name,
      value: +e.target.value,
      isActive: e.target.checked,
    };
    dispatch(ticketsFilterByStops(activeFilter));
  };

  return (
    <>
      <label className="filter-label">
        <input
          type="checkbox"
          name={filter.name}
          className="filter-check"
          value={filter.value}
          checked={isChecked}
          onChange={(e) => handleChange(e)}
        />
        {filter.name}
      </label>
    </>
  );
};

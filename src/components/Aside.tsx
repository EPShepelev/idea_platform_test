import { useAppSelector } from "../hooks/redux";
import { Currencies } from "./Currencies";
import { Filter } from "./Filter";

export const Aside = () => {
  const { filters } = useAppSelector((state) => state.ticketReducer);
  //   const filters = [
  //     { name: "Все", value: -1, isActive: false },
  //     { name: "Без пересадок", value: 0, isActive: false },
  //     { name: "1 Пересадка", value: 1, isActive: false },
  //     { name: "2 Пересадки", value: 2, isActive: false },
  //     { name: "3 Пересадки", value: 3, isActive: false },
  //   ];

  return (
    <div className="aside">
      <Currencies />
      <Filter filters={filters} />
    </div>
  );
};

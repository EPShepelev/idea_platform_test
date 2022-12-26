import { useEffect } from "react";
import "./App.css";
import { Aside } from "./components/Aside";
import { List } from "./components/List";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchTickets } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { filteredTickets } = useAppSelector((state) => state.ticketReducer);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content">
        <Aside />
        <List tickets={filteredTickets} />
      </div>
    </div>
  );
}

export default App;

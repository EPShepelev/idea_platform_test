import { useEffect } from "react";
import "./App.css";
import { Aside } from "./components/Aside";
import { List } from "./components/List";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchTickets } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { tickets } = useAppSelector((state) => state.ticketReducer);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content">
        <Aside />
        <List tickets={tickets} />
      </div>
    </div>
  );
}

export default App;

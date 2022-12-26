import { AppDispatch } from "../store";
import axios from "axios";
import { ITicket } from "../../types/ITicket";
import { ticketSlice } from "./ticketSlice";
import { sortByPrice } from "../../helpers/sortByPrice";

export const fetchTickets = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ticketSlice.actions.ticketsFetching());
    const response = await axios.get<ITicket[]>(
      " http://localhost:4000/tickets"
    );
    const ticketSortedByPrice = sortByPrice(response.data);
    dispatch(ticketSlice.actions.ticketsFetchingSuccess(ticketSortedByPrice));
  } catch (e) {
    console.error(e);
  }
};

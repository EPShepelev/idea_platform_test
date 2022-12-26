import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter } from "../../types/IFilter";
import { ITicket } from "../../types/ITicket";

interface TicketState {
  tickets: ITicket[];
  filters: IFilter[];
  isLoading: boolean;
  error: string;
}

const initialState: TicketState = {
  tickets: [],
  filters: [
    { name: "Все", value: -1, isActive: false },
    { name: "Без пересадок", value: 0, isActive: false },
    { name: "1 Пересадка", value: 1, isActive: false },
    { name: "2 Пересадки", value: 2, isActive: false },
    { name: "3 Пересадки", value: 3, isActive: false },
  ],
  isLoading: false,
  error: "",
};

export const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    ticketsFetching(state) {
      state.isLoading = true;
    },
    ticketsFetchingSuccess(state, action: PayloadAction<ITicket[]>) {
      state.isLoading = false;
      state.error = "";
      state.tickets = action.payload;
    },
    ticketsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    ticketsFilterByStops(state, action: PayloadAction<IFilter>) {
      const filterGetByUser = action.payload;
      state.filters.forEach((filter) => {
        if (filter.name === filterGetByUser.name) {
          filter.isActive = filterGetByUser.isActive;
        }
      });

      const activeFilters = state.filters.filter((filter) => filter.isActive);
      activeFilters.forEach((filter) => {
        const filtredTickets = state.tickets.filter(
          (ticket) => ticket.stops === filter.value
        );
        state.tickets = filtredTickets;
      });
    },
  },
});

export default ticketSlice.reducer;
export const { ticketsFilterByStops } = ticketSlice.actions;

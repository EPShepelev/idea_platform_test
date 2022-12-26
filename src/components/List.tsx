import { ITicket } from "../types/ITicket";
import { Card } from "./Card";
import { NoTickets } from "./NoTickets";

type TicketProps = {
  tickets: ITicket[];
};

export const List = ({ tickets }: TicketProps) => {
  if (tickets.length === 0) {
    return <NoTickets />;
  }
  return (
    <div className="list">
      {tickets.map((ticket, index) => (
        <Card ticket={ticket} key={index} />
      ))}
    </div>
  );
};

import { ITicket } from "../types/ITicket";
import { Card } from "./Card";

type TicketProps = {
  tickets: ITicket[];
};

export const List = ({ tickets }: TicketProps) => {
  return (
    <div className="list">
      {tickets.map((ticket, index) => (
        <Card ticket={ticket} key={index} />
      ))}
    </div>
  );
};

import { ITicket } from "../types/ITicket";

type TicketProps = {
  ticket: ITicket;
};

export const Card = ({ ticket }: TicketProps) => {
  return (
    <div className="card">
      <div className="card-bye">
        <div className="card-carrier">{ticket.carrier}</div>
        <button className="card-btn"> Купить за {ticket.price}р.</button>
      </div>
      <div className="card-info">
        <div className="card-origin">
          <div className="card-city">
            {ticket.origin_name}, {ticket.origin}
          </div>
          <div className="card-time">
            {ticket.departure_date} в {ticket.departure_time}
          </div>
        </div>
        <div className="card-stops">
          {ticket.stops > 0 ? `пересадок ${ticket.stops}` : `без пересадок`}
        </div>
        <div className="card-destination">
          <div className="card-city">
            {ticket.destination_name}, {ticket.destination}
          </div>
          <div className="card-time">
            {ticket.arrival_date} в {ticket.arrival_time}
          </div>
        </div>
      </div>
    </div>
  );
};

import "./Ticket.css";
import TicketNum from "./TicketNum";

const Ticket = ({ ticket }) => {
//   console.log(ticket);
  return (
    <div className="ticket">
      <p className="title">Ticket</p>
      {ticket.map((num, idx) => (
        <TicketNum key={idx} num={num} />
      ))}
    </div>
  );
};
export default Ticket;

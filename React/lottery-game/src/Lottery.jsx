import { useState } from "react";
import { genTicket } from "./Helper";
import "./Lottery.css";
import Ticket from "./Ticket";

const Lottery = ({ n = 3, winCondition }) => {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWining = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <br />
      <button className="btn" onClick={buyTicket}>
        Buy New Ticket
      </button>
      {isWining ? (
        <h2 className="won">Congratulation , you won!</h2>
      ) : (
        <h2 className="lose">Please try again later!</h2>
      )}
    </div>
  );
};
export default Lottery;

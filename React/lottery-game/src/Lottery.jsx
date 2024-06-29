import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./Helper";

const Lottery = () => {
  let [ticket, setTicket] = useState(genTicket(3));
let isWining = sum(ticket) === 15;

let buyTicket = ()=>{
setTicket(genTicket(3))
}

  return (
    <div>
      <h1>Lottery Game!</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button className="btn" onClick={buyTicket}>Buy Ticket</button>
      {isWining ? <h2 className="won">Congratulation , you won!</h2> : <h2 className= "lose">Please try again later!</h2>}
    </div>
  );
};
export default Lottery;

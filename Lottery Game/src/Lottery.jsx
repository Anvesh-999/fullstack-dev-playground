import { useState } from "react";
import { genTicket,sum } from "./helper";
import Ticket from './Ticket.jsx';

export default function Lottery({n=3,winningSum=15}) {
    let[ticket,setTicket]=useState(genTicket(n));

    let isWinning=sum(ticket)===winningSum;

    let buyNewTicket=()=>{
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={buyNewTicket}>Buy new ticket</button>
            {isWinning ? <h2>Congratulations! You won!</h2> : <h2>Sorry, try again!</h2>}
        </div>
    );
}
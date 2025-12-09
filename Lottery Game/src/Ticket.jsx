import './Ticket.css';
import TicketNum from './TicketNum';

export default function Ticket({ticket}) {
    return (
        <div>
            <h5>Ticket</h5>
            {ticket.map((num,idx)=>(
                <TicketNum key={idx} num={num}/>
            ))}
        </div>
    );
}
import { useState } from "react";

export default function LudoBoard() {
    const [moves,setMoves] = useState({red:0,blue:0,green:0,yellow:0});

    let updateBlue = (color) => {
       setMoves((prevMoves) => {
        return {...prevMoves, blue: prevMoves.blue + 1};
       });
    }
    let updateYellow = (color) => {
       setMoves((prevMoves) => {
        return {...prevMoves, yellow: prevMoves.yellow + 1};
       });
    }
    let updateRed = (color) => {
       setMoves((prevMoves) => {
        return {...prevMoves, red: prevMoves.red + 1};
       });
    }
    let updateGreen = (color) => {
       setMoves((prevMoves) => {
        return {...prevMoves, green: prevMoves.green + 1};
       });
    }
    return(
        <div>
            <h2>Lets Begin!</h2>
        <div>
            <p>Red count = {moves.red}</p>
            <button onClick={updateRed} style={{backgroundColor:"red", color:"white"}}>+1</button>
            <p>Yellow count = {moves.yellow}</p>
            <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
            <p>Blue count = {moves.blue}</p>
            <button onClick={updateBlue} style={{backgroundColor:"blue", color:"white"}}>+1</button>
            <p>Green count = {moves.green}</p>
            <button onClick={updateGreen} style={{backgroundColor:"green",color:"white"}}>+1</button>
        </div>
        </div>
    )
}
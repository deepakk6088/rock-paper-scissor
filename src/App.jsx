import { useState } from 'react'
import './App.css'
function App(){
    const [userMove,setuserMove]=useState("");
    const [computerMove,setComputerMove]=useState("");
    const [userScore,setuserScore]=useState(0);
    const [computerScore,setComputerScore]=useState(0); 
    const [winner,setWinner]=useState("")
    const [Round,setRound]=useState(0)
    const moves=["Rock","Paper","Scissor"]
    const cMoves= moves[(Math.floor(Math.random()*3))] 
    let emojisData={
        "Rock":"🪨",
        "Paper":"📃",
        "Scissor":"✂️"
    }
  function reset(){
    setComputerScore(0)
    setuserScore(0)
    setRound(0)
  }
    function handleClick(move){
        setuserMove(move)
        setComputerMove(cMoves)
         if(moves===cMoves){
            setRound(Round+1)
         
}else if((move=="Rock" && cMoves=="Scissor") || (move=="Paper" && cMoves=="Rock") || (move === "Scissor" && cMoves === "Paper")){
     setuserScore(userScore+1)
     setRound(Round+1)
  }else {
    setComputerScore(computerScore+1)
         setRound(Round+1)

  }
  if(userScore>=4){
    setWinner("You Win 🏆")
        setComputerScore(0)
    setuserScore(0)
    setRound(0)


  }else if(computerScore>=4){
   setWinner("Computer Wins 🏆")
       setComputerScore(0)
    setuserScore(0)
    setRound(0)}
    }
    return(
        <div>
        <h1>Computer:You</h1>
        <h2>Round:{Round}</h2>
        <h2>{computerScore}:{userScore}</h2>
        <h1>{winner}</h1>
        {emojisData[computerMove]||"?"}:{emojisData[userMove]||"?"}
        <div>
            <button onClick={()=>handleClick("Rock")}>🪨</button>
            <button onClick={()=>handleClick("Paper")}>📃</button>
            <button onClick={()=>handleClick("Scissor")}>✂️</button>
        </div>
        <button onClick={reset}>Reset</button>
    </div>
    )
       }
export default App


















































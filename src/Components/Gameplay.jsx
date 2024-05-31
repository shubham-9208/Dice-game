import Selecter from "./Selecter"
import Totalscore from "./Totalscore"
import style from 'styled-components'
import RollDice from './RollDice';
import { useState } from "react";
import { Button } from './buttonstyle';
import Rules from "./Rules";

function Gameplay() {
  const [selectedNum, setselectedNum] = useState('')
  const [current, setcurrent] = useState(1)
  const [score, setscore] = useState(0)
  const [error, seterror] = useState("")
  const [showrules,setshowrules]=useState(false)
  
  
  const generaterandomnum = (min, max) => {
    if (!selectedNum) {
      seterror("you have not selected number")
      return
    }
    
    
    
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    setcurrent(random)
    
    
    if (selectedNum === random) {
      setscore((prev) => prev + random)
    } else {
      setscore((prev) => prev - 2)
    }
    
    setselectedNum(undefined)
  }
  
  
  const resetScore=()=>{
    setscore(0)
  }

  return (
    <>
      <Dice>
        <Totalscore score={score} />
        <div><Selecter seterror={seterror} error={error} selectedNum={selectedNum} setselectedNum={setselectedNum} /></div>

      </Dice>
      <RollDice current={current} generaterandomnum={generaterandomnum} />
      <Buttonstyle>
        <Button 
        onClick={resetScore}
        className="restart">Restart</Button>
        <Button 
        onClick={()=>setshowrules((prev)=>!prev)}
        className="restart">{showrules ?"Hide": "Show"} Rules</Button>

      </Buttonstyle>
      {showrules && <Rules/>}



    </>
  )
}

export default Gameplay

const Dice = style.div`
display: flex;
justify-content: space-between;
max-width:1280px;
margin:auto;
`;

const Buttonstyle = style.div`
  display:grid;
  align-content:center;
  justify-content:center;
  gap:10px;


  .restart{
    max-width:200px;
  }
`;
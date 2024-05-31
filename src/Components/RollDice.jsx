
import { useState } from 'react'
import style from 'styled-components'

function RollDice({ current, generaterandomnum }) {

 

  return (
    <Center>
      <div className='forimg' onClick={() => generaterandomnum(1, 6)} >
        <img src={`/images/dice_${current}.png`} alt="" />
      </div>
      <div><p>Click on Dice to Roll</p></div>
    </Center>
  )
}

export default RollDice

const Center = style.div`
width:100%;
margin-top:100px;
display:grid;
justify-content: center;

p{
  font-size: 20px;
  font-weight: bold;
  text-align:center;
}
.forimg{
  cursor: pointer;
}
`
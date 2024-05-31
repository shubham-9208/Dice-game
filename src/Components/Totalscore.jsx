
import style from "styled-components"

function Totalscore({score}) {
  return (
    <Score>
      <h1>{score}</h1>
      <p>Totalscore</p>
    </Score>
  )
}

export default Totalscore

const Score = style.div`
h1{
  font-size: 50px;
  line-height:10px;
  max-width:100px;
  text-align:center;
}

p{
  font-size: 25px;
}
`;

import { useState } from 'react'
import style from 'styled-components'
function Selecter({ seterror,error,selectedNum, setselectedNum }) {
  const Nums = [1, 2, 3, 4, 5, 6]
  // const Nums = Array.from({length: 6}, (_, i) =>i+1);     for 100 num

  const Errorhandler=(num)=>{
    setselectedNum(num)
    seterror('')
  }

  return (
    <>
    <Err>{error}</Err>
      <BoxDiv>
        {Nums.map((num, i) => (<Box key={i}
          isSelected={num === selectedNum}
          onClick={() => Errorhandler(num) }
          seterror={""}
        >{num}</Box>))}

      </BoxDiv>
      <P>Select the number</P>

    </>
  )
}

export default Selecter

const Box = style.div`
  height:72px;
  width:72px;
  border: 1px solid black;
  display:grid;
  place-items:center;
  font-size:30px;
  font-weight:900;
  cursor:pointer;
  background-color:${(props) => (props.isSelected ? "black" : "white")};
  color:${(props) => (!props.isSelected ? "black" : "white")};
  margin:5px;

  
`;

const BoxDiv = style.div`
  display:flex;
`;

const P = style.div`
  font-size:20px;
  font-weight:900;
  padding-top:10px;
  text-align:end;
  `;
  
  const Err =style.p`
  font-size:20px;
  text-align:end;
  color:red;
`;
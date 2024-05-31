import styled from "styled-components"
import { Button } from "./buttonstyle";

function StartGame({togg}) {
    return (
        <>
            <Conatainer>
                <div>
                    <img src="images\dices 1.png" alt="" />
                </div>
                <div className=" Containt">
                    <h1>Dice Game</h1>
                    <Button
                    onClick={togg}
                    >Play Now</Button>
                </div>
            </Conatainer>
        </>
    )
}

export default StartGame


const Conatainer = styled.div`
max-width:1180px;
display :flex;
margin:auto;
height:95vh;
align-items:center;



.Containt h1{
    
font-size: 96px;
white-space: nowrap;
}
`;



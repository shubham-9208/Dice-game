
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`

background-color: #FBF1F1;
max-width: 776px;
margin: auto;
padding: 10px;
border-radius: 20px;
margin-top: 20px;
`
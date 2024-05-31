import StartGame from './Components/StartGame'
import { useState } from 'react'
import Gameplay from './Components/Gameplay'


function App() {
  const [isgamestart, setIsgamestart] = useState(false)

  const toggle = () => {
    setIsgamestart((prev) => !prev)
  }

  return (
    <>

      {isgamestart ? <Gameplay /> : <StartGame togg={toggle}/>}

    </>
  )
}

export default App


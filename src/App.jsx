import { useState } from 'react'
import learner from './components/data';
import Learner from './components/Learner/Learner';
import Score from './components/Score/Score';
import './App.css'

function App() {
const [learnerData,setLearnerData]= useState({learner})

let learning = learner.map((item)=>{
      return (<>
      <Learner name= {item.name} bio={item.bio} scores={item.scores}/>
     
        </>
      )
})

  return (
    <>
        {learning}
    </>
  )
}

export default App

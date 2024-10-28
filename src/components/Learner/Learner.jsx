import Score from "../Score/Score";

function Learner(props){

let renderScores= props.scores.map((item)=>{
  return <Score score={item.score} date={item.date}/>
})

  return (
    <div>
    <h3>{props.name}</h3>
    <p>{props.bio}</p>
    <p>{renderScores}</p>

    </div>
  )

}



export default Learner;
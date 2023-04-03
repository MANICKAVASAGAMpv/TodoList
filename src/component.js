export const Output =(props)=>{
    <div
    style={{backgroundColor : props.completed ? "green" : "white"}}
    >
      <h1>{props.newlist}</h1>
      <button onClick={()=>props.deleList(props.id)}>X</button>
      <button onClick={()=>props.completedTask(props.id)} >Complete</button>
    </div>
}
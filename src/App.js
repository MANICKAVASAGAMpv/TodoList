import {useState} from 'react'
import './App.css';

function App() {
  const [newTodoList , setNewTodoList] = useState([]);
  const [newTask , setNewTask] = useState("");

const handleEvent =(event)=>{
   setNewTask(event.target.value)
}

const addList =()=>{
  const task ={
    id: newTodoList.length === 0 ? 1 : newTodoList[newTodoList.length-1].id + 1,
    list1: newTask,
    completed: false
  }
  setNewTodoList([...newTodoList,task])

}
const deleList =(id)=>{
  setNewTodoList(newTodoList.filter((delList)=>{
    if(delList.id === id)
    return false
    else
    return true
  }))
}
const completed = (id)=>{
  setNewTodoList(
     newTodoList.map((task)=>{
      if(task.id === id){
        return { ...task, completed:true}
      } else{
        return task
      }
   }))
}

  return (
    <div className="App">
      <h1>Todo<span>List</span></h1>
     <div className="Input">
      <input  type="text"onChange={handleEvent}/>
      <button className='add' onClick={addList}>Add Task</button>
     </div>
     <div className="NewList">
      {newTodoList.map((list)=>{
        return (
          <div className='output'
          style={{backgroundColor : list.completed ? "green" : "white"}}
          > 
            <h1>{list.list1}</h1>
            <div className='button'>
            <button onClick={()=>deleList(list.id)}>X</button>
            <button onClick={()=>completed(list.id)} >Complete</button>
            </div>
            </div>
        )
      })}
     </div>
    </div>
  );
}

export default App;

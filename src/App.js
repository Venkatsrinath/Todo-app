// 
import React, { useState } from "react";
import {v1 as uuidv1} from "uuid";
import './App.css';

function App() {
  const[inputValue,setInputValue] =useState("");
  const[todos,setTodos] =useState([]);
  const[completed,setCompleted] =useState([]);
  // const [update,setUpdate] = useState(false);
  
  const onChangeHandler =(e)=>{
      setInputValue(e.target.value);
  }
  const addTodo =()=>{
    const updatedTodo =[{todoText :inputValue ,id :uuidv1()},...todos];
    console.log(updatedTodo);
    setTodos(updatedTodo)
    setInputValue("");
  }
  
  const onEdit =(todoText,id)=>{
    const edittodo = todos.filter((m)=>(m.todoText !== todoText ))
    setTodos(edittodo);
      setInputValue(todoText);
      // setTodos((prev)=>[edittodo,...prev])
  }
  // const onEdit =(todoText,id)=>{
  //   setUpdate(id)
  // }
  const deleteTodo =(id)=>{
    const filterdTodos = todos.filter((i)=>(
      i.id !== id));
      setTodos(filterdTodos);
  }
  const Changecolur =(id)=>{
  if(completed.includes(id)){
    setCompleted(completed.filter((c)=>c !== id))
  }
  else{
    setCompleted([...completed,id])
 }
} 
// console.log(setCompleted);
// const toggle =()=>{
//   setUpdate(!update)

// }

  
  
  return (
    <div className="container">
      <h1 className="todo_app">TODO APPLICATION</h1>
      <div>
      <input type=" text" className="input_container" value={inputValue} onChange={onChangeHandler} ></input><br/>
        <button className="button" onClick={addTodo}>ADD TASK </button>
        {/* <button  className="button1" onClick={toggle}> {update ? 'updated' :'update text'}</button> */}
      </div>
      <div className="div_map">
        {todos.map((v)=>{
         return(
            <div key ={v.id}  className={`list_item ${completed.includes(v.id) ?"checked_list_item" : ""}`}> 
              <p>{v.todoText}  </p>
              <section className="section_btn">
                <button onClick={()=>deleteTodo(v.id)} className="delete_btn">Delete</button>
                <button className="done_btn" onClick ={()=>Changecolur(v.id)}>Done</button>
                <button onClick={()=>onEdit(v.todoText,v.id)}  className="edit_btn">Edit</button>
              </section>
              </div>
         )
        })}
      </div> 
    </div>
  );
}

export default App;

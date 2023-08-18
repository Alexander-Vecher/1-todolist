import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const truck1= 'What to learn'


    /*const tasks=*/
let [tasks, setTasks]= useState([
    {id:1, title: "HTML&CSS", isDone: true },
    {id:2, title: "JS", isDone: true },
    {id:3, title: "ReacktJS", isDone: false },
    {id:4, title: "ReacktJS", isDone: false },
])
const removeTask =(TaskId:number)=>{
            setTasks(tasks.filter((el)=>(el.id!==TaskId)))
}
const tasksFilter= (filterKey:string)=>{
console.log(filterKey)
}
    return (
        <div className="App">
            <Todolist truck= {truck1} tasks={tasks} removeTask={removeTask} tasksFilter={tasksFilter}/>
        </div>
    );
}

export default App;

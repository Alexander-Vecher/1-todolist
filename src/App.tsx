import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type filterType = 'All' | 'Active'| 'Completed'
function App() {
    const truck1= 'What to learn'


    /*const tasks=*/
let [tasks, setTasks]= useState([
    {id:1, title: "HTML&CSS", isDone: true },
    {id:2, title: "JS", isDone: true },
    {id:3, title: "ReacktJS", isDone: false },
    {id:4, title: "ReacktJS", isDone: false },
])

const removeTask =(id:number)=>{
            setTasks(tasks.filter((el)=>(el.id!==id)))
}

    return (
        <div className="App">
            <Todolist truck= {truck1} removeTask={removeTask} tasks={tasks}/>
        </div>
    );
}

export default App;

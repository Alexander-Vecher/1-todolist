import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";



function App() {

    const title_1:string="What to learn"
    const title_2:string="What to buy"

const tasks_1:Array<TaskType>=[
    {id:1, isDone: true, title:'HTML&CSS'},
    {id:2, isDone: true, title:'JS/TS'},
    {id:3, isDone: false,title:'REACT'},
    {id:4, isDone: true, title:'REDUX'}
]
    const tasks_2=[
    {id:5, isDone: true, title:'Bread'},
    {id:6, isDone: true, title:'Chocolate'},
    {id:7, isDone: false,title:'Tea'},
    {id:8, isDone: true, title:'Coffee'}
]
    return (


        <div className="App">
            <TodoList task={tasks_1} title={title_1}/>
            <TodoList task={tasks_2} title={title_2}/>
        </div>
    );
}

export default App;

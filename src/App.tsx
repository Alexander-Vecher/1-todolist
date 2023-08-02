import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const truck1= 'What to learn'
    const truck2= 'What to learn2222'

    const tasks1=[
        {id:1, title: "HTML&CSS", isDone: true },
        {id:2, title: "JS", isDone: true },
        {id:3, title: "ReacktJS", isDone: false },
        {id:3, title: "ReacktJS", isDone: false },
        ]
    const tasks2=[
        {id:1, title: "Hello world", isDone: true },
        {id:2, title: "I am Happy", isDone: false },
        {id:3, title: "Yo", isDone: false },
    ]
    return (
        <div className="App">
            <Todolist truck= {truck1} tasks={tasks1}/> //январь
            <Todolist truck= {truck2} tasks={tasks2}/> //февраль
        </div>
    );
}

export default App;
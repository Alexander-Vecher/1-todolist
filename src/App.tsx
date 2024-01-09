import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {

    const title_1:string="What to learn"
    const title_2:string="What to buy"

    return (


        <div className="App">
            <TodoList title={title_1}/>
            <TodoList title={title_2}/>
        </div>
    );
}

export default App;

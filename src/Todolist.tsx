import React, {useState} from "react";
import {filterType} from "./App";
type Task = {
    id: number;
    title: string;
    isDone: boolean;

}
type PropsType = {
    truck: string;
    tasks: Array<Task>;
    removeTask:(TaskId:number)=>void;

}


export function Todolist(props: PropsType) {
    let [filter, setfilter] = useState<filterType>('All')
    const tasksFilter= (filterKey:filterType)=>{
        setfilter(filterKey)
    }
     const FilterFoo=()=> {

        switch (filter){
            case "Active": {return props.tasks.filter(el => !el.isDone)}
            case "Completed": {return props.tasks.filter(el => el.isDone)}
            case "All": return props.tasks}



                /*let filtration = props.tasks
            if (filter === "Active") {
                filtration = props.tasks.filter(el => !el.isDone)
            }
            if (filter === "Completed") {
                filtration = props.tasks.filter(el => el.isDone)
            }
            return filtration*/
     }
    return (
        <div>
            <h3>{props.truck}</h3>

            <div>
                <input/>
                <button>+</button>
            </div>

            <ul>
                {FilterFoo().map(el=>{
                return(
                    <li key={el.id}>
                        <button onClick={()=>props.removeTask(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span></li>

                )}
)}
                {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
            </ul>

            <div>
                <button onClick={()=>tasksFilter('All')}>All</button>
                <button onClick={()=>tasksFilter('Active')}>Active</button>
                <button onClick={()=>tasksFilter('Completed')}>Completed</button>
            </div>
        </div>
    )
}
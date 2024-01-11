import React, {FC} from "react";

export type TaskType={
    id:number
    title:string
    isDone:boolean
}
type TodoListPropsType = {
    title:string
    task:Array<TaskType>
}

const TodoList:FC<TodoListPropsType> = ({title,tasks}) => {

/*    const title=props.title
    const {title,tasks} = props*/
    return(
    <div className='todolist'>
        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
            <li><input type="checkbox" checked={true}/> <span>JS</span></li>
            <li><input type="checkbox" checked={false}/> <span>React</span></li>
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
    )
}
export default TodoList;
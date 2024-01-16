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

const TodoList:FC<TodoListPropsType> = ({title,task}) => {

/*    const title=props.title
/*    const tasks=props.tasks
    const {title,tasks} = props*/

    return(
    <div className='todolist'>
        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            <li><input type="checkbox" checked={task[0].isDone}/> <span>{task[0].title}</span></li>
            <li><input type="checkbox" checked={task[1].isDone}/> <span>{task[1].title}</span></li>
            <li><input type="checkbox" checked={task[2].isDone}/> <span>{task[2].title}</span></li>
            <li><input type="checkbox" checked={task[3].isDone}/> <span>{task[3].title}</span></li>
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
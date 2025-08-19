import { useState } from 'react'
import { useContext } from 'react'
import { TasksContext, TasksDispatchContext } from './tasksContext'

export default function TaskList() {
    const tasks = useContext(TasksContext)
    return (
        <ul>
            {tasks.map((task: { id: number; text: string; done: boolean }) => {
                return (
                    <li key={task.id}>
                        <Task task={task} />
                    </li>
                )
            })}
        </ul>
    )
}

interface TaskProps {
    task: {
        id: number
        text: string
        done: boolean
    }
}

function Task({ task }: TaskProps) {
    const dispatch = useContext(TasksDispatchContext)
    const [isEditing, setIsEditing] = useState(false)
    let taskContent

    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        dispatch({
                            type: 'changed',
                            task: { ...task, text: e.target.value },
                        })
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }
    return (
        <label>
            <input
                type='checkbox'
                checked={task.done}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked,
                        },
                    })
                }}
            />
            {taskContent}
            <button onClick={() => dispatch({ type: 'deleted', id: task.id })}>
                Delete
            </button>
        </label>
    )
}

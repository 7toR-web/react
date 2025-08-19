import { ToDoTasks, ToDoDispatch } from './context'
import { useContext } from 'react'
import { useState } from 'react'

const ToDoAdvanced = () => {
    const [newToDoTask, setnewToDoTask] = useState('')
    const tasks = useContext(ToDoTasks)
    const dispatch = useContext(ToDoDispatch)

    return (
        <>
            <h1>To-Do List</h1>
            <form>
                <input
                    type='text'
                    onChange={e => setnewToDoTask(e.target.value)}
                    value={newToDoTask}
                ></input>
                <button
                    type='submit'
                    onClick={e => {
                        e.preventDefault()
                        dispatch({
                            type: 'added',
                            payload: { title: newToDoTask, id: Date.now() },
                        })
                        setnewToDoTask('')
                    }}
                >
                    Add new task
                </button>
            </form>
            <ul>
                {tasks?.map(item => {
                    return (
                        <li key={item.id}>
                            {item.title + ' '}
                            <button
                                onClick={() =>
                                    dispatch({
                                        type: 'deleted',
                                        payload: { id: item.id },
                                    })
                                }
                            >
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export { ToDoAdvanced }

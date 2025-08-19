import { useState } from 'react'
import { useContext } from 'react'
import { TasksDispatchContext } from './tasksContext'

export default function AddTask({ onAddTask }: { [key: string]: any }) {
    const [text, setText] = useState('')
    const dispatch = useContext(TasksDispatchContext)

    return (
        <>
            <input
                placeholder='Add task'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText('')
                    dispatch !== null &&
                        dispatch({ type: 'added', text: text, id: nextId++ })
                }}
            >
                Add
            </button>
        </>
    )
}

let nextId = 3

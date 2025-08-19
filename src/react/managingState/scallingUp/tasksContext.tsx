import React, {
    Children,
    createContext,
    Dispatch,
    ReactElement,
    ReactNode,
} from 'react'
import { useReducer } from 'react'

const TasksContext = createContext<any>(null)
const TasksDispatchContext = createContext<any>(null)

function TasksProvider(children: ReactNode) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

function tasksReducer(tasks: any, action: any) {
    switch (action.type) {
        case 'added': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ]
        }
        case 'changed': {
            return tasks.map(
                (t: {
                    id: number
                    text: string
                    done: boolean
                }): { [key: string]: any } => {
                    if (t.id === action.task.id) {
                        return action.task
                    } else {
                        return t
                    }
                }
            )
        }
        case 'deleted': {
            return tasks.filter(
                (t: { id: number; text: string; done: boolean }) =>
                    t.id !== action.id
            )
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false },
]
export { TasksContext, TasksDispatchContext, TasksProvider }

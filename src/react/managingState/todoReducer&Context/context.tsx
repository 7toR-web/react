import { createContext } from 'react'
import { ReactNode } from 'react'
import { useReducer } from 'react'

interface ToDoTasksType {
    id: number
    title: string
}

const ToDoTasks = createContext<ToDoTasksType[] | null>(null)
const ToDoDispatch = createContext<any>(null)

const toDoReducer = (
    state: ToDoTasksType[],
    action: { type: string; payload?: any }
) => {
    switch (action.type) {
        case 'added':
            return [...state, action.payload]
        case 'deleted':
            return state.filter(
                (item: ToDoTasksType) => item.id !== action.payload.id
            )
        default:
            return state
    }
}

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [todoTasks, dispatch] = useReducer(toDoReducer, [] as ToDoTasksType[])
    return (
        <ToDoTasks.Provider value={todoTasks}>
            <ToDoDispatch.Provider value={dispatch}>
                {children}
            </ToDoDispatch.Provider>
        </ToDoTasks.Provider>
    )
}

export { ToDoTasks, ToDoDispatch, ContextProvider }

import { ReactNode, useReducer } from 'react'
import { createContext } from 'react'

const CountContext = createContext<{ count: number }>({ count: 0 })
const CountDispatchContext = createContext<any>(null)

const countReducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
        case 'increase':
            return { ...state, count: state.count + 1 }

        case 'decrease':
            return { ...state, count: state.count - 1 }

        case 'reset':
            return { ...state, count: 0 }

        default:
            throw new Error('Unknown action: ' + action.type)
    }
}

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(countReducer, { count: 0 })
    return (
        <CountContext.Provider value={state}>
            <CountDispatchContext.Provider value={dispatch}>
                {children}
            </CountDispatchContext.Provider>
        </CountContext.Provider>
    )
}

export { ContextProvider, CountContext, CountDispatchContext }

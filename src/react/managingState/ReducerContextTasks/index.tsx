import { useContext } from 'react'
import { CountContext } from './provider'
import { ControlButtonsProvider } from './controls'
import { ContextProvider } from './provider'

const AdvanceCounter = () => {
    const state = useContext(CountContext)
    return (
        <>
            <div style={{ display: 'block' }}>{state.count}</div>
            <ControlButtonsProvider />
        </>
    )
}

export { AdvanceCounter }

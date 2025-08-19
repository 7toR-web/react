import { useContext } from 'react'
import { CountDispatchContext } from './provider'
import { ResetButtonProvider } from './reset'

const ControlButtonsProvider = () => {
    const dispatch = useContext(CountDispatchContext)

    return (
        <>
            <button
                style={{ margin: '20px', width: '100px', height: '50px' }}
                onClick={() => dispatch({ type: 'increase' })}
            >
                increase
            </button>
            <button
                style={{ margin: '20px', width: '100px', height: '50px' }}
                onClick={() => dispatch({ type: 'decrease' })}
            >
                Decrease
            </button>
            <ResetButtonProvider />
        </>
    )
}

export { ControlButtonsProvider }

import { CountDispatchContext, CountContext } from './provider'
import { useContext } from 'react'

const ResetButtonProvider = () => {
    const dispatch = useContext(CountDispatchContext)
    const count = useContext(CountContext)

    return (
        <button
            style={{ margin: '20px', width: '100px', height: '50px' }}
            onClick={() => dispatch({ type: 'reset' })}
        >
            Reset
        </button>
    )
}

export { ResetButtonProvider }

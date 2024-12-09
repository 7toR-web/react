import css from './series.module.css'
import { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)

    return (
        <>
            <h2 className={css.number}>{number}</h2>{' '}
            <button
                className={css.counterButton}
                onClick={() => {
                    setNumber(n => n + 1)
                    setNumber(n => n + 1)
                    setNumber(n => n + 1)
                }}
            >
                +3
            </button>
        </>
    )
}

export { Counter }

const ArtMarketPlace = () => {
    const [completed, setCompletedCounter] = useState(0)
    const [pendingCounter, setPendingCounter] = useState(0)

    const delay = (ms: number) =>
        new Promise(resolve => setTimeout(resolve, ms))
    
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setPendingCounter(pendingCounter => pendingCounter + 1)
        await delay(3000)
        setPendingCounter(pendingCounter => pendingCounter - 1)
        setCompletedCounter(completed => completed + 1)
    }

    return (
        <>
            <h3>Pending: {pendingCounter}</h3>
            <h3>Completed: {completed}</h3>
            <button onClick={handleClick}>Buy</button>
        </>
    )
}

export { ArtMarketPlace }

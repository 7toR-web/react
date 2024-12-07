import css from './state.module.css'
import { useState } from 'react'

const Form = () => {
    const [isSent, setIsSent] = useState(false)
    const [message, setMessage] = useState(`Hi, `)

    if (isSent) {
        return <h1>Your message is on its way</h1>
    }

    return (
        <>
            <form
                action=''
                onSubmit={e => {
                    e.preventDefault()
                    setIsSent(true)
                }}
            >
                <textarea
                    placeholder='write message'
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    name=''
                    id=''
                ></textarea>
                <button type='submit'>send</button>
            </form>
        </>
    )
}

export { Form }

const TraficLight = () => {
    const [walk, setWalk] = useState(true)
    const handleClick = () => {
      setWalk(!walk)
        walk ? alert(`Stop is next`) : alert('Walk is next')
    }

    return (
        <>
            <button onClick={handleClick}>Change to {walk ? 'stop' : 'walk'}</button>
            <h1 style={{ color: walk ? 'darkgreen' : 'darkred' }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    )
}

export { TraficLight }

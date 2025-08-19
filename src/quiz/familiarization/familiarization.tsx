import React, { useState } from 'react'
import css from './familiarization.module.css'

const Familiarization = () => {
    const [isVisible, setIsVisible] = useState(true)
    const notDisplayClassname = css.notDisplay

    function handleClick() {
        setIsVisible(false)
    }

    return (
        <>
            <div className={css.familiarizationContainer}>
                <p
                    style={{
                        borderBottom: '1px solid #725050ff',
                        fontSize: '1.2rem',
                    }}
                >
                    This is a quiz to test your knowledge of React concepts and
                    best practices. Answer the questions below to see how well
                    you understand React.
                </p>
                <button onClick={handleClick}>I GOT IT</button>
            </div>
        </>
    )
}

export { Familiarization }

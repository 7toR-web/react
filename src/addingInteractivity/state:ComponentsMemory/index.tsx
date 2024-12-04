import { useState } from 'react'
import css from './state.module.css'
import { sculptureList } from './data'

const Gallery = () => {
    const [index, setIndex] = useState(0)
    const [showDetail, setShowDetail] = useState(false)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement> | null) => {
        index < 11 ? setIndex(index + 1) : setIndex(0)
    }
    const handleShowDetailsClick = () => {
        setShowDetail(!showDetail)
    }
    const sculpture = sculptureList[index]

    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleShowDetailsClick}>
                {showDetail ? 'Hide' : 'More'}
            </button>
            <p>{showDetail && sculpture.description}</p>

            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    )
}

export { Gallery }

import css from './arrays.module.css'
import React, { useState } from 'react'
import { useImmer } from 'use-immer'

let nextId = 0

const List = () => {
    const [name, setName] = useState('')
    const [artists, setArtists] = useState<{ id: number; name: string }[]>([])

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button
                onClick={() => {
                    if (artists.some(artist => artist.name === name)) {
                        setName('')
                        return
                    }
                    setArtists([...artists, { id: nextId + 1, name: name }])
                    setName('')
                }}
            >
                Add
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    )
}

export { List }

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
]

const FilterList = () => {
    const [artists, setArtists] = useState(initialArtists)

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button
                            onClick={e => {
                                setArtists(
                                    artists.filter(
                                        item => item.id !== artist.id
                                    )
                                )
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export { FilterList }

let initialShapes = [
    { id: 0, type: 'circle', x: 500, y: 100 },
    { id: 1, type: 'square', x: 650, y: 100 },
    { id: 2, type: 'circle', x: 800, y: 100 },
]

const ShapeEditor = () => {
    const [shapes, setShapes] = useState(initialShapes)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const nextShapes = shapes.map(item => {
            if (item.type === 'circle') {
                return { ...item, y: item.y + 50 }
            } else {
                return item
            }
        })
        setShapes(nextShapes)
    }

    return (
        <>
            <button
                style={{ position: 'absolute', left: '600px', top: '200px' }}
                onClick={handleClick}
            >
                Move circles down
            </button>
            {shapes.map(item => {
                return (
                    <div
                        key={item.id}
                        style={{
                            background: 'purple',
                            position: 'absolute',
                            left: item.x,
                            top: item.y,
                            borderRadius: item.type === 'circle' ? '50%' : '',
                            width: 20,
                            height: 20,
                        }}
                    ></div>
                )
            })}
        </>
    )
}

export { ShapeEditor }

let initialCounters = [0, 0, 0]

const Counter = () => {
    const [counters, setCounters] = useState(initialCounters)
    const handleClick = (index: number) => {
        const nextCounter = counters.map((item, i) => {
            if (i === index) {
                return item + 1
            } else {
                return item
            }
        })
        setCounters(nextCounter)
    }

    return (
        <ul>
            {counters.map((item, index) => {
                return (
                    <>
                        <li style={{ margin: '20px 10px' }} key={index}>
                            {item}
                            <button onClick={() => handleClick(index)}>
                                +1
                            </button>
                        </li>
                    </>
                )
            })}
        </ul>
    )
}

export { Counter }

const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
]

export default function ReverseList() {
    const [list, setList] = useState(initialList)

    function handleClick() {
        const nextList = [...list]
        nextList.reverse()
        setList(nextList)
    }

    return (
        <>
            <button onClick={handleClick}>Reverse</button>
            <ul>
                {list.map(artwork => (
                    <li key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </>
    )
}

export { ReverseList }
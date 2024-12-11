import css from './objects.module.css'
import React, { useState } from 'react'
import { useImmer } from 'use-immer'

const StateTypes = () => {
    // const [x, setX] = useState(0)
    // setX(5)

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    })

    return (
        <>
            <div
                onPointerMove={e => {
                    setPosition({
                        x: e.clientX,
                        y: e.clientY,
                    })
                }}
                style={{
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        transform: `translate(${position.x}px, ${position.y}px)`,
                        left: -10,
                        top: -10,
                        width: 20,
                        height: 20,
                    }}
                />
            </div>
        </>
    )
}

export { StateTypes }

const StateForm = () => {
    const [person, setPerson] = useState({
        firstName: '',
        secondName: '',
        email: '',
    })

    const handle1Name = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerson({
            ...person,
            firstName: e.target.value,
        })
    }
    const handle2Name = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setPerson({
            // ...person,
            // secondName: e.target.value,
        // })
        const objectClone = structuredClone(person)
        objectClone.secondName = e.target.value
        setPerson(objectClone)
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setPerson({
        //     ...person,
        //     email: e.target.value,
        // })
        const objectCLone = structuredClone(person)
        objectCLone.email = e.target.value
        setPerson(objectCLone)
    }

    return (
        <>
            <label>
                First name:
                <input value={person.firstName} onChange={handle1Name} />
            </label>
            <label>
                Last name:
                <input value={person.secondName} onChange={handle2Name} />
            </label>
            <label>
                Email:
                <input value={person.email} onChange={handleEmail} />
            </label>
            <p>
                {person.firstName} {person.secondName} ({person.email})
            </p>
        </>
    )
}

export { StateForm }

//instead useState() we can use useImmer() with !object!
import css from './additionalTasks.module.css'
import { useState } from 'react'
import { useImmer } from 'use-immer'

const ClickCounter = () => {
    const [counter, setCounter] = useState<number>(0)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCounter(counter + 1)
        // console.log(e.target)
    }

    return (
        <>
            <p>Clicks: {counter}</p>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

export { ClickCounter }

//
const ToDoList = () => {
    const [inputText, setInputText] = useState<string>('')
    const [thingsToDo, setThingsToDo] = useState<
        { id: number; text: string }[]
    >([])

    const handleDeleteClick = (id: number): void => {
        const newThingsToDo = thingsToDo.filter(item => {
            return item.id !== id
        })
        setThingsToDo(newThingsToDo)
    }

    const handleInputChanges = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setInputText(e.target.value)
    }

    const handleSaveClick = () => {
        if (inputText) {
            setThingsToDo([...thingsToDo, { id: Date.now(), text: inputText }])
            setInputText('')
        }
        return
    }

    const handleReverseClick = () => {
        const newThingsToDo = [...thingsToDo].reverse()
        setThingsToDo(newThingsToDo)
    }

    return (
        <>
            <input
                onChange={handleInputChanges}
                value={inputText}
                placeholder='write a task'
            ></input>
            <button onClick={handleSaveClick}>Save It</button>
            {thingsToDo.length > 0 && (
                <button onClick={handleReverseClick}>Reverse</button>
            )}
            <ul>
                {thingsToDo.map((item, index) => {
                    return (
                        <li style={{ margin: '10px' }} key={item.id}>
                            {item.text}
                            <button
                                style={{ margin: '0 0 0 10px' }}
                                onClick={() => handleDeleteClick(item.id)}
                            >
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export { ToDoList }

const WorkForm = () => {
    const [isSaved, setIsSaved] = useState<boolean>(false)
    const [person, setPerson] = useState<{ name: string; email: string }>({
        name: '',
        email: '',
    })
    const handleNameChanges = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setPerson({
            ...person,
            name: e.target.value,
        })
    }
    const handleEmailChanges = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setPerson({
            ...person,
            email: e.target.value,
        })
    }
    const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (
            person.name.length &&
            person.email.length &&
            person.email.includes('@gmail.com')
        ) {
            setIsSaved(true)
            console.log(`Name: ${person.name}(${person.email})`)
        } else {
            alert('Enter valid data!')
        }
    }
    const handleMakeChanges = (
        e: React.MouseEvent<HTMLButtonElement>
    ): void => {
        setIsSaved(false)
    }

    return (
        <>
            <input
                className={css.name}
                placeholder={'Enter your Name'}
                onChange={handleNameChanges}
                value={person.name}
                readOnly={isSaved}
            ></input>
            <input
                className={css.email}
                placeholder={'Enter your Email'}
                onChange={handleEmailChanges}
                value={person.email}
                readOnly={isSaved}
            ></input>
            <button className={css.saveButton} onClick={handleSaveClick}>
                Save
            </button>
            <button className={css.makeChanges} onClick={handleMakeChanges}>
                Change
            </button>
            {isSaved && (
                <p>
                    Name: {person.name}({person.email})
                </p>
            )}
        </>
    )
}

export { WorkForm }

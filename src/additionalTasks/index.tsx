import css from './additionalTasks.module.css'
import { useState } from 'react'
import { useImmer } from 'use-immer'
import { v4 as uuidv4 } from 'uuid'

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

const SimpleTimer = () => {
    const [time, setTime] = useState<number>(0)
    const [intervalId, setIntervalId] = useState<number | null>(null)

    const handleStartClick = (): void => {
        if (intervalId === null) {
            const interval = window.setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
            setIntervalId(interval)
        }
    }

    const handleStopClick = (): void => {
        if (intervalId !== null) {
            clearInterval(intervalId)
            setIntervalId(null)
        }
    }

    const handleResetClick = (): void => {
        setTime(0)
    }

    return (
        <>
            <p>Time: {time}</p>
            <button onClick={handleStartClick} style={{ margin: '10px' }}>
                Start
            </button>
            <button onClick={handleStopClick} style={{ margin: '10px' }}>
                Stop
            </button>
            <button onClick={handleResetClick} style={{ margin: '10px' }}>
                Reset
            </button>
        </>
    )
}

export { SimpleTimer }

const StateCounter = () => {
    const [gameState, setGameState] = useState<number>(0)
    const handleIncrease = () => setGameState(prevState => prevState + 1)
    const handleDecrease = () => setGameState(prevState => prevState - 1)
    const handleRandom = () => {
        const randomNum = Math.floor(Math.random() * 10) + 1
        setGameState(prevState => prevState + randomNum)
    }

    return (
        <>
            <p>{gameState}</p>
            <button onClick={handleIncrease} style={{ margin: '10px' }}>
                Increase 1
            </button>
            <button onClick={handleDecrease} style={{ margin: '10px' }}>
                Decrease 1
            </button>
            <button onClick={handleRandom} style={{ margin: '10px' }}>
                Random
            </button>
        </>
    )
}

export { StateCounter }

const StateForm = () => {
    const [person, setPerson] = useState<{ name: string; age: number }>({
        name: '',
        age: 0,
    })

    return (
        <>
            <input
                placeholder='Enter your name'
                onChange={e => setPerson({ ...person, name: e.target.value })}
                value={person.name}
            />
            <input
                placeholder='Enter your age'
                onChange={e =>
                    setPerson({ ...person, age: Number(e.target.value) })
                }
                value={person.age}
            />
            <p>
                {person.name} is {person.age} years old
            </p>
        </>
    )
}

export { StateForm as StateFormUpdate }

const Groceries = () => {
    const [itemsList, setItemsList] = useState<
        { id: string; name: string; quanity: number }[]
    >([])
    const [currentItem, setCurrentItem] = useState<{
        name: string
        quanity: number
        id: string
    }>({ name: '', quanity: 0, id: '' })
    const [editingItem, setEditingItem] = useState<string | undefined>()

    const handleChanges = (id: string) => {
        document.getElementById('quanityInput')?.focus()
        const itemToChange = itemsList.find(item => item.id === id)
        if (itemToChange) {
            setCurrentItem({ ...itemToChange })
            setEditingItem(id)
        }
    }
    const handleDelete = (id: string) => {
        const newItemsList = itemsList.filter(item => item.id !== id)
        setItemsList(newItemsList)
    }
    const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!currentItem.name.trim() || currentItem.quanity <= 0) {
            alert('Enter valid data!')
            return
        }
        if (editingItem) {
            setItemsList(
                itemsList.map(item =>
                    item.id === editingItem ? { ...currentItem } : item
                )
            )
            setEditingItem(undefined)
        } else {
            setItemsList([...itemsList, { ...currentItem, id: uuidv4() }])
        }
        setCurrentItem({ name: '', quanity: 0, id: '' })
    }
    const handleCurrentItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentItem({
            ...currentItem,
            name: e.target.value,
        })
    }
    const handleCurrentItemQuanity = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCurrentItem({
            ...currentItem,
            quanity: Number(e.target.value),
        })
    }

    return (
        <>
            <input
                placeholder='Enter item name'
                onChange={handleCurrentItemName}
                value={currentItem.name}
                id='nameInput'
            />
            <input
                placeholder='Enter item quantity'
                onChange={handleCurrentItemQuanity}
                value={currentItem.quanity}
                id='quanityInput'
            />
            <button onClick={handleAddClick} id='addButton'>
                {editingItem ? 'Save' : 'Add'}
            </button>
            <ul>
                {itemsList.map((item, index) => {
                    return (
                        <li key={item.id}>
                            {item.name}: {item.quanity}
                            <button
                                style={{ marginLeft: '10px' }}
                                onClick={() => handleChanges(item.id)}
                                id='changeButton'
                            >
                                Change
                            </button>
                            <button
                                style={{ marginLeft: '10px' }}
                                onClick={() => handleDelete(item.id)}
                                id='deleteButton'
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
export { Groceries }

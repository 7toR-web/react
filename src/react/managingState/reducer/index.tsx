import { stat } from 'fs'
import css from './index.module.scss'
import React, { useEffect, useReducer, useState } from 'react'
import { idText } from 'typescript'

function reducer(state: { count: number }, action: any) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error('There isn`t valid action')
    }
}

const SimpleCounter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    function handleIncrement() {
        dispatch({ type: 'increment' })
    }

    function handleDecrement() {
        dispatch({ type: 'decrement' })
    }
    return (
        <>
            <button
                onClick={handleDecrement}
                className={css.increment}
                style={{ width: '50px', height: '50px' }}
            >
                -
            </button>
            <span>{state.count}</span>
            <button
                onClick={handleIncrement}
                className={css.increment}
                style={{ width: '50px', height: '50px' }}
            >
                +
            </button>
        </>
    )
}

function todoReducer(state: any[], action: any) {
    switch (action.type) {
        case 'add-new-todo':
            return [...state, newToDo(action.payload.name)]
        case 'toggle-todo':
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, complete: !item.complete }
                }
                return item
            })
        case 'delete-todo':
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state
    }
}

function newToDo(name: string) {
    return { id: Date.now(), name: name, complete: false }
}

const ToDoReducer = () => {
    const [todos, dispatch] = useReducer(todoReducer, [])
    const [name, setName] = useState<string>('')

    console.log(todos)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({ type: 'add-new-todo', payload: { name: name } })
        setName('')
    }

    const handleToggle = (id: number | string) => {
        dispatch({ type: 'toggle-todo', payload: { id: id } })
    }

    const handleDelete = (id: number | string) => {
        dispatch({ type: 'delete-todo', payload: { id: id } })
    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <input
                    style={{
                        width: '200px',
                        height: '50px',
                        marginTop: '30px',
                        fontSize: '23px',
                    }}
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                ></input>
            </form>
            <ul>
                {todos.map((item, index) => {
                    return (
                        <li
                            key={item.id}
                            style={{
                                margin: '20px',
                                color:
                                    item.complete === false ? 'yellow' : 'red',
                            }}
                        >
                            {item.name}{' '}
                            <button onClick={() => handleToggle(item.id)}>
                                Toggle
                            </button>
                            <button onClick={() => handleDelete(item.id)}>
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

function reducerBMY(
    state: { name: string; id: number | string; complete: boolean }[],
    action: any
) {
    switch (action.type) {
        case 'add-new-todo':
            return [...state, doNewItem(action.payload.name)]

        case 'delete-todo':
            return state.filter(item => item.id !== action.payload.id)

        case 'toggle-todo':
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return { ...item, complete: !item.complete }
                }
                return item
            })

        default:
            return state
    }
}

function doNewItem(item: string) {
    return { name: item, id: Date.now(), complete: false }
}

const ToDOByMyself = () => {
    const [name, setName] = useState<string>('')
    const [namesList, dispatch] = useReducer(reducerBMY, [])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch({ type: 'add-new-todo', payload: { name: name } })
        setName('')
    }

    const handleToggle = (e: string | number) => {
        dispatch({ type: 'toggle-todo', payload: {id: e} })
    }

    const handleDelete = (e: number | string) => {
        dispatch({ type: 'delete-todo', payload: { id: e } })
    }

    useEffect(() => {
        console.log(namesList)
    }, [namesList])

    return (
        <>
            <form style={{ margin: '40px' }} onSubmit={e => handleSubmit(e)}>
                <input
                    style={{ width: '200px', height: '50px', fontSize: '22px' }}
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                ></input>
            </form>
            <ul>
                {namesList.map((item, _) => {
                    return (
                        <li
                            key={item.id}
                            style={{
                                color: item.complete === true ? 'greenyellow' : 'red',
                            }}
                        >
                            {item.name}
                            <button
                                onClick={() => handleToggle(item.id)}
                                style={{ margin: '10px' }}
                            >
                                Toggle
                            </button>
                            <button onClick={() => handleDelete(item.id)}>
                                Delete
                            </button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export { SimpleCounter, ToDoReducer, ToDOByMyself }

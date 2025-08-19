import { create } from 'domain'
import css from './index.module.scss'
import React, {
    act,
    Children,
    createContext,
    ReactNode,
    useContext,
    useReducer,
    useRef,
    useState,
} from 'react'

function Stopwatch() {
    const [startTime, setStartTime] = useState<null | number>(null)
    const [now, setNow] = useState<null | number>(null)
    const intervalRef = useRef<any>(null)

    const handleStart = () => {
        setNow(Date.now())
        setStartTime(Date.now())

        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
    }

    let secondsPast =
        now !== null && startTime !== null ? (now - startTime) / 1000 : 0

    return (
        <>
            <h1>Time: {secondsPast.toFixed(2)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

function Refferencing() {
    const ref = useRef(0)
    return (
        <>
            <button
                onClick={e => {
                    ref.current = ref.current + 1
                    alert(`You clicked ${ref.current} times`)
                }}
            >
                {ref.current}
            </button>
            <Stopwatch />
        </>
    )
}

export default Refferencing

interface UserCardProps {
    users: { name: string; age: number; isActive: boolean }[]
}

const UserCard = (props: UserCardProps) => {
    const adultEmployes = props.users.filter(item => item.age >= 18)
    const minorEmployes = props.users.filter(item => item.age < 18)
    return (
        <>
            <h2>Users</h2>
            {adultEmployes.map(item => {
                return (
                    <>
                        <p>Name: {item.name}</p>
                        <p>Age: {item.age}</p>
                        <p>isActive: {item.isActive}</p>
                    </>
                )
            })}
            {minorEmployes.map(item => {
                return (
                    <>
                        <p>Name: {item.name}</p>
                        <p>Age: {item.age}</p>
                        <p>isActive: {item.isActive}</p>
                    </>
                )
            })}
        </>
    )
}

export { UserCard }

function reducer(
    state: { count: number },
    action: {
        type: string
        payload: any
    }
) {
    switch (action.type) {
        case 'increase': {
            return { count: state.count + 1 }
        }
        default:
            return state
    }
}

const CounterWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const increaseState = () => {
        dispatch({
            type: 'increase',
            payload: {
                count: state.count,
            },
        })
    }

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={increaseState}>'Increase'</button>
        </div>
    )
}

export { CounterWithReducer }

const ValidatedForms = () => {
    const [email, setEmail] = useState<string | null>(null)
    const [password, setPassword] = useState<string | null>(null)
    const [inAccount, setInAccount] = useState<boolean>(false)

    const handleEmailChanges = (e: HTMLInputElement) => {
        setEmail(e.value)
    }

    const handlePasswordChanges = (e: HTMLInputElement) => {
        setPassword(e.value)
    }

    const handleSubmitClick = (e: React.MouseEvent) => {
        e.preventDefault()

        if (
            email !== null &&
            email?.includes('@gmail.com') &&
            password !== null &&
            password?.length > 5 &&
            password !== '12345'
        ) {
            setInAccount(prev => !prev)
            setEmail('')
            setPassword('')
        } else {
            alert('Uncorect data, check again')
            setEmail('')
            setPassword('')
        }
    }

    return (
        <>
            {!inAccount ? (
                <form action='search'>
                    <input
                        key={'emailField'}
                        placeholder='Enter ur email'
                        value={email !== null ? email : ''}
                        onChange={e => handleEmailChanges(e.target)}
                    ></input>
                    <input
                        key={'passwordField'}
                        placeholder='Enter ur passwird'
                        value={password !== null ? password : ''}
                        onChange={e => handlePasswordChanges(e.target)}
                    ></input>
                    <button type='submit' onClick={e => handleSubmitClick(e)}>
                        Sign in
                    </button>
                </form>
            ) : (
                <h2>'You are signed in'</h2>
            )}
        </>
    )
}

export { ValidatedForms }

const UserSearch = (): any => {
    const [search, setSearch] = useState<string>('')
    const users = [
        { name: 'Kostya', age: 18, isMarried: false },
        { name: 'Alexandr', age: 18, isMarried: false },
        { name: 'Cristoph', age: 18, isMarried: false },
        { name: 'Rino', age: 18, isMarried: false },
        { name: 'Rinvwio', age: 18, isMarried: false },
        { name: 'KAsha', age: 18, isMarried: true },
        { name: 'Yana', age: 18, isMarried: false },
        { name: 'Lesha', age: 18, isMarried: true },
        { name: 'Dasha', age: 18, isMarried: false },
        { name: 'Michael', age: 18, isMarried: false },
        { name: 'Liza', age: 18, isMarried: true },
    ]

    function handleSearch(e: string) {
        setSearch(e)
    }
    const filteredUsers = users.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <>
            <input
                value={search}
                onChange={e => handleSearch(e.target.value)}
            ></input>
            {filteredUsers.length >= 1 ? (
                filteredUsers.map((item, i) => {
                    return (
                        <li key={i}>
                            Name: {item.name}, age: {item.age}, isMarried:{' '}
                            {item.isMarried ? 'Yes' : 'No'}
                        </li>
                    )
                })
            ) : (
                <p>Nothing found</p>
            )}
        </>
    )
}

export { UserSearch }

// const ThemeContext = createContext('dark')

// const ThemeToggleBox = () => {
//     const [theme, setTheme] = useState(useContext(ThemeContext))
//     const handleThemeChanger = () => {
//         setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
//     }

//     return (
//         <>
//             <ThemeContext.Provider value={theme}>
//                 <button onClick={handleThemeChanger}>Change Theme</button>
//                 <div
//                     style={{
//                         width: '100px',
//                         height: '100px',
//                         backgroundColor: theme === 'light' ? 'yellow' : 'red',
//                     }}
//                 ></div>
//             </ThemeContext.Provider>
//         </>
//     )
// }

// export { ThemeToggleBox }

function reducer2(state: { theme: string }, action: { type: string }) {
    switch (action.type) {
        case 'toggleColor':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            }
        default:
            return state
    }
}

const ToggleBox2Context = createContext<string>('light')

const ToggleBox2 = () => {
    let theme = useContext(ToggleBox2Context)
    const [state, dispatch] = useReducer(reducer2, { theme: theme })
    theme = state.theme
    function handleChangeColor() {
        dispatch({ type: 'toggleColor' })
    }

    return (
        <>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: theme === 'light' ? 'yellow' : 'pink',
                }}
            ></div>
            <button onClick={handleChangeColor}>Изменить цвет)</button>
        </>
    )
}

export { ToggleBox2 }

//

type ToDoAction =
    | { type: 'SET_NEW_TASK' }
    | { type: 'SET_TASK_TEXT'; payload: string }

type ToDoState = {
    allTasks: { taskText: string }[]
    taskText: string
}

const initialState: ToDoState = {
    allTasks: [{ taskText: '' }],
    taskText: '',
}

function ToDoReducer(state: ToDoState, action: ToDoAction): ToDoState {
    switch (action.type) {
        case 'SET_NEW_TASK':
            if (!state.taskText.trim()) return { ...state, taskText: '' }

            return {
                allTasks: [...state.allTasks, { taskText: state.taskText }],
                taskText: '',
            }

        case 'SET_TASK_TEXT':
            return {
                ...state,
                taskText: action.payload,
            }
    }
}

const ToDoComeBack = () => {
    const [state, dispatch] = useReducer(ToDoReducer, initialState)

    return (
        <>
            <input
                value={state.taskText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({ type: 'SET_TASK_TEXT', payload: e.target.value })
                }
            ></input>
            <button onClick={() => dispatch({ type: 'SET_NEW_TASK' })}>
                Add new Tasks
            </button>

            {state.allTasks.length ? (
                state.allTasks.map((item, i) => {
                    if (!item.taskText) return

                    return <li key={i}>{item.taskText}</li>
                })
            ) : (
                <li>empty</li>
            )}
        </>
    )
}

export { ToDoComeBack }

const Theme = createContext('light')

const ToggleThemeText = () => {
    const [theme, setTheme] = useState('light')

    return (
        <>
            <Theme.Provider value={theme}>
                <button
                    onClick={() =>
                        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
                    }
                >
                    Change Color
                </button>
                <div
                    style={{
                        height: '100px',
                        width: '100px',
                        backgroundColor:
                            theme === 'light' ? 'yellowgreen' : 'red',
                    }}
                ></div>{' '}
            </Theme.Provider>
        </>
    )
}

export { ToggleThemeText }

function MyComponent() {
    const [counter, setCounter] = useState(0)
    const [text, setText] = useState('')

    function MyTextField(
        data: string,
        func: (e: React.ChangeEvent<HTMLInputElement>) => void
    ) {
        return <input value={data} onChange={func} />
    }

    return (
        <>
            {MyTextField(text, (e: any) => setText(e.target.value))}
            <button
                onClick={() => {
                    setCounter(counter + 1)
                }}
            >
                Clicked {counter} times
            </button>
        </>
    )
}

export { MyComponent }

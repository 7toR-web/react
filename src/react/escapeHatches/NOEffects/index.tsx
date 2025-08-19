// import { json } from 'stream/consumers'
import css from './index.module.scss'
// import { useEffect, useMemo, useRef, useState } from 'react'

// function TodoList({ todo, filter }: { todo: string[]; filter: string }) {
//     const [newToDo, setNewToDo] = useState('')

//     console.time('useMemo')
//     const visibleToDos = useMemo(
//         () => todo.filter(todo => todo.includes(filter)),
//         [todo, filter]
//     ) //✅ Does not re-run unless todos or filter change
//     console.timeEnd('useMemo')
// }

// const List = ({ items }: { items: (number | string)[] }) => {
//     const [selectedItem, setSelectedItem] = useState(null)
//     const [prevItems, setPrevItems] = useState(items)

//     if (prevItems !== items) {
//         setPrevItems(items)
//         setSelectedItem(null)
//     }
// }

// if (typeof window !== 'undefined') {
//     // Check if we're running in the browser.
//     // ✅ Only runs once per app load
//     checkAuthToken()
//     loadDataFromLocalStorage()
// }

// function App() {
//     // ...
// }

// let didInit = false

// function App() {
//     useEffect(() => {
//         if (!didInit) {
//             didInit = true
//             // ✅ Only runs once per app load
//             loadDataFromLocalStorage()
//             checkAuthToken()
//         }
//     }, [])
//     // ...
// }
// //

// function Toogle({ onChange }: { onChange: (arg1: boolean) => void }) {
//     const [isOn, setIsOn] = useState(false)
//     function isCloserToRigthEdge(e: any) {
//         const fate = Math.floor(Math.random())
//         return fate > 0.49 ? true : false
//     }

//     const handleState = (state: boolean) => {
//         setIsOn(state)
//         onChange(state)
//     }

//     const handleClick = () => {
//         handleState(!isOn)
//     }

//     const handleDrag = (e: any) => {
//         if (isCloserToRigthEdge(e)) {
//             handleState(true)
//         } else {
//             handleState(false)
//         }
//     }
// }

// const statusOnline = (): boolean => {
//     const [isOnline, setIsOnline] = useState(true)

//     useEffect(() => {
//         function updateIsOnline() {
//             setIsOnline(navigator.onLine)
//         }

//         updateIsOnline()

//         window.addEventListener('online', updateIsOnline)
//         window.addEventListener('offline', updateIsOnline)

//         return () => {
//             window.removeEventListener('online', updateIsOnline)
//             window.removeEventListener('offline', updateIsOnline)
//         }
//     }, [])
//     return isOnline
// }

// const SearchResult = ({
//     query,
//     fetchResults,
// }: {
//     query: string
//     fetchResults: (query: string, page: number) => Promise<string[]>
// }) => {
//     const [result, setResult] = useState<string[]>([])
//     const [page, setPage] = useState(0)

//     useEffect(() => {
//         let ignore = false

//         fetchResults(query, page).then(json => {
//             if (!ignore) {
//                 setResult(json)
//             }
//         })
//         return () => {
//             ignore = true
//         }
//     }, [query, page])
// }

// const useData = (url: string) => {
//     const [data, setData] = useState(null)

//     useEffect(() => {
//         let ignore = false

//         fetch(url)
//             .then(response => response.json())
//             .then(response => {
//                 if (!ignore) {
//                     setData(json)
//                 }
//             })
//         return () => {
//             ignore = true
//         }
//     }, [url])
//     return data
// }

// function ChatIndocator() {
//     const status = statusOnline()
// }

// const NoEffects = () => {
//     return <div>Example text</div>
// }

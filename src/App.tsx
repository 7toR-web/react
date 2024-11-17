import React from 'react'
import './App.css'
import { Profile } from './components/passing props'
import { FirstText } from './components/firstComponent'
import { PackingList } from './conditionlyRendering'

function App() {
    return (
        <>
            {/* <FirstText /> */}
            {/* <Profile /> */}
            <PackingList />
        </>
    )
}

export default App

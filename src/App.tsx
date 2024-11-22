import React from 'react'
import './App.css'
import { Profile } from './components/passing props'
import { FirstText } from './components/firstComponent'
import { PackingList } from './components/conditionlyRendering'
import List from './components/renderingLists'
import { ReceipeLists } from './components/renderingLists'
import { Separator } from './components/renderingLists'

function App() {
    return (
        <>
            {/* <FirstText /> */}
            {/* <Profile /> */}
            {/* <PackingList /> */}
            {/* <List /> */}
            <ReceipeLists/>
            <Separator />
        </>
    )
}

export default App

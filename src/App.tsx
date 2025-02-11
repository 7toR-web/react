import React from 'react'

import { useState } from 'react'

import logo from './logo.svg'

import { DndProvider } from 'react-dnd'

import { HTML5Backend } from 'react-dnd-html5-backend'

import './App.css'

import { DragAndDrop } from './components/dragAndDrop/dragAndDrop'

import { CheckBoxCreater } from './components'

function App() {
    const [itemsZone, setItemsZone] = useState<{}[]>([])
    const [boxZone, setBoxZone] = useState<{}[]>([])
    
    return (
        <>
            {/* <CheckBoxCreater /> */}
            <DndProvider backend={HTML5Backend}>
                <DragAndDrop />
            </DndProvider>
        </>
    )
}

export default App

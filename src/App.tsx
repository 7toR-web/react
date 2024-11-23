import React from 'react'
import './App.css'
import FirstTSComponent from './components'
import { LogAlbumInfo } from './components'
import { result } from './components'
import { resultOfJoin } from './components'

function App() {
    return (
        <>
            <FirstTSComponent value='Hello World'/>
            {LogAlbumInfo(`Black Gold`, 12, true)}
            <p>{result}</p>
            <p>{resultOfJoin}</p>
        </>
    )
}

export default App

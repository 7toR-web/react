import React from 'react'
import './App.css'
import { Profile } from './describingUI/passing props'
import { FirstText } from './describingUI/firstComponent'
import { PackingList } from './describingUI/conditionlyRendering'
import List from './describingUI/renderingLists'
import { ReceipeLists } from './describingUI/renderingLists'
import { Separator } from './describingUI/renderingLists'
import { Button } from './addingInteractivity/respondingEvents'
import { AlertButton } from './addingInteractivity/respondingEvents'
import { PlayingButton } from './addingInteractivity/respondingEvents'
import { UploadButton } from './addingInteractivity/respondingEvents'
import { Gallery } from './addingInteractivity/state:ComponentsMemory'

function App() {
    return (
        <>
            {/* <FirstText /> */}
            {/* <Profile /> */}
            {/* <PackingList /> */}
            {/* <List /> */}
            {/* <ReceipeLists/> */}
            {/* <Separator /> */}
            {/* <Button /> */}
            {/* <AlertButton message='Playing!' children={7} /> */}
            {/* <AlertButton message='Clicked!' children={17} /> */}
            {/* <PlayingButton movieName='Tom and Jery'/> */}
            {/* <UploadButton /> */}
            <Gallery />
        </>
    )
}

export default App

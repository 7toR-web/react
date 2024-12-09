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
import { Form } from './addingInteractivity/stateAsSnapshot'
import { TraficLight } from './addingInteractivity/stateAsSnapshot'
import { Counter } from './addingInteractivity/seriesOfStateUpdates'
import { ArtMarketPlace } from './addingInteractivity/seriesOfStateUpdates'

function App() {
    return (
        <>
            {/* <Profile /> */}
            {/* <FirstText /> */}
            {/* <PackingList /> */}
            {/* <List /> */}
            {/* <ReceipeLists/> */}
            {/* <Separator /> */}
            {/* <Button /> */}
            {/* <AlertButton message='Playing!' children={7} /> */}
            {/* <AlertButton message='Clicked!' children={17} /> */}
            {/* <PlayingButton movieName='Tom and Jery'/> */}
            {/* <UploadButton /> */}
            {/* <Gallery /> */}
            {/* <Form /> */}
            {/* <TraficLight /> */}
            <Counter />
            <ArtMarketPlace />
        </>
    )
}

export default App

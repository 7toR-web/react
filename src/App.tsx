import React from 'react'
import './App.css'
import { Profile } from './describingUI/passing props'
import { FirstText } from './describingUI/firstComponent'
import { PackingList } from './describingUI/conditionlyRendering'
// import List from './describingUI/renderingLists'
import { ReceipeLists } from './describingUI/renderingLists'
import { Separator } from './describingUI/renderingLists'
import { Button } from './addingInteractivity/respondingEvents'
import { AlertButton } from './addingInteractivity/respondingEvents'
import { PlayingButton } from './addingInteractivity/respondingEvents'
import { UploadButton } from './addingInteractivity/respondingEvents'
import { Gallery } from './addingInteractivity/state:ComponentsMemory'
import { Form } from './addingInteractivity/stateAsSnapshot'
import { TraficLight } from './addingInteractivity/stateAsSnapshot'
// import { Counter } from './addingInteractivity/seriesOfStateUpdates'
import { ArtMarketPlace } from './addingInteractivity/seriesOfStateUpdates'
import { StateTypes } from './addingInteractivity/updatingObjectsInState/index'
import { StateForm } from './addingInteractivity/updatingObjectsInState/index'
import { List } from './addingInteractivity/updatingArraysInState'
import { FilterList } from './addingInteractivity/updatingArraysInState/index'
import { ShapeEditor } from './addingInteractivity/updatingArraysInState'
import { Counter } from './addingInteractivity/updatingArraysInState/index'
import { ReverseList } from './addingInteractivity/updatingArraysInState/index'

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
            {/* <Counter /> */}
            {/* <ArtMarketPlace /> */}
            {/* <StateTypes /> */}
            {/* <StateForm /> */}
            <List />
            <FilterList />
            <ShapeEditor /> <br />
            <Counter />
            <ReverseList />
        </>
    )
}

export default App

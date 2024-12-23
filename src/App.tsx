import React from 'react'
import css from './App.module.css'
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
import { ClickCounter } from './additionalTasks'
import { ToDoList } from './additionalTasks'
import { WorkForm } from './additionalTasks/index'
import { SimpleTimer } from './additionalTasks'
import { StateCounter } from './additionalTasks'
import { StateFormUpdate } from './additionalTasks'
import { Groceries } from './additionalTasks'

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
            {/* <List /> */}
            {/* <FilterList /> */}
            {/* <ShapeEditor /> <br /> */}
            {/* <Counter /> */}
            {/* <ReverseList /> */}
            <ClickCounter />
            <br />
            <br />
            <ToDoList />
            <WorkForm />
            <div className={css.calendar}>
                {Array.from({ length: 31 }).map((item, index) => {
                    return <div key={index}>{index + 1}</div>
                })}
            </div>
            <div className={css.try}>
                <div className={css.header}>Header</div>
                <div className={css.navigation}>Navigation</div>
                <div className={css.content}>Content</div>
                <div className={css.ads}>Ads</div>
                <div className={css.footer}>Footer</div>
            </div>
            <div className={css.firstLoyaut}>
              <div className={css.firstHeader}>Header</div>
              <div className={css.firstSideBar}>SideBar</div>
              <div className={css.firstMain}>Main</div>
            </div>
            <div className={css.alignment}>
              <div>1</div>
              <div>2</div>
            </div>
            <SimpleTimer />
            <StateCounter />
            <StateFormUpdate />
            <Groceries />
        </>
    )
}

export default App

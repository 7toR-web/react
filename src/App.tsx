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
import { UserList } from './additionalTasks'
import { Rating } from './additionalTasks'
import { ThemeSwitcher } from './additionalTasks'
import { CounterUsingProps } from './additionalTasks'
import { MainComponent } from './additionalTasks/advancePropsTasks/parent'
import { ToDoListUsingProps } from './additionalTasks/advancePropsTasks/parent'
import { LikeButton } from './additionalTasks/advancePropsTasks/parent'
import { UserProfile } from './additionalTasks/advancePropsTasks/parent'
import { ColorPallete } from './additionalTasks/advancePropsTasks/parent'

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
            <UserList
                users={[
                    { id: 54, name: 'Kostya', email: 'kostya5270@gmail.com' },
                    { id: 65, name: 'Yana', email: 'yana5393@gmail.com' },
                ]}
            />
            <Rating score={6} max={5} />
            <ThemeSwitcher theme='light' />
            <CounterUsingProps counter={10} step={5} />
            <MainComponent />
            <ToDoListUsingProps
                items={[
                    { name: 'Milk', id: 1 },
                    { name: 'Bread', id: 2 },
                    { name: 'Cheese', id: 3 },
                ]}
            />
            <LikeButton counter={23143} handleLikeClick={prev => prev + 1} />
            <UserProfile
                user={{
                    name: 'Kostya',
                    age: 25,
                    bio: 'I am a developer',
                    avatarUrl:
                        'https://avatars.githubusercontent.com/u/74969560?v=4',
                }}
            />
            <ColorPallete className={css.colorPallete} colors={['#FF5733', '#33FF57', '#3357FF']}/>
        </>
    )
}

export default App

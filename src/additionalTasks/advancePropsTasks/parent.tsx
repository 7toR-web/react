import React from 'react'
import { useState } from 'react'
import { Child } from './child'
import { randomUUID, UUID } from 'crypto'
import css from './advanceTasks.module.css'

const MainComponent = () => {
    const [randomNumber, setRandomNumber] = useState<number>(0)
    const randomNum = (): void => {
        let rand = Math.floor(Math.random() * 100) + 1
        setRandomNumber(rand)
    }

    return (
        <div style={{ margin: '20px' }}>
            {randomNumber}
            <Child clickHandler={randomNum} />
        </div>
    )
}

export { MainComponent }

interface ToDoItem {
    items: { name: string; id: number }[]
}

const ToDoListUsingProps = (itemsToDo: ToDoItem) => {
    const { items } = itemsToDo
    return (
        <ul>
            {items.map((item, _) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

export { ToDoListUsingProps }

interface LikeButtonProps {
    counter: number
    handleLikeClick: (arg: number) => number
}

const LikeButton = (props: LikeButtonProps) => {
    const { counter, handleLikeClick } = props
    const [currentCounter, setCurrentCounter] = useState<number>(counter)
    return (
        <>
            <p>{currentCounter}</p>
            <button
                style={{ marginBottom: '20px' }}
                onClick={() => setCurrentCounter(prev => handleLikeClick(prev))}
            >
                👍 Like
            </button>
        </>
    )
}

export { LikeButton }

interface UserProfileProps {
    user: {
        name: string
        age: number
        bio: string
        avatarUrl: string
    }
}

const UserProfile = (props: UserProfileProps) => {
    const { user } = props
    return (
        <div className={css.profile}>
            <p>
                {user?.name}({user?.age})
            </p>
            <p>
                {user?.bio} <br />
                <img
                    src={
                        user?.avatarUrl
                            ? user.avatarUrl
                            : 'https:footballPictures.com'
                    }
                    alt={`${user?.name}'s avatar`}
                />{' '}
            </p>
        </div>
    )
}

export { UserProfile }

interface ColorPalleteProps {
    colors: string[]
    className: string
}

const ColorPallete = (props: ColorPalleteProps) => {
    const { className = '', colors } = props
    return (
        <div className={[css.colorPallete, className].join(' ').trim()}>
            {colors.map(item => {
                return (
                    <div
                        style={{
                            width: '100px',
                            height: '100px',
                            backgroundColor: item,
                        }}
                    ></div>
                )
            })}
        </div>
    )
}

export { ColorPallete }

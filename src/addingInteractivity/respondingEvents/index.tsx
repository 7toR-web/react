import React from 'react'

// Button Component
const Button = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.target)
    }

    return <button onClick={handleClick}>I don't do anything</button>
}

export { Button }

// AlertButton Component
type AlertButtonProps = {
    message: string
    children: number
}

const AlertButton = ({ message, children }: AlertButtonProps) => {
    return <button onClick={() => alert(message)}>{children}</button>
}

export { AlertButton }

// ButtonConstructor Component
type ButtonConstructorProps = {
    onclick: () => void
    children: string
}

const ButtonConstructor = ({ onclick, children }: ButtonConstructorProps) => {
    return <button onClick={onclick}>{children}</button>
}

// PlayingButton Component
type PlayingButtonProps = {
    movieName: string
}

const PlayingButton = ({ movieName }: PlayingButtonProps) => {
    const handleClick = () => {
        alert(`Playing ${movieName}`)
    }

    return <ButtonConstructor onclick={handleClick} children='Playing' />
}

const UploadButton = () => {
    return (
        <ButtonConstructor
            onclick={() => alert(`Uploading`)}
            children='Upload Image'
        />
    )
}

export { PlayingButton }
export { UploadButton }

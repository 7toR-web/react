interface ChildProps {
    clickHandler: () => void
}

const Child = (props: ChildProps) => {
    const { clickHandler } = props

    return <button onClick={clickHandler}>Random</button>
}

export { Child }

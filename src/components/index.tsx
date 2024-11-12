import { title } from 'process'

type Props = {
    value: string
}

function FirstTSComponent(props: Props) {
    const { value } = props

    return (
        <>
            <h1>{value}</h1>
        </>
    )
}

export default FirstTSComponent

const joberYana = {
    job: {
        // title: 1231                       wrong property type
        title: `TypeScript development`,
    },
}

const logUserJobTitle = (user: { job: { title: string } }) => {
    console.log(user.job.title)
}

logUserJobTitle(joberYana)

// let element = document.getElementById(12)

/**
 * Add two numbers together
 * @example
 * myFunction(1,4) 
 * @returns 5
 */

const myFunction = (a: number, b: number) => {
    return a + b
}
// hover to explore what does function do ^^^^^^^
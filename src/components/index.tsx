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
    // num: 5
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

//NEW NOTE

// very useful is running tsx in watching mode >> write tsc --watch << in terminal
//it catchs ur errors while typing

export const LogAlbumInfo = (
    title: string,
    trackCount: number,
    isReleased: boolean
) => {
    console.log(title, trackCount, isReleased)
}

let example1: string = 'Hello World!'
let example2: number = 42
let example3: boolean = true
let example4: symbol = Symbol()
// let example5: bigint = 123n
let example6: null = null
let example7: undefined = undefined
let usersBase: Array<any> = [12, 43, `hello world`, true]
let usersObjectBase: Object = { user_21324: true, user_438882: `baned` }

function SummingUp(a: number, b: number) {
    return a + b
}

export const result = SummingUp(12322, 327372)

const concatTwoStrings = (a: string, b: string) => {
    return [a, b].join(' ')
}

export const resultOfJoin = concatTwoStrings(`Hello`, `World`)
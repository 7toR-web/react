import { Fragment } from 'react/jsx-runtime'
import css from './lists.module.css'

export type Props = {
    id: any
    name: string
    ingradients: any
}

const people = [
    {
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A',
    },
    {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa',
    },
    {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji',
    },
    {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment:
            'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71',
    },
    {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l',
    },
]

// const listRendering = people.map(item => <li>{item.name}</li>)
// const listRendering = people
//     .filter(item => item.profession === `chemist`)
//     .map(item => (
//         // <Fragment key={crypto.randomUUID()}>
//         <Fragment key={item.id}>
//             <p>
//                 <b>{item.name}:</b>
//                 <br />
//                 {' ' + item.profession + ' '} <br />
//                 known for {item.accomplishment}
//             </p>
//         </Fragment>
//     ))

// export { listRendering }

export default function List() {
    const chemists = people.filter(item => item.profession === `chemist`)
    const anotherPersons = people.filter(item => item.profession !== `chemist`)
    return (
        <>
            <h1>Scientists</h1>
            <h2>Chemists</h2>
            <ul>
                {chemists.map(person => (
                    <li key={person.id}>
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                ))}
            </ul>
            <h2>Another Persons</h2>
            <ul>
                {anotherPersons.map(person => (
                    <li key={person.id}>
                        <p>
                            <b>{person.name}:</b>
                            {' ' + person.profession + ' '}
                            known for {person.accomplishment}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}

const recipes = [
    {
        id: 'greek-salad',
        name: 'Greek Salad',
        ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
    },
    {
        id: 'hawaiian-pizza',
        name: 'Hawaiian Pizza',
        ingredients: [
            'pizza crust',
            'pizza sauce',
            'mozzarella',
            'ham',
            'pineapple',
        ],
    },
    {
        id: 'hummus',
        name: 'Hummus',
        ingredients: [
            'chickpeas',
            'olive oil',
            'garlic cloves',
            'lemon',
            'tahini',
        ],
    },
]

function ReceipeLists() {
    // const { id, name, ingradients } = props

    return (
        <>
            {recipes.map(item => (
                <>
                    <h1>{item.name}</h1>
                    <ul>
                        {item.ingredients.map(ingradient => (
                            <li key={item.id}>{ingradient}</li>
                        ))}
                    </ul>
                </>
            ))}
        </>
    )
}

export { ReceipeLists }

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.',
    ],
}

function Separator() {
    let output: Array<any> = []

    poem.lines.map((item, i) => {
        output.push(<hr key={i + `separator`}></hr>)
        output.push(<h3 key={i + `text`}>{item}</h3>)
    })

    output.shift()

    return <>{output}</>
}

export { Separator }

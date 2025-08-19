import { useState } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'
import { places } from './data'
import { getImageUrl } from './utils'
import { SizeContext } from './tasksContext'
import { ThemeContext } from './tasksContext'

export default function ImageTask() {
    const [isLarge, setIsLarge] = useState(false)
    const imageSize = isLarge ? 150 : 100

    return (
        <>
            <SizeContext.Provider value={imageSize}>
                <label>
                    <input
                        type='checkbox'
                        checked={isLarge}
                        onChange={e => {
                            setIsLarge(e.target.checked)
                        }}
                    />
                    Use large images
                </label>
                <hr />
                <List />
            </SizeContext.Provider>
        </>
    )
}

function List() {
    const listItems = places.map(place => (
        <li key={place.id}>
            <Place place={place} />
        </li>
    ))
    return <ul>{listItems}</ul>
}

function Place({ place }: { place: any }) {
    return (
        <>
            <PlaceImage place={place} />
            <p>
                <b>{place.name}</b>
                {': ' + place.description}
            </p>
        </>
    )
}

function PlaceImage({ place }: { place: any }) {
    const imageSize = useContext(SizeContext)
    return <img src={getImageUrl(place)} alt={place.name} width={imageSize} />
}

//

const themeReducer = (state: { [key: string]: any }, action: any) => {
    switch (action.type) {
        case 'toggleTheme':
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light',
            }
        default:
            return state
    }
}

const ThemeBox = () => {
    const [themeColor, dispatch] = useReducer(themeReducer, { theme: 'light' })
    const toogleTheme = () => {
        dispatch({ type: 'toggleTheme' })
        console.log(121)
    }

    return (
        <ThemeContext.Provider value={themeColor.theme}>
            <button onClick={() => toogleTheme()}>Toogle Theme</button>
            <BoxForThemeToogle />
        </ThemeContext.Provider>
    )
}

const BoxForThemeToogle = () => {
    const theme = useContext(ThemeContext)
    return (
        <div
            style={{
                width: '200px',
                height: '200px',
                backgroundColor: theme === 'light' ? 'yellow' : 'red',
            }}
        ></div>
    )
}

export { ThemeBox }

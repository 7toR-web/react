import { useState, useRef } from 'react'
import css from './intex.module.scss'

const CatFriends = () => {
    const firstCatRef = useRef<HTMLImageElement>(null)
    const secondCatRef = useRef<HTMLImageElement>(null)
    const thirdCatRef = useRef<HTMLImageElement>(null)

    function handleScrollToFirstCat() {
        firstCatRef.current !== null &&
            firstCatRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            })
    }
    function handleScrollToSecondCat() {
        secondCatRef.current !== null &&
            secondCatRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            })
    }
    function handleScrollToThirdCat() {
        thirdCatRef.current !== null &&
            thirdCatRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            })
    }

    return (
        <>
            <nav>
                <button onClick={handleScrollToFirstCat}>Neo</button>
                <button onClick={handleScrollToSecondCat}>Millie</button>
                <button onClick={handleScrollToThirdCat}>Bella</button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img
                            src='https://placecats.com/neo/300/200'
                            alt='Neo'
                            ref={firstCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src='https://placecats.com/millie/200/200'
                            alt='Millie'
                            ref={secondCatRef}
                        />
                    </li>
                    <li>
                        <img
                            src='https://placecats.com/bella/199/200'
                            alt='Bella'
                            ref={thirdCatRef}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}

function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const myRef = useRef<HTMLVideoElement>(null)

    function handleClick() {
        setIsPlaying(prev => {
            const newState = !prev
            if (myRef.current !== null && newState) {
                myRef.current.play()
            } else if (myRef.current !== null && !newState) {
                myRef.current.pause()
            }
            return newState
        })
    }

    return (
        <>
            <button onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video width='250' ref={myRef}>
                <source
                    src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
                    type='video/mp4'
                />
            </video>
        </>
    )
}

function Page() {
    const myRef = useRef<HTMLInputElement>(null)
    const handleClick = () => {
        myRef.current !== null && myRef.current?.focus()
    }
    return (
        <>
            <nav>
                <button onClick={handleClick}>Search</button>
            </nav>
            <input ref={myRef} placeholder='Looking for something?' />
        </>
    )
}

function CatFriends2() {
    const [index, setIndex] = useState(0)
    const myRef = useRef<Map<string, any> | null>(null)

    const getMap = () => {
        if (!myRef.current) {
            myRef.current = new Map()
        }
        return myRef.current
    }

    const scrollIntoView = () => {
      
    }

    return (
        <>
            <nav>
                <button
                    onClick={() => {
                        if (index < catList.length - 1) {
                            setIndex(index + 1)
                        } else {
                            setIndex(0)
                        }
                    }}
                >
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) => (
                        <li
                            key={cat.id}
                            ref={node => {
                                const map = getMap()
                                map.set(cat.imageUrl, node)
                            }}
                        >
                            <img
                                className={index === i ? css.active : ''}
                                src={cat.imageUrl}
                                alt={'Cat #' + cat.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const catList: { id: number; imageUrl: string }[] = []
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i,
    })
}

const NodeRef = () => {
    const myRef = useRef(null)
    const handleClickRef = useRef<HTMLInputElement>(null)
    const handleFocusClick = () => {
        handleClickRef.current !== null && handleClickRef.current?.focus()
    }
    return (
        <>
            <div ref={myRef} style={{ margin: '30px' }}>
                some interesting information
            </div>
            <input
                style={{ marginBottom: '30px' }}
                type='text'
                ref={handleClickRef}
            ></input>
            <button onClick={handleFocusClick}>Focus on input</button>
            <CatFriends />
            <VideoPlayer />
            <br />
            <br />
            <Page />
            <br />
            <br />
            <CatFriends2 />
        </>
    )
}

export default NodeRef

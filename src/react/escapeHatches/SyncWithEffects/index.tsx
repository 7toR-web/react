import css from './index.module.scss'
import {
    ChangeEvent,
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from 'react'

function InputElement() {
    const [text, setText] = useState('Hello, ')
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    useEffect(() => {
        console.log('🔵 Schedule "' + text + '" log')
        function timeOut() {
            console.log('⏰ ' + text)
        }
        const timer = setTimeout(timeOut, 3000)

        return () => {
            console.log('🟡 Cancel "' + text + '" log')
            clearTimeout(timer)
        }
    }, [text])
    return (
        <>
            <input
                onChange={e => handleInputChange(e)}
                value={text}
                type='text'
                style={{ marginLeft: '30px' }}
            ></input>
            <h1>{text}</h1>
        </>
    )
}

function MountingComponent() {
    const [onMounting, setOnMounting] = useState(false)

    const handleMountClick = () => {
        setOnMounting(prev => !prev)
    }
    return (
        <>
            <button
                style={{ margin: '30px' }}
                onClick={e => handleMountClick()}
            >
                {onMounting ? 'Unmount' : 'Mount'}
            </button>
            <br />
            {onMounting && <InputElement />}
        </>
    )
}

function Effects({ src, isPlaying }: { src: string; isPlaying: boolean }) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (isPlaying) {
            console.log('Video is playing')
            videoRef.current?.play()
        } else {
            console.log('Video is on pause')
            videoRef.current?.pause()
        }
    }, [isPlaying])

    return (
        <>
            <video
                width='250'
                ref={videoRef}
                src={src}
                loop
                playsInline
            ></video>
            <br />
            <MountingComponent />
        </>
    )
}

export { Effects }

import { connect } from 'http2'
import css from './index.module.scss'
import { useEffect, useState, useContext } from 'react'
import { DefaultValues } from './context'

function createConnection(
    roomId: string,
    selectedServer?: string
): {
    id: string
    connect: Function
    disconnect: Function
} {
    return {
        id: roomId,
        connect: () => console.log('Connected to ' + roomId),
        disconnect: () => console.log('disconnected from ' + roomId),
    }
}

const ChatRoom = ({ roomId }: { roomId: string }) => {
    useEffect(() => {
        const connection = createConnection(roomId) // Connects to the "general" room
        connection.connect()

        return () => {
            connection.disconnect()
        }
    }, [roomId]) // Disconnects from the room when the component unmounts
    return <p>Welcome to {roomId} room!</p>
}

const LifeCycle = () => {
    const [roomId, setRoomId] = useState('no room')

    function handleConnectClick() {
        if (Math.random() > 0.49) {
            setRoomId('travel')
        } else {
            setRoomId('food')
        }
        console.log('Click')
    }

    return (
        <>
            <button onClick={handleConnectClick}>
                Click to connect another room
            </button>
            <ChatRoom roomId={roomId} />
        </>
    )
}

function ChatRoom2({
    roomId,
    selectedServer,
}: {
    roomId: string
    selectedServer?: string
}) {
    const settings = useContext(DefaultValues)
    const serverUrl = selectedServer ?? settings.url

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId) // Your Effect reads roomId and serverUrl
        connection.connect()
        return () => {
            connection.disconnect()
        }
    }, [roomId, serverUrl])
}

// Each Effect in your code should represent a separate and independent synchronization process.

export { LifeCycle }

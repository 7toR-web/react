import { createContext, useContext, useState, useRef, Children } from 'react'

const Wrapper = ({
    children,
    value,
}: {
    children: React.ReactNode
    value: string
}) => {
    const TextContext = createContext<string | null>(null)
    return <TextContext.Provider value={value}>{children}</TextContext.Provider>
}

export { Wrapper }

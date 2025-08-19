import React from 'react'
import { useContext } from 'react'
import { LevelContext } from './context'

interface SectionProps {
    children: React.ReactNode
    level?: number
}

function Section({ children }: SectionProps) {
    const level = useContext(LevelContext)
    return (
        <LevelContext.Provider value={level + 1}>
            <section>{children}</section>
        </LevelContext.Provider>
    )
}

export { Section }

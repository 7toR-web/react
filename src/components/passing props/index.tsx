import css from './component.module.css'
import { useState } from 'react'

type Props = {
    person: Record<string, any>
    size: number
}

function Avatar(props: Props) {
    const { person, size } = props

    return (
        <img
            className={css.avatar}
            src='https://i.imgur.com/1bX5QH6.jpg'
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

function Profile() {
    return (
        <>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2',
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh',
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6',
                }}
            />
        </>
    )
}

export { Profile }

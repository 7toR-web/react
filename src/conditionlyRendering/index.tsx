import css from './condition.module.css'

type Props = {
    name: string
    isPacked: boolean
}

function Item(props: Props) {
    const { name, isPacked } = props

    return (
        <li className={css.item}>
            {name}
            {isPacked && ' ✅'}
        </li>
    )
}

function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item isPacked={true} name='Space suit' />
                <Item isPacked={true} name='Helmet with a golden leaf' />
                <Item isPacked={false} name='Photo of Tam' />
            </ul>
        </section>
    )
}

export { PackingList }

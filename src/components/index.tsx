import { useState } from 'react'
import css from './component.module.css'

const CheckBoxCreater = () => {
    const [box1State, setBox1State] = useState(false)

    box1State && console.log(`marked`)
    !box1State && console.log(`unmarked`)

    return (
        <>
            <input
                className={css.checkBoxes}
                type='checkbox'
                checked={box1State}
                onChange={e => {
                    setBox1State(e.target.checked)
                }}
            />
            <span>CheckBox 1</span>
        </>
    )
}

export { CheckBoxCreater }

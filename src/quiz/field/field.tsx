import React, { useState } from 'react'
import css from '/Users/kostyapanov/Documents/code/Курс обучения/react/react-typescript-tut/src/quiz/field/field.module.css'
import { Familiarization } from '../familiarization/familiarization'

const Field = () => {
    const [familiarizationVisible, setFamiliarizationVisible] = useState(true)
    const [visibleGreeting, setVisibleGreeting] = useState(false)
    return (
        <>
            <div className={css.fieldContainer}>
                {familiarizationVisible && <Familiarization />}
            </div>
        </>
    )
}

export { Field }

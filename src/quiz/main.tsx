import React from 'react'
import { useState } from 'react'
import { Familiarization } from './familiarization/familiarization'
import css from './main.module.css'
import { Field } from './field/field'

const Quiz = () => {
    return (
        <>
            <div className={css.quizContainer}>
                <h1>React oriented quiz</h1>
                <Field />
            </div>
        </>
    )
}

export { Quiz }

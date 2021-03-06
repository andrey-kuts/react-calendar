import React from 'react'

import { useStateValue } from '../store'

import Calendar from './Calendar'
import DayInfo from './DayInfo'

import * as S from './styledComponents'

const App = () => {
    return (
        <>
            <S.GlobalStyles />
            <DayInfo />
            <Calendar />
        </>
    )
}

export default App

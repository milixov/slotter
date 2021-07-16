import React, { createContext, useReducer, Dispatch } from 'react'

import { C } from './constants'
import {reducer, TState, TAction} from './reducer'

interface IStore {
    children: React.ReactNode
}

const Context = createContext<[TState, Dispatch<TAction>]>([[], () => {}]);

const Store: React.FC<IStore> = (props) => {

    const {children} = props
    const [state, dispatch] = useReducer(reducer, [])
    
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export {Context, C}
export default Store
import React, { createContext, useReducer, Dispatch } from 'react'

import {reducer, TState} from './reducer'

interface IStore {
    children: React.ReactNode
}

export const Context = createContext<[TState, Dispatch<any>]>([[], () => {}]);

const Store: React.FC<IStore> = (props) => {

    const {children} = props
    const [state, dispatch] = useReducer(reducer, [])
    
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Store
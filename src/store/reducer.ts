import { C } from './constants'
import { ITimeSlot } from 'types'

interface ISelectedSlot {
    companyId: number | string
    slot: ITimeSlot
}

export type TState = ISelectedSlot[] | []

type TAction = {
    type: keyof typeof C,
    value: ISelectedSlot
}

export const reducer = (state: TState, action: TAction): TState => {
    switch (action.type) {
        case C.SELECT_SLOT:
            const company = action.value.companyId
            const searchForCompany = state.find(item => item.companyId === company)
            if(searchForCompany) {
                const excludeCompany = state.filter(item => item.companyId !== company)
                return [...excludeCompany]
            } else {
                return [...state, action.value]
            }
        default:
            return state
    }
}
import { C } from './constants'
import { ISelectedSlot } from 'types'

export type TState = ISelectedSlot[] | []

export type TAction = {
    type: keyof typeof C | string,
    value: ISelectedSlot
}

export const reducer = (state: TState, action: TAction): TState => {
    switch (action.type) {
        case C.SELECT_SLOT:
            const company = action.value
            const companyId = company.companyId
            const searchForCompany = state.find(item => item.companyId === companyId)
            if(searchForCompany) {
                const excludeCompany = state.filter(item => item.companyId !== companyId)
                if(searchForCompany.slot.start_time === company.slot.start_time) {
                    return [...excludeCompany]
                } else {
                    return [...excludeCompany, action.value]
                }
            } else {
                return [...state, action.value]
            }
        default:
            return state
    }
}

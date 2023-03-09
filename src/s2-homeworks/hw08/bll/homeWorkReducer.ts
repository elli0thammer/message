import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            state.sort(function (a, b) {
                if (a.name > b.name && action.payload === 'up') {
                    return 1;
                }
                if (a.name < b.name && action.payload === 'down') {
                    return 0;
                }
                return -1;
            })
            return state
            // need to fix
        }
        case 'check': {
            return state.filter(el => el.age > 18 && action.payload === 18) // need to fix
        }
        default:
            return state
    }
}

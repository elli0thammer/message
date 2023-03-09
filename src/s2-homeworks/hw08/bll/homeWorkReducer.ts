import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.sort(function (a, b) {
                if (action.payload === 'up') {
                    if (a.name > b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                } else if (action.payload === 'down') {
                    if (a.name < b.name) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
                return 1
            })
            // need to fix
        }
        case 'check': {
            return state.filter(el => el.age > action.payload) // need to fix
        }
        default:
            return state
    }
}

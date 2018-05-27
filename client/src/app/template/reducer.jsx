import type from './types'

const INITIAL_STATE = {
    menuIsVisible: false,
    template: 'blank'
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case type.TOGGLE_MENU:
            return { ...state, menuIsVisible: !state.menuIsVisible }

        case type.CHANGE_TEMPLATE:
            return { ...state, template: action.payload }

        default:
            return state
    }
}

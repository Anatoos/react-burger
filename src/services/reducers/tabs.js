import { SET_TAB } from "../actions/tabs";

const tabInitialState = {
    activeTab: 'bun'
}

export const tabReducer = (state = tabInitialState, action) => {
    switch (action.type) {
        case SET_TAB: {
            return {
                activeTab: action.tab
            }
        }
        default:{
            return state
        }
    }
}
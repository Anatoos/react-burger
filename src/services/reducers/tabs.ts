import { SET_TAB } from "../actions/tabs";
import { TSetTabAction } from "../actions/tabs";

type TInitialState = {
    activeTab: string
}
export const tabInitialState = {
    activeTab: 'bun'
}

export const tabReducer = (state:TInitialState = tabInitialState, action:TSetTabAction) => {
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
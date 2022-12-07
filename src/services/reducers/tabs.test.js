import * as actions from '../actions/tabs'
import { tabReducer } from "./tabs";

const initialTabState = {
    activeTab: 'bun'
}

describe('tabReducer', ()=>{
    it('should return the initial State', () => {
        expect(tabReducer(undefined,{})).toEqual(initialTabState)
    })

    it('should handle SET_TAB', ()=> {
        expect(
            tabReducer(initialTabState, {
                type: actions.SET_TAB,
                tab: 'sauce'
            })
        ).toEqual(
            expect.objectContaining({
                activeTab: 'sauce',
            })
        )
    })
})
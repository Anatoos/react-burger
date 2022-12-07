import * as actions from '../actions/tabs'
import { tabReducer, tabInitialState } from "./tabs";


describe('tabReducer', ()=>{
    it('should return the initial State', () => {
        expect(tabReducer(undefined,{})).toEqual(tabInitialState)
    })

    it('should handle SET_TAB', ()=> {
        expect(
            tabReducer(tabInitialState, {
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